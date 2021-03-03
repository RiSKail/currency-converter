import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import pt from 'prop-types'
import Styles from './styles'
import { Form, Field } from 'react-final-form'
import Button from './../../blocks/global/Button'
import { Link } from 'react-router-dom'

const SignInForm = ({ onSubmit, onSwap }) => {
  const intl = useIntl()
  const emailPlaceholder = intl.formatMessage({ id: 'login_email_placeholder' })
  const passwordPlaceholder = intl.formatMessage({ id: 'login_password_placeholder' })

  return (
    <Styles>
      <Form
        onSubmit={onSubmit}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          }
          if (!values.password) {
            errors.password = 'Required'
          }
          return errors
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email">
              {({ input, meta }) => (
                <>
                  {meta.error && meta.touched ? <input
                    {...input} style={{ border: '2px solid red' }} type="text" placeholder={emailPlaceholder} />
                    : <input {...input} type="text" placeholder={emailPlaceholder} />}
                </>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <>
                  {meta.error && meta.touched ? <input
                    {...input} style={{ border: '2px solid red' }} type="password"
                    placeholder={passwordPlaceholder} autoComplete="on" />
                    : <input {...input} type="password" placeholder={passwordPlaceholder} autoComplete="on" />}
                </>
              )}
            </Field>
            <Button
              type="Primary" style={{ width: '110%' }}
            ><FormattedMessage id="signin_btn_text" />
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
