import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import pt from 'prop-types'
import AlertStyle, { Colors } from './styles'

interface Iprops {
  type?: string;
  text?: string;
  time?: number;
  callback(): void;
}

const Alert: React.FC<Iprops> = ({ type, text, time, callback }) => {
  const intl = useIntl()
  const alertSuccess = intl.formatMessage({ id: 'alert_success_text' })
  const alertInfo = intl.formatMessage({ id: 'alert_info_text' })
  const alertWarning = intl.formatMessage({ id: 'alert_warning_text' })
  const alertError = intl.formatMessage({ id: 'alert_error_text' })
  const [style, setStyle] = useState<string | undefined>()
  const [typeText, setTypeText] = useState<string>('')
  const [timerID, setTimerID] = useState<NodeJS.Timeout | unknown>()

  const onToggleAlert = (): void => {
    callback()
  }

  useEffect(() => {
    if (time) {
      const tempID = setTimeout(() => {
        onToggleAlert()
      }, time)
      setTimerID(tempID)
    }

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
  }, [type, time])

  return (
    <Colors>
      <AlertStyle className={style}>
        <span className="close-btn" onClick={onToggleAlert}>&times;</span>
        <strong>{typeText}!</strong> {text}
      </AlertStyle>
    </Colors>
  )
}

Alert.propTypes = {
  type: pt.string,
  text: pt.string,
  time: pt.number,
  callback: pt.func.isRequired,
}

export default Alert
