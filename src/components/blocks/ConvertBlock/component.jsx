
import React from 'react'
import { useIntl } from 'react-intl'

import ConvertBlock from './styles'

export default () => {
  const intl = useIntl();
  const placeholder = intl.formatMessage({ id: 'convert_block_placeholder' })

  return (
    <ConvertBlock>
      <select defaultValue="USD">
        <option disabled>Выберите валюту</option>
        <option value="USD">USD</option>
        <option value="RUB">RUB</option>
        <option value="BYN">BYN</option>
      </select>
      <input type="text" placeholder={placeholder} />
    </ConvertBlock>
  )
}
