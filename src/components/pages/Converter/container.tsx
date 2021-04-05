import React, { useState } from 'react'
import pt from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { FormattedMessage, useIntl } from 'react-intl'
import { CSVLink } from 'react-csv'
import CSVReader from 'react-csv-reader'

import StandardLayout from '@/components/layouts/Standard'
import ConvertBlock from '@/components/blocks/ConvertBlock'
import Button from '@/components/blocks/global/Button/index'
import { GeoAPI, CountriesAPI } from '@/api/api'
import Alert from '@/components/blocks/global/Alert'

import swapIcon from './img/swap-icon.svg'
import downloadIcon from './img/download-icon.svg'
import { setBasePrimaryType, setBaseSecondaryType, swapValues, updateDataListValues, cacheAllDataListValues, setAuthCountryInfo } from '@/actions'
import { countries } from '@/constants/countries'
import { useLocalStorage } from '@/utils/localStorage'
import useDidMount from '@/utils/useDidMountHook'
import ConverterStyle, { CSVBtns } from './styles'
import Modal from '../../blocks/global/Modal/component'
import { IrootState } from '@/types/rootStateTypes'
import { Imodal, Ialert } from '@/types/otherTypes'

interface Iprops {
  update: () => void;
}

const ConverterPage: React.FC<Iprops> = ({ update }) => {
  const CSVFilename = 'rates.csv'
  const dispatch = useDispatch()
  const intl = useIntl()
  const authCountry = useSelector((state: IrootState) => state.auth.country)
  const currenciesData = useSelector((state: IrootState) => Object.entries(state.currencies)
    .map((elem: Array<string>) => elem
      .map((elem: string, index: number) => (index === 1) ? `${elem};` : elem)))
  const updateCacheSuccess = intl.formatMessage({ id: 'update_cache_success_text' })
  const updateRatesSuccess = intl.formatMessage({ id: 'update_rates_success_text' })
  const [storedValue, setValue] = useLocalStorage('values')
  const [alertShow, setAlertShow] = useState<Ialert>({ show: false })
  const [modalShow, setModalShow] = useState<Imodal>({ show: false })
  const initialValues = ['RUB', 'USD']

  const onSwapHandle = (): void => {
    dispatch(swapValues())
    setValue([...storedValue].reverse())
  }

  const onUpdateCacheHandle = (): void => {
    dispatch(cacheAllDataListValues(countries))
    update()
    setAlertShow({ show: true, type: 'success', text: updateCacheSuccess, time: 3000 })
  }

  const onImportRateHandle = (): void => { setModalShow({ show: true }) }

  const onFileLoadedHandle = (data: Array<string[]>): void => {
    try {
      const rateList = Object
        .fromEntries(data.map((value: string[]) => [value[0], parseFloat(value[1])])
        .filter((e: (string | number)[]) => JSON.stringify(e) !== JSON.stringify(['', undefined])))
      dispatch(updateDataListValues(rateList))
      setAlertShow({ show: true, type: 'success', text: updateRatesSuccess, time: 3000 })
    } catch (e) {
      setAlertShow({ show: true, type: 'error', text: e.message, time: 3000 })
    } finally {
      setModalShow({ show: false })
    }
  }

  const alertCallbackFunc = (): void => {
    setAlertShow({ show: false })
  }

  const modalCallbackFunc = (): void => {
    setModalShow({ show: false })
  }

  useDidMount(() => {
    if (!authCountry) GeoAPI.getCurrentCountry().then(res => {
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
      {alertShow.show && <Alert {...alertShow} callback={alertCallbackFunc} />}
      {modalShow.show &&
        <Modal callback={modalCallbackFunc}>
          <CSVReader onFileLoaded={onFileLoadedHandle} />
        </Modal>}
      <h1><FormattedMessage id="converter_page_title" /></h1>
      <ConverterStyle>
        <ConvertBlock
          type="primary"
          setValue={setValue}
          storedValue={storedValue || initialValues} />
        <Button type="Circle" onClick={onSwapHandle}>
          <img
            src={swapIcon}
            width={23}
            height={23}
            alt="Swap-icon" />
        </Button>
        <ConvertBlock
          type="secondary"
          setValue={setValue}
          storedValue={storedValue || initialValues} />
      </ConverterStyle>
      <Button type="Primary" onClick={onUpdateCacheHandle}>
        <img
          src={downloadIcon}
          alt="Download-icon"
          style={{ marginRight: '10px' }} />
        <FormattedMessage id="button_cache_text" />
      </Button>
      <CSVBtns>
        <CSVLink data={currenciesData} separator=";" filename={CSVFilename}>
          <Button type="Primary"><FormattedMessage id="export_rates_btn" /></Button>
        </CSVLink>
        <Button type="Primary" onClick={onImportRateHandle}>
          <FormattedMessage id="import_rates_btn" />
        </Button>
      </CSVBtns>
    </StandardLayout>
  )
}

ConverterPage.propTypes = {
  update: pt.func.isRequired,
}

export default ConverterPage
