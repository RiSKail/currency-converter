import { connect } from 'react-redux'
import { IRootState } from '@/types/rootStateTypes'
import { setLocale } from '@/actions'

import SetLocale from './component'

const mapStateToProps = (store: IRootState) => ({
  active: store.internalization.active,
})

const mapDispatchToProps = (dispatch: any) => ({
  onSetLocale: (locale: string) => dispatch(setLocale(locale)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SetLocale)
