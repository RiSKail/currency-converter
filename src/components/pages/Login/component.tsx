import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { Redirect } from 'react-router-dom'

import StandardLayout from '@/components/layouts/Standard'
import SignInForm from '@/components/forms/SignIn'
import SignUpForm from '@/components/forms/SignUp'
import { signIn, signUp, clearErrors } from '@/actions'
import Alert from '@/components/blocks/global/Alert'
import { CONVERTER_PAGE_PATH } from '@/constants'
import Converter from './styles'

interface IProps {
  props?: any,
  children?: any,
  update: () => void
}

const LoginPage: React.FC<IProps> = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state: any) => state.firebase.auth)
  const error = useSelector((state: any) => state.auth.authError)
  const [alertShow, setAlertShow] = useState<any>({ show: false })
  const [type, setType] = useState<boolean>(true)
  const clearErrorsAction = clearErrors()

  const onSignInHandler = (e: any) => {
    dispatch(signIn(e))
  }

  const onSignUpHandler = (e: any) => {
    dispatch(signUp(e))
  }

  const onSwapType = () => {
    setType(!type)
  }
  const alertCallbackFunc = () => {
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
      {alertShow.show && <Alert
        text={alertShow.text}
        type={alertShow.type}
        callback={alertCallbackFunc} />}
      <h1>
        {type ? <FormattedMessage id="sign_in_title" /> : <FormattedMessage id="sign_up_title" />}
      </h1>
      <Converter>
        {type ? <SignInForm
          onSubmit={onSignInHandler}
          onSwap={onSwapType} /> : <SignUpForm onSubmit={onSignUpHandler} onSwap={onSwapType} />}
      </Converter>
    </StandardLayout>
  )
}

export default LoginPage
