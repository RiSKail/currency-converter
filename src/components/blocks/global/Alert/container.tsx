import React, { useCallback, useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import AlertStyle, { Colors } from './styles'

interface Props {
  type?: string
  text?: string
  time?: number
  callback(): void
}

const Alert: React.FC<Props> = ({ type, text, time, callback }) => {
  const intl = useIntl()
  const alertSuccess = intl.formatMessage({ id: 'alert_success_text' })
  const alertInfo = intl.formatMessage({ id: 'alert_info_text' })
  const alertWarning = intl.formatMessage({ id: 'alert_warning_text' })
  const alertError = intl.formatMessage({ id: 'alert_error_text' })
  const [style, setStyle] = useState<string | undefined>()
  const [typeText, setTypeText] = useState<string>('')
  const [timerID, setTimerID] = useState<NodeJS.Timeout | unknown>()
  const [timerRun, setTimerRun] = useState<boolean>(false)

  const onToggleAlert = useCallback((): void => {
    callback()
  }, [callback])

  const onSetTimer = useCallback((): void => {
    if (time && !timerRun) {
      setTimerID(
        setTimeout(() => {
          onToggleAlert()
        }, time)
      )
      setTimerRun(true)
    }
  }, [time, onToggleAlert, timerRun])

  useEffect(() => {
    onSetTimer()

    switch (type) {
      case 'error':
        setStyle(undefined)
        setTypeText(alertError)
        break
      case 'warning':
        setStyle('warning')
        setTypeText(alertWarning)
        break
      case 'info':
        setStyle('info')
        setTypeText(alertInfo)
        break
      case 'success':
        setStyle('success')
        setTypeText(alertSuccess)
        break
      default:
        setStyle(undefined)
        setTypeText('')
        break
    }

    return (): void => {
      clearTimeout(timerID as number)
    }
  }, [type, alertError, alertInfo, alertSuccess, alertWarning, onSetTimer, timerID])

  return (
    <Colors>
      <AlertStyle className={style} data-testid={type}>
        <span
          role="button"
          tabIndex={0}
          className="close-btn"
          onClick={onToggleAlert}
          onKeyPress={onToggleAlert}
        >
          &times;
        </span>
        <strong>{typeText}!</strong> {text}
      </AlertStyle>
    </Colors>
  )
}

export default Alert
