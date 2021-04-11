import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { GeoJsonObject } from 'geojson'

import StandardLayout from '@/components/layouts/Standard'
import Map from '@/components/blocks/Map'
import SearchCountryBlock from '@/components/blocks/SearchCountry'
import Loader from '@/components/blocks/global/Loader'

import { CountriesAPI } from '@/api/api'
import { updateCountriesData } from '@/actions'
import { IcountriesState } from '@/types/reducers'
import { IrootState } from '@/types/rootStateTypes'
import { IkeyableObj } from '@/types/otherTypes'
import { isEmpty } from '@/utils/object'
import useDidMount from '@/utils/useDidMountHook'

import Style from './styles'

import mapData from '@/data/countries.json'

const MapPage: React.FC = () => {
  const dispatch = useDispatch()
  const countriesData: IcountriesState = useSelector((state: IrootState) => state.countries)
  const authCountry = useSelector((state: IrootState) => state.auth.country)
  const [currentCountryData, setCurrentCountryData] = useState<IkeyableObj | undefined>(authCountry)

  useDidMount(() => {
    if (isEmpty(countriesData)) CountriesAPI.getAllCountriesInfo().then(res => {
      dispatch(updateCountriesData(res.data))
    })
  })

  const onClickHandleCreator = (data: IkeyableObj) => {
    return (): void => {
      setCurrentCountryData(data)
    }
  }

  return (
    <StandardLayout>
      <h1><FormattedMessage id="map_page_title" /></h1>
      <Style>
        {!isEmpty(countriesData) &&
          <SearchCountryBlock
            countriesData={countriesData}
            onClickHandleCreator={onClickHandleCreator} />}
        {(!isEmpty(countriesData) && mapData && currentCountryData)
          ? <Map
            currentCountryData={currentCountryData}
            mapData={(mapData as GeoJsonObject)} /> : <Loader />}
      </Style>
    </StandardLayout>
  )
}

export default MapPage
