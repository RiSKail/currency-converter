import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import pt from 'prop-types'
import Styles from './styles'
import { Form, Field } from 'react-final-form'
import Button from '../../blocks/global/Button'
import { Link } from 'react-router-dom'
import { required, composeValidators } from '../validations'

const SignUpForm = ({ onSubmit, onSwap }) => {
  const intl = useIntl()
  const firstNamePlaceholder = intl.formatMessage({ id: 'signup_firstName_placeholder' })
  const lastNamePlaceholder = intl.formatMessage({ id: 'signup_lastName_placeholder' })
  const emailPlaceholder = intl.formatMessage({ id: 'login_email_placeholder' })
  const passwordPlaceholder = intl.formatMessage({ id: 'login_password_placeholder' })
  const confirmPlaceholder = intl.formatMessage({ id: 'signup_confirm_placeholder' })

  return (
    <Styles>
      <Form
        onSubmit={onSubmit}
        validate={values => {
          const errors = {}

          if (values.confirm !== values.password) {
            errors.confirm = 'Must match'
          }

          return errors
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="firstName" validate={composeValidators(required)}>
              {({ input, meta }) => (
                <input {...input} className={(meta.error && meta.touched) ? 'red-border' : null} type="text" placeholder={firstNamePlaceholder} />
              )}
            </Field>
            <Field name="lastName" validate={composeValidators(required)}>
              {({ input, meta }) => (
                <input {...input} className={(meta.error && meta.touched) ? 'red-border' : null} type="text" placeholder={lastNamePlaceholder} />
              )}
            </Field>
            <Field name="email" validate={composeValidators(required)}>
              {({ input, meta }) => (
                <input {...input} className={(meta.error && meta.touched) ? 'red-border' : null} type="text" placeholder={emailPlaceholder} />
              )}
            </Field>
            <Field name="password" validate={composeValidators(required)}>
              {({ input, meta }) => (
                <input
                  {...input} className={(meta.error && meta.touched) ? 'red-border' : null} type="password" placeholder={passwordPlaceholder}
                  autoComplete="on" />
              )}
            </Field>
            <Field name="confirm" validate={composeValidators(required)}>
              {({ input, meta }) => (
                <input
                  {...input} className={(meta.error && meta.touched) ? 'red-border' : null} type="password"
                  placeholder={confirmPlaceholder} autoComplete="on" />
              )}
            </Field>
            <Button type="Primary"><FormattedMessage id="signup_btn_text" /></Button>
          </form>
        )} />

      <p>
        <FormattedMessage id="signup_swap_text" />
        <Link onClick={onSwap} to="#" className="btn-switch">
          <FormattedMessage id="signin_btn_text" />
        </Link>
      </p>
    </Styles>
  )
}

SignUpForm.propTypes = {
  onSubmit: pt.func.isRequired,
  onSwap: pt.func.isRequired,
}

export default SignUpForm
