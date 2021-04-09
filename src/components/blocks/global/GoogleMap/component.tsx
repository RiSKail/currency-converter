import React, { ReactElement } from 'react'
import pt from 'prop-types'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'

import { IkeyableObj } from '@/types/otherTypes'
import { geoArrayToObject } from '@/utils/object'

interface IgoogleMapProps {
  currentCountryData?: IkeyableObj;
  initial: IkeyableObj;
  popupCreator: (currentCountry: IkeyableObj) => ReactElement;
}

const Google = withScriptjs(withGoogleMap(({ 
  currentCountryData, 
  initial, 
  popupCreator,
}: IgoogleMapProps) => {
  const currentCountryCenter = (currentCountryData && 
    currentCountryData.latlng.length !== 0) 
    ? geoArrayToObject(currentCountryData.latlng) : geoArrayToObject(initial.center)

  return (
      <GoogleMap
        defaultZoom={initial.minZoom}
        defaultCenter={currentCountryCenter}
      >
        <Marker position={currentCountryCenter}>
          <InfoBox options={{ closeBoxURL: ``, enableEventPropagation: true }}>
            {currentCountryData && popupCreator(currentCountryData)}
          </InfoBox>
        </Marker>
      </GoogleMap>
)}))

Google.propTypes = {
  currentCountryData: pt.object,
  initial: pt.object.isRequired,
  popupCreator: pt.func.isRequired,
}

export default Google
