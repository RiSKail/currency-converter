import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { RootAction } from '@/types/rootActionTypes'
import { RootState } from '@/types/rootStateTypes'
import { setMapEngine } from '@/actions'
import { MapActionTypes } from '@/types/actions'

import SetMap from './component'

interface MapState {
  active: string
}

interface MapDispatch {
  onSetEngine: (type: string) => MapActionTypes
}

const mapStateToProps = (store: RootState): MapState => ({
  active: store.map.engine,
})

const mapDispatchToProps = (dispatch: Dispatch<RootAction>): MapDispatch => ({
  onSetEngine: (type: string): MapActionTypes => dispatch(setMapEngine(type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SetMap)
