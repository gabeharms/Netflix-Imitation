webpackJsonp([1],{

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(162);

	var Link = _require.Link;

	var _require2 = __webpack_require__(162);

	var hashHistory = _require2.hashHistory;
	var _React$PropTypes = React.PropTypes;
	var func = _React$PropTypes.func;
	var string = _React$PropTypes.string;

	var _require3 = __webpack_require__(219);

	var connector = _require3.connector;

	// While you don't see react being used here,
	// the transpiler takes all .jsx and turns it into
	// React.createElement

	var Landing = function (_React$Component) {
	  _inherits(Landing, _React$Component);

	  function Landing(props) {
	    _classCallCheck(this, Landing);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Landing).call(this, props));

	    _this.handleSearchTermEvent = _this.handleSearchTermEvent.bind(_this);
	    _this.gotoSearch = _this.gotoSearch.bind(_this);
	    return _this;
	  }

	  _createClass(Landing, [{
	    key: 'handleSearchTermEvent',
	    value: function handleSearchTermEvent(event) {
	      this.props.setSearchTerm;
	    }
	  }, {
	    key: 'gotoSearch',
	    value: function gotoSearch(event) {
	      hashHistory.push('search');
	      event.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'home-info' },
	        React.createElement(
	          'h1',
	          { className: 'title' },
	          'svideo'
	        ),
	        React.createElement(
	          'form',
	          { onSubmit: this.gotoSearch },
	          React.createElement('input', {
	            className: 'search',
	            type: 'text',
	            placeholder: 'Search',
	            onChange: this.handleSearchTermEvent
	          })
	        ),
	        React.createElement(
	          Link,
	          { to: '/search', className: 'browse-all' },
	          ' or Browse All'
	        )
	      );
	    }
	  }]);

	  return Landing;
	}(React.Component);

	Landing.propTypes = {
	  searchTerm: string,
	  setSearchTerm: func
	};
	module.exports = connector(Landing);

/***/ }

});