import React, { useState } from 'react'
import pt from 'prop-types'
import { useDispatch } from 'react-redux'
import { FormattedMessage, useIntl } from 'react-intl'

import StandardLayout from '@/components/layouts/Standard'
import ConvertBlock from '@/components/blocks/ConvertBlock'
import Button from '@/components/blocks/global/Button/index'
import { GeoAPI, CountriesAPI } from '@/api/api'
import Alert from '@/components/blocks/global/Alert'

import swapIcon from './img/swap-icon.svg'
import downloadIcon from './img/download-icon.svg'
import { setBasePrimaryType, setBaseSecondaryType, swapValues, cacheAllDataListValues, setAuthCountryInfo } from '@/actions'
import { countries } from '@/constants/countries'
import { useLocalStorage } from '@/localStorage'
import useDidMount from '@/useDidMountHook'
import Converter from './styles'

const LandingPage = ({ update }) => {
  const dispatch = useDispatch()
  const intl = useIntl()
  const updateCacheSuccess = intl.formatMessage({ id: 'update_cache_success_text' })
  const [storedValue, setValue] = useLocalStorage('values')
  const [alertShow, setAlertShow] = useState({ show: false })
  const initialValues = ['RUB', 'USD']

  const onSwapHandle = () => {
    dispatch(swapValues())
    setValue([...storedValue].reverse())
  }

  const onUpdateCacheHandle = () => {
    dispatch(cacheAllDataListValues(countries))
    update()
    setAlertShow({ show: true, type: 'success', text: updateCacheSuccess, time: 3000 })
  }

  useDidMount(() => {
    GeoAPI.getCurrentCountry().then(res => {
      if (!storedValue) {
        if (countries[res.data.country.iso] == null) {
          dispatch(setBasePrimaryType(initialValues[0]))
          setValue(initialValues)
        } else {
          setValue([countries[res.data.country.iso], initialValues[1]])
        }
        dispatch(setBaseSecondaryType(initialValues[1]))
      } else {
        dispatch(setBasePrimaryType(storedValue[0]))
        dispatch(setBaseSecondaryType(storedValue[1]))
      }
      CountriesAPI.getCountryInfoByName(res.data.country.name_en).then(res => {
        dispatch(setAuthCountryInfo(res.data[0]))
      })
    })
  })

  return (
    <StandardLayout>
      {alertShow.show && <Alert
        {...alertShow}
        callback={() => setAlertShow({ show: false })} />}
      <h1><FormattedMessage id="converter_page_title" /></h1>
      <Converter>
        <ConvertBlock type="primary" setValue={setValue} storedValue={storedValue || initialValues} />
        <Button type="Circle" onClick={onSwapHandle}>
          <img
            src={swapIcon}
            width={23}
            height={23}
            alt="Swap-icon" />
        </Button>
        <ConvertBlock type="secondary" setValue={setValue} storedValue={storedValue || initialValues} />
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
