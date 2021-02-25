import React, { useEffect } from 'react'
import pt from 'prop-types'
import { useDispatch } from 'react-redux'
import { FormattedMessage, useIntl } from 'react-intl'

import StandardLayout from '@/components/layouts/Standard'
import ConvertBlock from '../../blocks/ConvertBlock'
import Button from './../../blocks/global/Button/index'
import styled from 'styled-components'
import { device } from '../../../constants/devices'
import { GeoAPI } from '../../../api/api'

import swapIcon from './img/swap-icon.svg'
import downloadIcon from './img/download-icon.svg'
import { setBasePrimaryType, setBaseSecondaryType, swapBaseValues, cacheAllDataListValues } from '../../../actions'
import { countries } from '../../../constants/countries'
import { useLocalStorage } from '../../../localStorage'

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

const LandingPage = ({ update }) => {
  const dispatch = useDispatch()
  const intl = useIntl()
  const alertSuccess = intl.formatMessage({ id: 'alert_success_text' })
  const [storedValue, setValue] = useLocalStorage('baseValues')

  const onSwapHandle = () => {
    dispatch(swapBaseValues())
  }

  const onUpdateCacheHandle = () => {
    dispatch(cacheAllDataListValues(countries))
    update()
    alert(alertSuccess)
  }

  useEffect(() => {
    if (!storedValue) {
      GeoAPI.getCurrentCountry().then(res => {
        dispatch(setBaseSecondaryType('USD'))
        dispatch(setBasePrimaryType(countries[res.data.country.iso]))
        setValue([countries[res.data.country.iso], 'USD'])
      })
    } else {
      dispatch(setBasePrimaryType(storedValue[0]))
      dispatch(setBaseSecondaryType(storedValue[1]))
    }
  }, [dispatch, storedValue, setValue])

  return (
    <StandardLayout>
      <h1><FormattedMessage id="page_content_title" /></h1>
      <Converter>
        <ConvertBlock type="primary" setValue={setValue} storedValue={storedValue} />
        <Button type="Circle" onClick={onSwapHandle}>
          <img
            src={swapIcon}
            width={23}
            height={23}
            alt="Swap-icon" />
        </Button>
        <ConvertBlock type="secondary" setValue={setValue} storedValue={storedValue} />
      </Converter>
      <Button type="Primary" onClick={onUpdateCacheHandle}>
        <img
          src={downloadIcon}
          alt="Download-icon"
          style={{ marginRight: '10px' }} />
        <FormattedMessage id="button_cache_text" />
      </Button>
    </StandardLayout>
  )
}

LandingPage.propTypes = {
  update: pt.func.isRequired,
}

export default LandingPage
