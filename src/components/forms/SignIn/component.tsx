import React, { InputHTMLAttributes, ReactElement } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import pt from 'prop-types'
import Styles from './styles'
import { Form, Field } from 'react-final-form'
import Button from '../../blocks/global/Button'
import { Link } from 'react-router-dom'
import { required } from '../validations'
import { IkeyableObj } from '@/types/otherTypes'
import { EMAIL, PASSWORD, SIGNIN, SIGN_SWAP } from '@/constants'

interface Iprops {
  onSubmit: (e: IkeyableObj) => void;
  onSwitch: () => void;
}

interface IfieldProps {
  meta: IkeyableObj;
  input: InputHTMLAttributes<HTMLInputElement>;
}

const SignInForm: React.FC<Iprops> = ({ onSubmit, onSwitch }) => {
  const intl = useIntl()
  const emailPlaceholder = intl.formatMessage({ id: 'sign_email_placeholder' })
  const passwordPlaceholder = intl.formatMessage({ id: 'sign_password_placeholder' })

  return (
    <Styles>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }: { handleSubmit: () => void }): ReactElement => (
          <form onSubmit={handleSubmit}>
            <Field name={EMAIL} validate={required}>
              {({ input, meta }: IfieldProps): ReactElement => (
                <input
                  {...input}
                  className={(meta.error && meta.touched) ? 'red-border' : undefined}
                  type="text"
                  data-testid={EMAIL}
                  placeholder={emailPlaceholder} 
                  autoComplete="on" />
              )}
            </Field>
            <Field name={PASSWORD} validate={required}>
              {({ input, meta }: IfieldProps): ReactElement => (
                <input
                  {...input}
                  className={(meta.error && meta.touched) ? 'red-border' : undefined}
                  type="password"
                  data-testid={PASSWORD}
                  placeholder={passwordPlaceholder} />
              )}
            </Field>
            <Button 
              type="Primary" 
              data-testid={SIGNIN}
            >
              <FormattedMessage id="signin_btn_text" />
            </Button>
          </form>
        )} />

      <p>
        <FormattedMessage id="signin_swap_text" />
        <Link onClick={onSwitch} to="#" className="btn-switch" data-testid={SIGN_SWAP}>
          <FormattedMessage id="signup_swap_btn_text" />
        </Link>
      </p>
    </Styles>
  )
}

SignInForm.propTypes = {
  onSubmit: pt.func.isRequired,
  onSwitch: pt.func.isRequired,
}

export default SignInForm
