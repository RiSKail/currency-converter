import React, { ReactElement } from 'react'
import pt from 'prop-types'
import ReactDOMServer from 'react-dom/server'
import Leaflet from 'leaflet'
import { MapContainer, TileLayer, useMap, GeoJSON, Popup } from 'react-leaflet'
import { MAP_THEME_URL } from '@/constants'
import { IkeyableObj } from '@/types/otherTypes'
import { GeoJsonObject } from 'geojson'
import MapBlockStyle from './styles'
import { useSelector } from 'react-redux'
import 'leaflet/dist/leaflet.css'
import { IrootState } from '@/types/rootStateTypes'

Leaflet.Icon.Default.imagePath = '../node_modules/leaflet'

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

interface Iprops {
  currentCountryData: IkeyableObj;
  mapData: GeoJsonObject;
}

interface IchangeViewProps {
  center: Leaflet.LatLngExpression;
  zoom?: number;
}

const popupCreator = (currentCountry: IkeyableObj): ReactElement => (
  <>
    {(currentCountry.flag) && <img
      src={currentCountry.flag}
      width={30}
      alt={currentCountry.name} />}
    <ul>
      <li><h1>{currentCountry.name}</h1></li>
      {currentCountry.currencies
        .map((
          elem: IkeyableObj, 
          index: number,
        ) => <li key={`${index}_${elem.code}`}>{elem.code} - {elem.name}</li>)}
    </ul>
  </>
)

const ChangeView = ({ center, zoom }: IchangeViewProps): null => {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

const Map: React.FC<Iprops> = ({ currentCountryData, mapData }) => {
  const countriesData = useSelector((state: IrootState) => state.countries)
  const initial = useSelector((state: IrootState) => state.map)

  const onEachFeature = (country: IkeyableObj, layer: Leaflet.Layer): void => {
    const data = Object.values(countriesData)
      .find((elem: IkeyableObj) => (elem.alpha3Code === country.properties.adm0_a3))

    if (data) layer.bindPopup(ReactDOMServer.renderToString(popupCreator(data)))

    layer.on({
      mousemove: (event: Leaflet.LeafletMouseEvent) => {
        event.target.setStyle({
          fillColor: '#1a2239',
          fillOpacity: '0.2',
        })
      },
      mouseout: (event: Leaflet.LeafletMouseEvent) => {
        event.target.setStyle({ fillColor: null, fillOpacity: '0' })
      },
    })
  }

  return (
    <MapBlockStyle>
      <MapContainer minZoom={initial.minZoom} worldCopyJump>
        <ChangeView
          center={
            (currentCountryData.latlng.length !== 0) ? currentCountryData.latlng : initial.center
          }
          zoom={initial.zoom} />
        <TileLayer url={MAP_THEME_URL} />
        <GeoJSON
          key="my-geojson"
          data={mapData}
          onEachFeature={onEachFeature}
          pathOptions={initial.pathOptions} />
        <Popup
          position={
            (currentCountryData.latlng.length !== 0) ? currentCountryData.latlng : initial.center
          }
        >
          {popupCreator(currentCountryData)}
        </Popup>
      </MapContainer>
    </MapBlockStyle>
  )
}

Map.propTypes = {
  currentCountryData: pt.object.isRequired,
  mapData: pt.any.isRequired,
}

export default Map
