import React, { ReactElement } from 'react'
import pt from 'prop-types'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import ReactDOMServer from 'react-dom/server'

import { IkeyableObj } from '@/types/otherTypes'

import { YandexMapContainer } from './styles'

interface IyandexMapProps {
  currentCountryData?: IkeyableObj;
  initial: IkeyableObj;
  popupCreator: (currentCountry: IkeyableObj) => ReactElement;
}

const YandexMap: React.FC<IyandexMapProps> = ({ 
  currentCountryData, 
  initial, 
  popupCreator,
}) => {
  const currentCountryCenter = (currentCountryData && 
    currentCountryData.latlng.length !== 0) ? currentCountryData.latlng : initial.center

  const placemarkProperties = (currentCountryData) ? {
    balloonContentBody: ReactDOMServer.renderToString(popupCreator(currentCountryData)),
  } : {}

  return (
  <YandexMapContainer>
    <YMaps>
        <Map 
          width="100%"
          height="100%" 
          defaultState={{ center: currentCountryCenter, zoom: initial.zoom }}
        >
        <Placemark 
            key={currentCountryCenter[0]} 
            properties={placemarkProperties} 
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            geometry={currentCountryCenter}
            options={{balloonCloseButton: false}}/>
        </Map>
    </YMaps>
  </YandexMapContainer>
)}

YandexMap.propTypes = {
  currentCountryData: pt.object,
  initial: pt.object.isRequired,
  popupCreator: pt.func.isRequired,
}

export default YandexMap
