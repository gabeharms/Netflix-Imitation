const React = require('react')
const Landing = require('./Landing.jsx')
const Search = require('./Search.jsx')
const Layout = require('./Layout.jsx')
const Details = require('./Details.jsx')
const ReactRouter = require('react-router')
const { Router, Route, IndexRoute, browserHistory } = ReactRouter
const { store } = require('./Store.jsx')
const { Provider } = require('react-redux')


// Thoughts:
// So we mount this 'MyFirstComponent', but its not a React Class. It
// doesn't even have a render method. It is a simple method. And this works
// because IT RETURNS OBJECTS THAT HAVE A RENDER FUNCTION. This is hyper
// functional. as long as what you pass to ReactDOM.render, eventually contains
// objects with render functions, then it is valid and will work. This top
// level component (which is a function) just aggregates React components
// const MyFirstComponent = (
//   <div>
//     <MyTitle title="this is coool">
//   </div>
// )
//
// ReactDOM.render(<MyFirstComponent/>, document.getElementById('app'))

// Note:
// Can't use 'this' within App. It will just point to the function prototype.
// But when you use 'this' within 'createClass' it points to the class and gives
// you access to props and state. In this component, it will have to be passed in
// the paramters

// Side Note:
// Mocha is the test runner. It looks inside the 'test' folder in the root directory.

const myRoutes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={Details} />
  </Route>
)

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
})

App.Routes = myRoutes

module.exports = App
