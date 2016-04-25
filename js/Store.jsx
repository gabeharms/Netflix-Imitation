const Redux = require('redux')
const ReactRedux = require('react-redux')
const { shows } = require('../public/data')
const SET_SEARCH_TERM = 'setSearchTerm'

const initialState = {
  searchTerm: '',
  shows: shows
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action)
    default:
      return state
  }
}

const reduceSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

const store = Redux.createStore(rootReducer, initialState, Redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    shows: state.shows
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (searchTerm) => (dispatch({type: SET_SEARCH_TERM, value: searchTerm}))
  }
}

const connector = ReactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
