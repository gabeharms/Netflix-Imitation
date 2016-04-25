webpackJsonp([3],{

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var _React$PropTypes = React.PropTypes;
	var func = _React$PropTypes.func;
	var bool = _React$PropTypes.bool;
	var string = _React$PropTypes.string;

	var _require = __webpack_require__(162);

	var Link = _require.Link;

	var _require2 = __webpack_require__(219);

	var connector = _require2.connector;

	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);

	  function Header(props) {
	    _classCallCheck(this, Header);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));

	    _this.handleSearchTermEvent = _this.handleSearchTermEvent.bind(_this);
	    return _this;
	  }

	  _createClass(Header, [{
	    key: 'handleSearchTermEvent',
	    value: function handleSearchTermEvent(event) {
	      this.props.setSearchTerm(event.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var utilSpace = void 0;
	      if (this.props.showSearch) {
	        utilSpace = React.createElement('input', {
	          type: 'text',
	          className: 'search-input',
	          placeholder: 'search',
	          value: this.props.searchTerm,
	          onChange: this.handleSearchTermEvent
	        });
	      } else {
	        utilSpace = React.createElement(
	          'h2',
	          { className: 'header-back' },
	          React.createElement(
	            Link,
	            { to: '/search' },
	            'Back'
	          )
	        );
	      }
	      return React.createElement(
	        'header',
	        { className: 'header' },
	        React.createElement(
	          'h1',
	          { className: 'brand' },
	          React.createElement(
	            Link,
	            { to: '/', className: 'brand-link' },
	            'svideo'
	          )
	        ),
	        utilSpace
	      );
	    }
	  }]);

	  return Header;
	}(React.Component);

	Header.propTypes = {
	  handleSearchChange: func,
	  showSearch: bool,
	  searchTerm: string
	};

	module.exports = connector(Header);

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);
	var _React$PropTypes = React.PropTypes;
	var arrayOf = _React$PropTypes.arrayOf;
	var object = _React$PropTypes.object;

	var Header = __webpack_require__(240);

	var _require = __webpack_require__(219);

	var connector = _require.connector;

	var Details = function (_React$Component) {
	  _inherits(Details, _React$Component);

	  function Details(props) {
	    _classCallCheck(this, Details);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Details).call(this));
	  }

	  _createClass(Details, [{
	    key: 'assignShow',
	    value: function assignShow(id) {
	      // these args both come from react-router. replace is a function
	      var showArray = this.props.shows.filter(function (show) {
	        return show.imdbID === id;
	      });
	      return showArray[0];
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _assignShow = this.assignShow(this.props.params.id);

	      var title = _assignShow.title;
	      var description = _assignShow.description;
	      var year = _assignShow.year;
	      var poster = _assignShow.poster;
	      var trailer = _assignShow.trailer;

	      return React.createElement(
	        'div',
	        { className: 'container' },
	        React.createElement(Header, null),
	        React.createElement(
	          'div',
	          { className: 'video-info' },
	          React.createElement(
	            'h1',
	            { className: 'video-title' },
	            title
	          ),
	          React.createElement(
	            'h2',
	            { className: 'video-year' },
	            '(',
	            year,
	            ')'
	          ),
	          React.createElement('img', { className: 'video-poster', src: 'public/img/posters/' + poster }),
	          React.createElement(
	            'p',
	            { className: 'video-description' },
	            description
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'video-container' },
	          React.createElement('iframe', {
	            src: 'https://www.youtube-nocookie.com/embed/' + trailer + '?rel=0&amp;controls=0&amp;showinfo=0',
	            frameBorder: '0',
	            allowFullScreen: true
	          })
	        )
	      );
	    }
	  }]);

	  return Details;
	}(React.Component);

	Details.propTypes = {
	  shows: arrayOf(object).isRequired,
	  params: object
	};

	module.exports = connector(Details);

/***/ }

});