
import React from 'react'
import { useSelector } from 'react-redux'
import Leaflet from 'leaflet'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import MapBlockStyle from './styles'
import 'leaflet/dist/leaflet.css'
import mapData from './../../../data/countries.json'
import { MAP_THEME_URL } from '../../../constants/endpoints'

Leaflet.Icon.Default.imagePath = '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

const MapBlock = () => {
  const countriesData = useSelector(state => state.countries)

  const onEachFeature = (country, layer) => {
    console.log(country)
    let currency
    const data = Object.values(countriesData).filter(elem => (elem.alpha3Code === country.properties.adm0_a3))
    if (data.length === 0) { currency = { currencies: [{ code: 'EUR', name: 'Euro' }] } } else { [currency] = data }

    layer.bindPopup(`${(currency.flag) ? `<img src="${currency.flag}" width=30/>` : ''}<ul><li><h1>${country.properties.admin}</h1></li><li>${currency.currencies.map(elem => `${elem.code} - ${elem.name}`)}</li></ul>`)

    layer.on({
      mousemove: event => {
        event.target.setStyle({
          fillColor: '#1a2239',
          fillOpacity: '0.2',
        })
      },
      mouseout: event => {
        event.target.setStyle({ fillColor: null, fillOpacity: '0' })
      },
    })
  }

  return (
    <MapBlockStyle>
      <MapContainer center={[51.505, -0.09]} zoom={2} minZoom={2} worldCopyJump>
        <TileLayer
          url={MAP_THEME_URL} />
        {countriesData && <GeoJSON key="my-geojson" data={mapData.features} onEachFeature={onEachFeature} pathOptions={{ fillOpacity: 0 }} />}
      </MapContainer>
    </MapBlockStyle>
  )
}

export default MapBlock
