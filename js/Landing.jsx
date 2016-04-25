const React = require('react')
const { Link } = require('react-router')
const { hashHistory } = require('react-router')
const { func, string } = React.PropTypes
const { connector } = require('./Store.jsx')


// While you don't see react being used here,
// the transpiler takes all .jsx and turns it into
// React.createElement

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this);
    this.gotoSearch = this.gotoSearch.bind(this);
  }

  handleSearchTermEvent(event) {
    this.props.setSearchTerm(event.target.value)
  }

  gotoSearch(event) {
    hashHistory.push('search')
    event.preventDefault()
  }

  render () {
    return (
      <div className="home-info">
        <h1 className="title">
          svideo
        </h1>
        <form onSubmit={this.gotoSearch}>
          <input
            className="search"
            type="text"
            placeholder="Search"
            onChange={this.handleSearchTermEvent}
            />
        </form>
        <Link to='/search' className="browse-all"> or Browse All</Link>
      </div>
    )
  }
}

Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func,
}
module.exports = connector(Landing)
