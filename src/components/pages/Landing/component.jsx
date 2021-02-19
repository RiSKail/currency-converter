import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'

import StandardLayout from '@/components/layouts/Standard'
import ConvertBlock from '../../blocks/ConvertBlock'
import Button from './../../blocks/global/Button/index'
import styled from 'styled-components'
import { device } from '../../../constants/devices'
import { CurrenciesAPI } from '../../../api/api'

import reverseIcon from './img/reverse-icon.svg'
import downloadIcon from './img/download-icon.svg'

const Converter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 70px 0 90px 0;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

const LandingPage = () => {
  const [currenciesList, setCurrenciesList] = useState()

  useEffect(() => {
    CurrenciesAPI.getCourseList().then(res => {
      setCurrenciesList(res.data)
    })
  }, [])

  return (
    <StandardLayout>
      <h1><FormattedMessage id="page_content_title" /></h1>
      <Converter>
        <ConvertBlock currenciesList={currenciesList} type="primary" />
        <Button type="Circle"><img src={reverseIcon} width={23} height={23} alt="Reverse-icon" /></Button>
        <ConvertBlock currenciesList={currenciesList} type="secondary" />
      </Converter>
      <Button type="Primary"><img src={downloadIcon} alt="Download-icon" style={{ marginRight: '10px' }} /><FormattedMessage id="button_cache_text" /></Button>
    </StandardLayout>
  )
}

export default LandingPage
