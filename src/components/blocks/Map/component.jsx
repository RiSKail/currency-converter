
import React from 'react'
import Leaflet from 'leaflet'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import MapBlockStyle from './styles'
import 'leaflet/dist/leaflet.css'
import mapData from './../../../data/countries.json'

Leaflet.Icon.Default.imagePath = '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

const MapBlock = () => {
  const onEachFeature = (country, layer) => {
    layer.bindPopup(country.properties.ADMIN)
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
      click: event => {
        console.log(event)
      },
    })
  }

  return (
    <MapBlockStyle>
      <MapContainer center={[51.505, -0.09]} zoom={2} minZoom={2} worldCopyJump>
        <TileLayer
          url="https://cartocdn_{s}.global.ssl.fastly.net/base-flatblue/{z}/{x}/{y}.png" />
        <GeoJSON key="my-geojson" data={mapData.features} onEachFeature={onEachFeature} pathOptions={{ fillOpacity: 0 }} />
      </MapContainer>
    </MapBlockStyle>
  )
}

export default MapBlock
