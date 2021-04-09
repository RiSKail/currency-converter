import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import pt from 'prop-types'
import ReactDOMServer from 'react-dom/server'
import Leaflet from 'leaflet'

import Loader from '@/components/blocks/global/Loader'
import GoogleMap from '@/components/blocks/global/GoogleMap/component'
import LeafletMap from '@/components/blocks/global/LeafletMap'
import YandexMap from '@/components/blocks/global/YandexMap'
import SetMap from '@/components/blocks/global/SetMap'

import { IrootState } from '@/types/rootStateTypes'
import { IkeyableObj } from '@/types/otherTypes'
import { GOOGLE_MAP_URL, LEAFLET, YANDEX, GOOGLE } from '@/constants'

import theme from '@/theme'

import { MapBlockStyle, MapPopup, SetMapStyle } from './styles'
import { GoogleMapContainer } from '@/components/blocks/global/GoogleMap/styles'
import 'leaflet/dist/leaflet.css'

import { GeoJsonObject } from 'geojson'

interface Iprops {
  currentCountryData?: IkeyableObj;
  mapData: GeoJsonObject;
}

const popupCreator = (currentCountry: IkeyableObj): ReactElement => (
  <MapPopup>
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
  </MapPopup>
)

const MapBlock: React.FC<Iprops> = ({ currentCountryData, mapData }) => {
  const countriesData = useSelector((state: IrootState) => state.countries)
  const initial = useSelector((state: IrootState) => state.map)

  const onEachFeature = (country: IkeyableObj, layer: Leaflet.Layer): void => {
    const data = Object.values(countriesData)
      .find((elem: IkeyableObj) => (elem.alpha3Code === country.properties.adm0_a3))

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

  const SelectMapType = <SetMapStyle><SetMap/></SetMapStyle>

  switch (initial.type) {
    default:
    case LEAFLET:
      return (
        <MapBlockStyle>
          {SelectMapType}
          <LeafletMap 
            initial={initial} 
            onEachFeature={onEachFeature} 
            mapData={mapData} 
            popupCreator={popupCreator}
            currentCountryData={currentCountryData}/>
        </MapBlockStyle>
      )
    case GOOGLE:
      return (
        <MapBlockStyle>
          {SelectMapType}
          <GoogleMap 
            googleMapURL={GOOGLE_MAP_URL || ''}
            loadingElement={<Loader/>}
            containerElement={<GoogleMapContainer/>}
            mapElement={<div style={{ height: `100%` }} />}
            currentCountryData={currentCountryData}
            popupCreator={popupCreator}
            initial={initial}/>
        </MapBlockStyle>
      )
    case YANDEX:
      return (
        <MapBlockStyle>
          {SelectMapType}
          <YandexMap
            currentCountryData={currentCountryData}
            popupCreator={popupCreator}
            initial={initial}/>
        </MapBlockStyle>
      )
  }
}

MapBlock.propTypes = {
  currentCountryData: pt.object,
  mapData: pt.any.isRequired,
}

export default MapBlock
