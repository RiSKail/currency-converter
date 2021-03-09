import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import StandardLayout from '@/components/layouts/Standard'
import Map from '@/components/blocks/Map'
import { CountriesAPI } from '@/api/api'
import { updateCountriesData } from '@/actions/countries'
import SearchCountryBlock from '@/components/blocks/SearchCountry'
import Style from './styles'
import Loader from '@/components/blocks/global/Loader'

const MapPage = () => {
  const dispatch = useDispatch()
  const countriesData = useSelector(state => state.countries)
  const currentData = useSelector(state => state.auth.country)
  const [currentCountryData, setCurrentCountryData] = useState(currentData)

  useEffect(() => {
    CountriesAPI.getAllCountriesInfo().then(res => {
      dispatch(updateCountriesData(res.data))
    })
  }, [dispatch])

  const onClickHandleCreator = data => {
    return () => {
      setCurrentCountryData(data)
    }
  }

  return (
    <StandardLayout>
      <h1><FormattedMessage id="map_page_title" /></h1>
      <Style>
        {(countriesData) && <SearchCountryBlock countriesData={countriesData} onClickHandleCreator={onClickHandleCreator} />}
        {(countriesData) && <Map currentCountryData={currentCountryData} />}
        {(!countriesData) && <Loader />}
      </Style>
    </StandardLayout>
  )
}

export default MapPage
