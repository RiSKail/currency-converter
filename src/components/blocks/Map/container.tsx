import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import ReactDOMServer from 'react-dom/server'
import Leaflet from 'leaflet'
import { GeoJsonObject } from 'geojson'

import Loader from '@/components/blocks/global/Loader'
import GoogleMap from '@/components/blocks/global/GoogleMap/component'
import LeafletMap from '@/components/blocks/global/LeafletMap'
import YandexMap from '@/components/blocks/global/YandexMap'
import SetMap from '@/components/blocks/global/SetMap'

import { RootState } from '@/types/rootStateTypes'
import { KeyableObj } from '@/types/otherTypes'
import { GOOGLE_MAP_URL, LEAFLET, YANDEX, GOOGLE } from '@/constants'

import theme from '@/theme'

import { GoogleMapContainer } from '@/components/blocks/global/GoogleMap/styles'
import 'leaflet/dist/leaflet.css'
import { MapContainer, MapPopup, SelectContainer, MapElement } from './styles'

interface Props {
  selectedCountryData?: KeyableObj
  mapData: GeoJsonObject
}

const popupCreator = (currentCountry: KeyableObj): ReactElement => (
  <MapPopup>
    {currentCountry.flag && <img src={currentCountry.flag} width={30} alt={currentCountry.name} />}
    <ul>
      <li>
        <h1>{currentCountry.name}</h1>
      </li>
      {currentCountry.currencies.map((elem: KeyableObj) => (
        <li key={`${elem.name}`}>
          {elem.code} - {elem.name}
        </li>
      ))}
    </ul>
  </MapPopup>
)

const MapBlock: React.FC<Props> = ({ selectedCountryData, mapData }) => {
  const countriesData = useSelector((state: RootState) => state.countries)
  const initial = useSelector((state: RootState) => state.map)

  const onEachFeature = (country: KeyableObj, layer: Leaflet.Layer): void => {
    const data = Object.values(countriesData).find(
      (elem: KeyableObj) => elem.alpha3Code === country.properties.adm0_a3
    )

    if (data) layer.bindPopup(ReactDOMServer.renderToString(popupCreator(data)))

    layer.on({
      mousemove: (event: Leaflet.LeafletMouseEvent) => {
        event.target.setStyle({
          fillColor: theme.colors.backgroundTransparentBlack,
          fillOpacity: '0.2',
        })
      },
      mouseout: (event: Leaflet.LeafletMouseEvent) => {
        event.target.setStyle({ fillColor: null, fillOpacity: '0' })
      },
    })
  }

  const SelectMapEngine = (
    <SelectContainer>
      <SetMap />
    </SelectContainer>
  )

  switch (initial.engine) {
    default:
    case LEAFLET:
      return (
        <MapContainer>
          {SelectMapEngine}
          <LeafletMap
            initial={initial}
            onEachFeature={onEachFeature}
            mapData={mapData}
            popupCreator={popupCreator}
            selectedCountryData={selectedCountryData}
          />
        </MapContainer>
      )
    case GOOGLE:
      return (
        <MapContainer>
          {SelectMapEngine}
          <GoogleMap
            googleMapURL={GOOGLE_MAP_URL}
            loadingElement={<Loader />}
            containerElement={<GoogleMapContainer />}
            mapElement={<MapElement />}
            selectedCountryData={selectedCountryData}
            popupCreator={popupCreator}
            initial={initial}
          />
        </MapContainer>
      )
    case YANDEX:
      return (
        <MapContainer>
          {SelectMapEngine}
          <YandexMap
            selectedCountryData={selectedCountryData}
            popupCreator={popupCreator}
            initial={initial}
          />
        </MapContainer>
      )
  }
}

export default MapBlock
