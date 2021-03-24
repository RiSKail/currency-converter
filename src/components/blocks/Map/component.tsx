
import React, { ReactNode } from 'react'
import pt from 'prop-types'
import ReactDOMServer from 'react-dom/server'
import Leaflet from 'leaflet'
import { useSelector } from 'react-redux'
import { MapContainer, TileLayer, GeoJSON, useMap, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import MapBlockStyle from './styles'
import { MAP_THEME_URL } from '@/constants'
import { IKeyableObj } from '@/types/otherTypes'
import { IRootState } from '@/types/rootStateTypes'

Leaflet.Icon.Default.imagePath = '../node_modules/leaflet'

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

interface IProps {
  currentCountryData: IKeyableObj,
  mapData: any,
  props?: any,
  children?: ReactNode,
}

interface IChangeViewProps {
  center: Leaflet.LatLngExpression,
  zoom?: number | undefined
}

const popupCreator = (currentCountry: IKeyableObj) => (
  <>
    {(currentCountry.flag) && <img
      src={currentCountry.flag}
      width={30}
      alt={currentCountry.name} />}
    <ul>
      <li><h1>{currentCountry.name}</h1></li>
      {currentCountry.currencies
        .map((elem: IKeyableObj, index: number) => <li key={index}>{elem.code} - {elem.name}</li>)}
    </ul>
  </>
)

const ChangeView = ({ center, zoom }: IChangeViewProps) => {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

const MapBlock: React.FC<IProps> = ({ currentCountryData, mapData }) => {
  const countriesData = useSelector((state: IRootState) => state.countries)
  const initial: IKeyableObj = {
    values: { currencies: [{ code: 'EUR', name: 'Euro' }] },
    center: [0, 0],
    pathOptions: { fillOpacity: 0 },
    minZoom: 2,
    zoom: 5,
  }

  const onEachFeature = (country: IKeyableObj, layer: Leaflet.Layer) => {
    const data = Object.values(countriesData)
      .find((elem: any) => (elem.alpha3Code === country.properties.adm0_a3))

    layer.bindPopup(ReactDOMServer.renderToString(popupCreator(data || initial.values)))

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

MapBlock.propTypes = {
  currentCountryData: pt.object.isRequired,
  mapData: pt.object.isRequired,
}

export default MapBlock
