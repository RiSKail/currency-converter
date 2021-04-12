import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { RootAction } from '@/types/rootActionTypes'
import { RootState } from '@/types/rootStateTypes'
import { setLocale } from '@/actions'
import { InternalizationActionTypes } from '@/types/actions'

import SetLocale from './component'

interface MapState {
  active: string
}

interface MapDispatch {
  onSetLocale: (locale: string) => InternalizationActionTypes
}

const mapStateToProps = (store: RootState): MapState => ({
  active: store.internalization.active,
})

const mapDispatchToProps = (dispatch: Dispatch<RootAction>): MapDispatch => ({
  onSetLocale: (locale: string): InternalizationActionTypes => dispatch(setLocale(locale)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SetLocale)
