
import React from 'react'
import pt from 'prop-types'
import ReactDOMServer from 'react-dom/server'
import Leaflet from 'leaflet'
import { useSelector } from 'react-redux'
import { MapContainer, TileLayer, GeoJSON, useMap, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MapBlockStyle from './styles'
import { MAP_THEME_URL } from '@/constants'

Leaflet.Icon.Default.imagePath = '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

const popupCreator = currentCountry => (
  <>
    {(currentCountry.flag) && <img src={currentCountry.flag} width={30} alt={currentCountry.name} />}
    <ul>
      <li><h1>{currentCountry.name}</h1></li>
      {currentCountry.currencies.map((elem, index) => <li key={index}>{elem.code} - {elem.name}</li>)}
    </ul>
  </>
)

const ChangeView = ({ center, zoom }) => {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

const MapBlock = ({ currentCountryData, mapData }) => {
  const countriesData = useSelector(state => state.countries)
  const initial = {
    values: { currencies: [{ code: 'EUR', name: 'Euro' }] },
    center: [0, 0],
    pathOptions: { fillOpacity: 0 },
    minZoom: 2,
    zoom: 5,
  }

  const onEachFeature = (country, layer) => {
    const data = Object.values(countriesData).find(elem => (elem.alpha3Code === country.properties.adm0_a3))

    layer.bindPopup(ReactDOMServer.renderToString(popupCreator(data || initial.values)))

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
      <MapContainer minZoom={initial.minZoom} worldCopyJump>
        <ChangeView center={(currentCountryData.latlng.length !== 0) ? currentCountryData.latlng : initial.center} zoom={initial.zoom} />
        <TileLayer url={MAP_THEME_URL} />
        <GeoJSON key="my-geojson" data={mapData} onEachFeature={onEachFeature} pathOptions={initial.pathOptions} />
        <Popup position={(currentCountryData.latlng.length !== 0) ? currentCountryData.latlng : initial.center}>
          {popupCreator(currentCountryData)}
        </Popup>
      </MapContainer>
    </MapBlockStyle>
  )
}

MapBlock.propTypes = {
  currentCountryData: pt.object.isRequired,
  mapData: pt.object.isRequired,
}

export default MapBlock
