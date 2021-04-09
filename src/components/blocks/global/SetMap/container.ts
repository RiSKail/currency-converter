import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import SetMap from './component'

import { IrootAction } from '@/types/rootActionTypes'
import { IrootState } from '@/types/rootStateTypes'
import { setMapType } from '@/actions'
import { MapActionTypes } from '@/types/actions'

interface ImapState {
  active: string;
}

interface ImapDispatch {
  onSetType: (type: string) => MapActionTypes;
}

const mapStateToProps = (store: IrootState): ImapState => ({
  active: store.map.type,
})

const mapDispatchToProps = (dispatch: Dispatch<IrootAction>): ImapDispatch => ({
  onSetType: (type: string): MapActionTypes => dispatch(setMapType(type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SetMap)
