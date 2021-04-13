import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'

import StandardLayout from '@/components/layouts/Standard'
import Map from '@/components/blocks/Map'
import SearchCountryBlock from '@/components/blocks/SearchCountry'
import Loader from '@/components/blocks/global/Loader'

import { CountriesAPI } from '@/api/api'
import { updateCountriesData } from '@/actions'
import { RootState } from '@/types/rootStateTypes'
import { KeyableObj } from '@/types/otherTypes'
import { GeoJsonObject } from 'geojson'
import { isEmpty } from '@/utils/object'
import useDidMount from '@/utils/useDidMountHook'

import mapData from '@/data/countries.json'
import MapPageStyle from './styles'

const MapPage: React.FC = () => {
  const dispatch = useDispatch()
  const countriesData = useSelector((state: RootState) => state.countries)
  const authCountry = useSelector((state: RootState) => state.auth.country)
  const [countryData, setCountryData] = useState<KeyableObj | undefined>(authCountry)

  useDidMount(() => {
    if (isEmpty(countriesData)) {
      CountriesAPI.getAllCountriesInfo().then((res) => {
        dispatch(updateCountriesData(res.data))
      })
    }
  })

  const onClickHandleCreator = (data: KeyableObj) => (): void => {
    setCountryData(data)
  }

  return (
    <StandardLayout>
      <h1>
        <FormattedMessage id="map_page_title" />
      </h1>
      <MapPageStyle>
        {!isEmpty(countriesData) && mapData && countryData && (
          <SearchCountryBlock
            selectedCountryData={countryData}
            countriesData={countriesData}
            onClickHandleCreator={onClickHandleCreator}
          />
        )}
        {!isEmpty(countriesData) && mapData && countryData ? (
          <Map selectedCountryData={countryData} mapData={mapData as GeoJsonObject} />
        ) : (
          <Loader />
        )}
      </MapPageStyle>
    </StandardLayout>
  )
}

export default MapPage
