import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { Redirect } from 'react-router-dom'

import StandardLayout from '@/components/layouts/Standard'
import SignInForm from '@/components/forms/SignIn'
import SignUpForm from '@/components/forms/SignUp'
import AlertBlock from '@/components/blocks/global/Alert'

import { signIn, signUp, clearErrors } from '@/actions'
import { CONVERTER_PAGE_PATH } from '@/constants'
import { RootState } from '@/types/rootStateTypes'
import { KeyableObj, Alert } from '@/types/otherTypes'

import Sign from './styles'

interface Props {
  update: () => void
}

const SignPage: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state: RootState) => state.firebase.auth)
  const error = useSelector((state: RootState) => state.auth.authError)
  const [alertShow, setAlertShow] = useState<Alert>({ show: false })
  const [type, setType] = useState<boolean>(true)
  const clearErrorsAction = clearErrors()

  const onSignInHandler = (event: KeyableObj): void => {
    dispatch(signIn(event))
  }

  const onSignUpHandler = (event: KeyableObj): void => {
    dispatch(signUp(event))
  }

  const onSwitchType = (): void => {
    setType(!type)
  }
  const alertCallbackFunc = (): void => {
    setAlertShow({ show: false })
  }

  useEffect(() => {
    if (error) {
      setAlertShow({ show: true, type: 'error', text: error })
      dispatch(clearErrorsAction)
    }
  }, [error, dispatch, clearErrorsAction])

  if (auth.uid) return <Redirect to={CONVERTER_PAGE_PATH} />

  return (
    <StandardLayout>
      {alertShow.show && (
        <AlertBlock text={alertShow.text} type={alertShow.type} callback={alertCallbackFunc} />
      )}
      <h1>
        {type ? <FormattedMessage id="sign_in_title" /> : <FormattedMessage id="sign_up_title" />}
      </h1>
      <Sign>
        {type ? (
          <SignInForm onSubmit={onSignInHandler} onSwitch={onSwitchType} />
        ) : (
          <SignUpForm onSubmit={onSignUpHandler} onSwitch={onSwitchType} />
        )}
      </Sign>
    </StandardLayout>
  )
}

export default SignPage
