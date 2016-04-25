const React = require('react')
const axios = require('axios')
const { arrayOf, object } = React.PropTypes
const Header = require('./Header.jsx')
const {connector} = require('./Store.jsx')

class Details extends React.Component {

  constructor (props) {
    super()

    this.state = {
      omdbData: {}
    }
  }

  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.assignShow(this.props.params.id).imdbID}`)
    .then((response) => {
      this.setState({omdbData: response.data})
    })
    .catch((error) => {
      var err = error
      console.error(err)
    })
  }

  assignShow (id) { // these args both come from react-router. replace is a function
    const showArray = this.props.shows.filter((show) => show.imdbID === id)
    return showArray[0]
  }

  render () {
    const {
      title,
      description,
      year,
      poster,
      trailer
    } = this.assignShow(this.props.params.id)
    let rating
    if (this.state.omdbData.imdbRating) {
      rating = <h3 className='video-rating'>
        {this.state.omdbData.imdbRating}
      </h3>
    }
    return (
      <div className='container'>
        <Header />

        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2>
          {rating}
          <img className='video-poster' src={`public/img/posters/${poster}`} />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder='0'
            allowFullScreen
          />
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  shows: arrayOf(object).isRequired,
  params: object
}

module.exports = connector(Details)
