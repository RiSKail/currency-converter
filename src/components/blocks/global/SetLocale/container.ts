import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import SetLocale from './component'

import { IrootAction } from '@/types/rootActionTypes'
import { IrootState } from '@/types/rootStateTypes'
import { setLocale } from '@/actions'
import { InternalizationActionTypes } from '@/types/actions'

interface ImapState {
  active: string;
}

interface ImapDispatch {
  onSetLocale: (locale: string) => InternalizationActionTypes;
}

const mapStateToProps = (store: IrootState): ImapState => ({
  active: store.internalization.active,
})

const mapDispatchToProps = (dispatch: Dispatch<IrootAction>): ImapDispatch => ({
  onSetLocale: (locale: string): InternalizationActionTypes => dispatch(setLocale(locale)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SetLocale)
