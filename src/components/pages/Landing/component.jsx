import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import StandardLayout from '@/components/layouts/Standard'
import ConvertBlock from '../../blocks/ConvertBlock'
import Button from './../../blocks/global/Button/index'
import styled from 'styled-components'
import { device } from '../../../constants/devices'

import swapIcon from './img/swap-icon.svg'
import downloadIcon from './img/download-icon.svg'
import { setBasePrimaryType, setBaseSecondaryType, swapBaseValues } from '../../../actions'

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
  const dispatch = useDispatch()

  const onSwapHandle = () => {
    dispatch(swapBaseValues())
  }

  useEffect(() => {
    dispatch(setBasePrimaryType('RUB'))
    dispatch(setBaseSecondaryType('USD'))
  }, [dispatch])

  return (
    <StandardLayout>
      <h1><FormattedMessage id="page_content_title" /></h1>
      <Converter>
        <ConvertBlock type="primary" />
        <Button type="Circle" onClick={onSwapHandle}><img src={swapIcon} width={23} height={23} alt="Swap-icon" /></Button>
        <ConvertBlock type="secondary" />
      </Converter>
      <Button type="Primary"><img src={downloadIcon} alt="Download-icon" style={{ marginRight: '10px' }} /><FormattedMessage id="button_cache_text" /></Button>
    </StandardLayout>
  )
}

export default LandingPage
