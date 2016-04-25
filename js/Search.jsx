const React = require('react')
const { string, object, arrayOf } = React.PropTypes
const ShowCard = require('./ShowCard.jsx')
const Header = require('./Header.jsx')
const { connector } = require('./Store.jsx')

class Search extends React.Component {

  render () {
    return (
      <div className='container'>
        <Header showSearch />
        <div className='shows'>
          {this.props.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard key={show.title} {...show} />
          ))}
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  shows: arrayOf(object),
  searchTerm: string
}

module.exports = connector(Search)
