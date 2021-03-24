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
import { IRootState } from '@/types/rootStateTypes'
import { IKeyableObj, IAlert } from '@/types/otherTypes'
interface IProps {
  props?: any,
  children?: any,
  update: () => void
}

const LoginPage: React.FC<IProps> = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state: IRootState) => state.firebase.auth)
  const error = useSelector((state: IRootState) => state.auth.authError)
  const [alertShow, setAlertShow] = useState<IAlert>({ show: false })
  const [type, setType] = useState<boolean>(true)
  const clearErrorsAction = clearErrors()

  const onSignInHandler = (e: IKeyableObj) => {
    dispatch(signIn(e))
  }

  const onSignUpHandler = (e: IKeyableObj) => {
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
