import React, { InputHTMLAttributes, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage, useIntl } from 'react-intl'
import { Form, Field } from 'react-final-form'

import Button from '@/components/controls/Button'

import { KeyableObj } from '@/types/otherTypes'
import { FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, CONFIRM, SIGNUP, SIGN_SWAP } from '@/constants'
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

const SignUpForm: React.FC<Props> = ({ onSubmit, onSwitch }) => {
  const intl = useIntl()
  const firstNamePlaceholder = intl.formatMessage({ id: 'signup_first_name_placeholder' })
  const lastNamePlaceholder = intl.formatMessage({ id: 'signup_last_name_placeholder' })
  const emailPlaceholder = intl.formatMessage({ id: 'sign_email_placeholder' })
  const passwordPlaceholder = intl.formatMessage({ id: 'sign_password_placeholder' })
  const confirmPlaceholder = intl.formatMessage({ id: 'signup_confirm_placeholder' })

  return (
    <Styles>
      <Form
        onSubmit={onSubmit}
        validate={(values: KeyableObj): KeyableObj => {
          const errors: KeyableObj = {}

          if (values.confirm !== values.password) {
            errors.confirm = 'Must match'
          }

          return errors
        }}
        render={({ handleSubmit }: { handleSubmit: () => void }): ReactElement => (
          <form onSubmit={handleSubmit}>
            <Field name={FIRST_NAME} validate={required}>
              {({ input, meta }: FieldProps): ReactElement => (
                <input
                  {...input}
                  className={meta.error && meta.touched ? 'red-border' : undefined}
                  type="text"
                  data-testid={FIRST_NAME}
                  placeholder={firstNamePlaceholder}
                  autoComplete="on"
                />
              )}
            </Field>
            <Field name={LAST_NAME} validate={required}>
              {({ input, meta }: FieldProps): ReactElement => (
                <input
                  {...input}
                  className={meta.error && meta.touched ? 'red-border' : undefined}
                  type="text"
                  data-testid={LAST_NAME}
                  placeholder={lastNamePlaceholder}
                  autoComplete="on"
                />
              )}
            </Field>
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
            <Field name={CONFIRM} validate={required}>
              {({ input, meta }: FieldProps): ReactElement => (
                <input
                  {...input}
                  className={meta.error && meta.touched ? 'red-border' : undefined}
                  type="password"
                  data-testid={CONFIRM}
                  placeholder={confirmPlaceholder}
                />
              )}
            </Field>
            <Button type="Primary" data-testid={SIGNUP}>
              <FormattedMessage id="signup_btn_text" />
            </Button>
          </form>
        )}
      />

      <p>
        <FormattedMessage id="signup_swap_text" />
        <Link onClick={onSwitch} to="#" className="btn-switch" data-testid={SIGN_SWAP}>
          <FormattedMessage id="signin_btn_text" />
        </Link>
      </p>
    </Styles>
  )
}

export default SignUpForm
