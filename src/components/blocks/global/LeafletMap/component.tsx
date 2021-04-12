import React, { ReactElement } from 'react'
import { MapContainer, TileLayer, useMap, GeoJSON, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'
import { GeoJsonObject } from 'geojson'

import { KeyableObj } from '@/types/otherTypes'
import { LEAFLET_THEME_URL, GEO_JSON_KEY } from '@/constants'

import { LeafletMapContainer } from './styles'

interface LeafletMapProps {
  selectedCountryData?: KeyableObj
  initial: KeyableObj
  popupCreator: (currentCountry: KeyableObj) => ReactElement
  mapData: GeoJsonObject
  onEachFeature: (country: KeyableObj, layer: Leaflet.Layer) => void
}

interface ChangeViewProps {
  center: Leaflet.LatLngExpression
  zoom?: number
}

const ChangeView = ({ center, zoom }: ChangeViewProps): null => {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

const LeafletMap: React.FC<LeafletMapProps> = ({
  selectedCountryData,
  initial,
  popupCreator,
  mapData,
  onEachFeature,
}) => {
  const selectedCountryCenter =
    selectedCountryData && selectedCountryData.latlng.length !== 0
      ? selectedCountryData.latlng
      : initial.center

  return (
    <LeafletMapContainer>
      <MapContainer minZoom={initial.minZoom} worldCopyJump>
        <ChangeView center={selectedCountryCenter} zoom={initial.zoom} />
        <TileLayer url={LEAFLET_THEME_URL} />
        <GeoJSON
          key={GEO_JSON_KEY}
          data={mapData}
          onEachFeature={onEachFeature}
          pathOptions={initial.pathOptions}
        />
        <Popup position={selectedCountryCenter}>
          {selectedCountryData && popupCreator(selectedCountryData)}
        </Popup>
      </MapContainer>
    </LeafletMapContainer>
  )
}

export default LeafletMap
