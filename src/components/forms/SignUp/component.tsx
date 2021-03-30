import React, { InputHTMLAttributes, ReactElement } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import pt from 'prop-types'
import Styles from './styles'
import { Form, Field } from 'react-final-form'
import Button from '../../blocks/global/Button'
import { Link } from 'react-router-dom'
import { required } from '../validations'
import { IkeyableObj } from '@/types/otherTypes'
import { FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, CONFIRM, SIGNUP, SIGN_SWAP } from '@/constants'
interface Iprops {
  onSubmit: (e: IkeyableObj) => void;
  onSwitch: () => void;
}

interface IfieldProps {
  meta: IkeyableObj;
  input: InputHTMLAttributes<HTMLInputElement>;
}

const SignUpForm: React.FC<Iprops> = ({ onSubmit, onSwitch }) => {
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
        validate={(values: IkeyableObj): IkeyableObj => {
          const errors: IkeyableObj = {}

          if (values.confirm !== values.password) {
            errors.confirm = 'Must match'
          }

          return errors
        }}
        render={({ handleSubmit }: { handleSubmit: () => void }): ReactElement => (
          <form onSubmit={handleSubmit}>
            <Field name={FIRST_NAME} validate={required}>
              {({ input, meta }: IfieldProps): ReactElement => (
                <input
                  {...input}
                  className={(meta.error && meta.touched) ? 'red-border' : undefined}
                  type="text"
                  data-testid={FIRST_NAME}
                  placeholder={firstNamePlaceholder}
                  autoComplete="on" />
              )}
            </Field>
            <Field name={LAST_NAME} validate={required}>
              {({ input, meta }: IfieldProps): ReactElement => (
                <input
                  {...input}
                  className={(meta.error && meta.touched) ? 'red-border' : undefined}
                  type="text"
                  data-testid={LAST_NAME}
                  placeholder={lastNamePlaceholder}
                  autoComplete="on" />
              )}
            </Field>
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
            <Field name={CONFIRM} validate={required}>
              {({ input, meta }: IfieldProps): ReactElement => (
                <input
                  {...input}
                  className={(meta.error && meta.touched) ? 'red-border' : undefined}
                  type="password"
                  data-testid={CONFIRM}
                  placeholder={confirmPlaceholder} />
              )}
            </Field>
            <Button 
              type="Primary" 
              data-testid={SIGNUP}
            >
              <FormattedMessage id="signup_btn_text" />
            </Button>
          </form>
        )} />

      <p>
        <FormattedMessage id="signup_swap_text" />
        <Link onClick={onSwitch} to="#" className="btn-switch" data-testid={SIGN_SWAP}>
          <FormattedMessage id="signin_btn_text" />
        </Link>
      </p>
    </Styles>
  )
}

SignUpForm.propTypes = {
  onSubmit: pt.func.isRequired,
  onSwitch: pt.func.isRequired,
}

export default SignUpForm
