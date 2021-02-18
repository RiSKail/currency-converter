import { connect } from 'react-redux'

import { setLocale } from '@/actions'

import ConvertBlock from './component'

const mapStateToProps = store => ({
  active: store.internalization.active,
})

const mapDispatchToProps = dispatch => ({
  onSetLocale: locale => dispatch(setLocale(locale)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConvertBlock)
