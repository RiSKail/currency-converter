import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import StandardLayout from '@/components/layouts/Standard'
import Map from '@/components/blocks/Map'
import { CountriesAPI } from '@/api/api'
import { updateCountriesData } from '@/actions'
import SearchCountryBlock from '@/components/blocks/SearchCountry'
import Style from './styles'
import Loader from '@/components/blocks/global/Loader'
import mapData from '@/data/countries.json'

interface IProps {
  update: () => void
}

const MapPage: React.FC<IProps> = () => {
  const dispatch = useDispatch()
  const countriesData = useSelector((state: any) => state.countries)
  const authData = useSelector((state: any) => state.auth.country)
  const [currentCountryData, setCurrentCountryData] = useState(authData)

  useEffect(() => {
    CountriesAPI.getAllCountriesInfo().then(res => {
      dispatch(updateCountriesData(res.data))
    })
  }, [dispatch])

  const onClickHandleCreator = (data: any) => {
    return () => {
      setCurrentCountryData(data)
    }
  }

  return (
    <StandardLayout>
      <h1><FormattedMessage id="map_page_title" /></h1>
      <Style>
        {(countriesData) &&
          <SearchCountryBlock
            countriesData={countriesData}
            onClickHandleCreator={onClickHandleCreator} />}
        {(countriesData && mapData && currentCountryData) &&
          <Map
            currentCountryData={currentCountryData}
            mapData={mapData} />}
        {(!countriesData) && <Loader />}
      </Style>
    </StandardLayout>
  )
}

export default MapPage
