import React, { InputHTMLAttributes, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage, useIntl } from 'react-intl'
import { Form, Field } from 'react-final-form'

import Button from '@/components/controls/Button'

import { KeyableObj } from '@/types/otherTypes'
import { EMAIL, PASSWORD, SIGNIN, SIGN_SWAP } from '@/constants'
import { required } from '../validations'

import Styles from './styles'

interface Props {
  onSubmit: (event: KeyableObj) => void
  onSwitch: () => void
}

interface FieldProps {
  meta: KeyableObj
  input: InputHTMLAttributes<HTMLInputElement>
}

const SignInForm: React.FC<Props> = ({ onSubmit, onSwitch }) => {
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
              {({ input, meta }: FieldProps): ReactElement => (
                <input
                  {...input}
                  className={meta.error && meta.touched ? 'red-border' : undefined}
                  type="text"
                  data-testid={EMAIL}
                  placeholder={emailPlaceholder}
                  autoComplete="on"
                />
              )}
            </Field>
            <Field name={PASSWORD} validate={required}>
              {({ input, meta }: FieldProps): ReactElement => (
                <input
                  {...input}
                  className={meta.error && meta.touched ? 'red-border' : undefined}
                  type="password"
                  data-testid={PASSWORD}
                  placeholder={passwordPlaceholder}
                />
              )}
            </Field>
            <Button type="Primary" data-testid={SIGNIN}>
              <FormattedMessage id="signin_btn_text" />
            </Button>
          </form>
        )}
      />

      <p>
        <FormattedMessage id="signin_swap_text" />
        <Link onClick={onSwitch} to="#" className="btn-switch" data-testid={SIGN_SWAP}>
          <FormattedMessage id="signup_swap_btn_text" />
        </Link>
      </p>
    </Styles>
  )
}

export default SignInForm
