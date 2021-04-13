import React, { ReactElement } from 'react'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'

import { KeyableObj } from '@/types/otherTypes'
import { geoArrayToObject } from '@/utils/object'

interface GoogleMapProps {
  selectedCountryData?: KeyableObj
  initial: KeyableObj
  popupCreator: (country: KeyableObj) => ReactElement
}

const Google = withScriptjs(
  withGoogleMap(({ selectedCountryData, initial, popupCreator }: GoogleMapProps) => {
    const selectedCountryCenter =
      selectedCountryData && selectedCountryData.latlng.length !== 0
        ? geoArrayToObject(selectedCountryData.latlng)
        : geoArrayToObject(initial.center)

    return (
      <GoogleMap defaultZoom={initial.minZoom} defaultCenter={selectedCountryCenter}>
        <Marker position={selectedCountryCenter}>
          <InfoBox options={{ closeBoxURL: ``, enableEventPropagation: true }}>
            {selectedCountryData && popupCreator(selectedCountryData)}
          </InfoBox>
        </Marker>
      </GoogleMap>
    )
  })
)

export default Google
