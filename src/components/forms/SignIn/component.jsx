import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import pt from 'prop-types'
import Styles from './styles'
import { Form, Field } from 'react-final-form'
import Button from './../../blocks/global/Button'
import { Link } from 'react-router-dom'
import { required, composeValidators } from './../validations'

const SignInForm = ({ onSubmit, onSwap }) => {
  const intl = useIntl()
  const emailPlaceholder = intl.formatMessage({ id: 'login_email_placeholder' })
  const passwordPlaceholder = intl.formatMessage({ id: 'login_password_placeholder' })

  return (
    <Styles>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email" validate={composeValidators(required)}>
              {({ input, meta }) => (
                <input
                  {...input} className={(meta.error && meta.touched) ? 'red-border' : null} type="text" placeholder={emailPlaceholder} />
              )}
            </Field>
            <Field name="password" validate={composeValidators(required)}>
              {({ input, meta }) => (
                <input
                  {...input} className={(meta.error && meta.touched) ? 'red-border' : null} type="password"
                  placeholder={passwordPlaceholder} autoComplete="on" />
              )}
            </Field>
            <Button type="Primary"><FormattedMessage id="signin_btn_text" />
            </Button>
          </form>
        )} />

      <p>
        <FormattedMessage id="signin_swap_text" />
        <Link onClick={onSwap} to="#" className="btn-switch">
          <FormattedMessage id="signup_swap_btn_text" />
        </Link>
      </p>
    </Styles>
  )
}

SignInForm.propTypes = {
  onSubmit: pt.func.isRequired,
  onSwap: pt.func.isRequired,
}

export default SignInForm
