import { connect } from 'react-redux'

import { setLocale } from '@/actions'

import SetLocale from './component'
interface Props {
  active?: any,
  onSetLocale?: any
}

const mapStateToProps = (store: any) => ({
  active: store.internalization.active,
})

const mapDispatchToProps = (dispatch: any) => ({
  onSetLocale: (locale: any) => dispatch(setLocale(locale)),
})

export default connect<Props>(mapStateToProps, mapDispatchToProps)(SetLocale)
