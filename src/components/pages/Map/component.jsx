import React, { useEffect } from 'react'
import { FormattedMessage} from 'react-intl'
import { useDispatch } from 'react-redux'
import StandardLayout from '@/components/layouts/Standard'
import Map from './../../blocks/Map'
import { CountriesAPI } from '../../../api/api'
import { updateCountriesData } from '../../../actions/countries'

const MapPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    CountriesAPI.getAllCountriesInfo().then(res => {
      dispatch(updateCountriesData(res.data))
    })
  }, [dispatch])

  return (
    <StandardLayout>
      <h1><FormattedMessage id="map_page_title" /></h1>
      <Map />
    </StandardLayout>
  )
}

export default MapPage
