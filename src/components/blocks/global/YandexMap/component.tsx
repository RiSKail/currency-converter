import React, { ReactElement } from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import ReactDOMServer from 'react-dom/server'

import { KeyableObj } from '@/types/otherTypes'

import { YandexMapContainer } from './styles'

interface YandexMapProps {
  selectedCountryData?: KeyableObj
  initial: KeyableObj
  popupCreator: (currentCountry: KeyableObj) => ReactElement
}

const YandexMap: React.FC<YandexMapProps> = ({ selectedCountryData, initial, popupCreator }) => {
  const selectedCountryCenter =
    selectedCountryData && selectedCountryData.latlng.length !== 0
      ? selectedCountryData.latlng
      : initial.center

  const placemarkProperties = selectedCountryData
    ? {
        balloonContentBody: ReactDOMServer.renderToString(popupCreator(selectedCountryData)),
      }
    : {}

  return (
    <YandexMapContainer>
      <YMaps>
        <Map
          width="100%"
          height="100%"
          defaultState={{ center: selectedCountryCenter, zoom: initial.zoom }}
        >
          <Placemark
            key={selectedCountryCenter[0]}
            properties={placemarkProperties}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            geometry={selectedCountryCenter}
            options={{ balloonCloseButton: false }}
          />
        </Map>
      </YMaps>
    </YandexMapContainer>
  )
}

export default YandexMap
