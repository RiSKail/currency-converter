import React, { ReactElement } from 'react'
import pt from 'prop-types'
import { MapContainer, TileLayer, useMap, GeoJSON, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import { IkeyableObj } from '@/types/otherTypes'
import { MAP_THEME_URL, GEO_JSON_KEY } from '@/constants'

import { LeafletMapContainer } from './styles'

import { GeoJsonObject } from 'geojson'

interface IleafletMapProps {
  currentCountryData?: IkeyableObj;
  initial: IkeyableObj;
  popupCreator: (currentCountry: IkeyableObj) => ReactElement;
  mapData: GeoJsonObject;
  onEachFeature: (country: IkeyableObj, layer: Leaflet.Layer) => void;
}

interface IchangeViewProps {
  center: Leaflet.LatLngExpression;
  zoom?: number;
}

const ChangeView = ({ center, zoom }: IchangeViewProps): null => {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

const LeafletMap: React.FC<IleafletMapProps> = ({ 
  currentCountryData, 
  initial, 
  popupCreator, 
  mapData, 
  onEachFeature,
}) => {
  const currentCountryCenter = (currentCountryData && 
    currentCountryData.latlng.length !== 0) ? currentCountryData.latlng : initial.center

  return (
    <LeafletMapContainer>
      <MapContainer minZoom={initial.minZoom} worldCopyJump>
          <ChangeView
            center={currentCountryCenter}
            zoom={initial.zoom} />
          <TileLayer url={MAP_THEME_URL} />
          <GeoJSON
            key={GEO_JSON_KEY}
            data={mapData}
            onEachFeature={onEachFeature}
            pathOptions={initial.pathOptions} />
          <Popup position={currentCountryCenter}>
            {currentCountryData && popupCreator(currentCountryData)}
          </Popup>
      </MapContainer>
    </LeafletMapContainer>
)}

LeafletMap.propTypes = {
  currentCountryData: pt.object,
  initial: pt.object.isRequired,
  popupCreator: pt.func.isRequired,
  mapData: pt.any.isRequired,
  onEachFeature: pt.func.isRequired,
}

export default LeafletMap
