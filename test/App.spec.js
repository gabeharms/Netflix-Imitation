/* eslint-env mocha */
// This comment above, adds global testing variables
// so that you don't have to call them using global.

const React = require('react')
const { expect } = require('chai') // Assertion Library
const { render, shallow, mount } = require('enzyme') // shallow is much faster than mount
const { Provider } = require('react-redux')
const { shows } = require('../public/data')
const Header = require('../js/Header.jsx')
const Search = require('../js/Search.jsx')
const { store, rootReducer } = require('../js/Store.jsx')

// Notes about chai:
// BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
// This means we can run it with mocha or any other testing framework. It also
// means that chai gives you access to expect/should/assert functions

// Notes about enzyme:
// Enzyme is a JavaScript Testing utility for React that makes it easier to assert,
// manipulate, and traverse your React Components' output.
//
// Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for
// DOM manipulation and traversal.
//
// Enzyme is unopinionated regarding which test runner or assertion library you
// use, and should be compatible with all major test runners and assertion
// libraries out there. The documentation and examples for enzyme use mocha and
// chai, but you should be able to extrapolate to your framework of choice.
//
// Enzyme's shallow function gives you the component you pass in, and stubs for
// that components children. Passing in Search, will give you all of the Search's
// html, and stubbed component Show_Card. No html is returned for its children

describe('<Header />', () => {
  it('should render the brand', () => {
    const wrapper = render(<Header store={store} />)
    expect(wrapper.find('h1.brand').text()).to.equal('svideo')
  })
})

// When we test the Search Component, we don't want to see failures
// aggregated from its child components such as Show_Card. We just
// want to see problems with Search
describe('<Search />', () => { // Testing the search component
  const mockRoute = {
    shows: shows
  }

  // shallow returns the html for Search, and fake html for
  // the Show_Card component. Then we call contains on that component
  it('should render the brand', () => {
    const wrapper = shallow(<Search/>)
    // console.log(wrapper.debug())
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true
  })


  it('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search/>)
    // Using the component in the find only works in shallow
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter correctly given new state', () => {
    const wrapper = mount(<Search/>)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house') // Allows use to inspect state of component
    expect(wrapper.find('.show-card').length.to.equal(2))
  })


  it('should filter correctly given new state', () => {
    store.dispatch({type: 'setSearchTerm', value: 'house'})
    const wrapper = render(<Provider store={store} ><Search route={mockRoute} /></Provider>)
    expect(wrapper.find('div.show-card').length).to.equal(2)
  })
})

describe('Store', () => {
  it('should bootstrap', () => {
    const state = rootReducer(undefined, { type: '@@redux/INIT' })
    expect(state).to.deep.equal({ searchTerm: '', shows: shows })
  })

  it('should handle setSearchTerm actions', () => {
    const state = rootReducer({searchTerm: 'some random string'}, {type: 'setSearchTerm', value: 'correct string'})
    expect(state).to.deep.equal({searchTerm: 'correct string'})
  })
})
