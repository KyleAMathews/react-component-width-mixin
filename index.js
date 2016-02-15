var ReactDOM = require('react-dom');
var elementResizeEvent = require('element-resize-event');

module.exports = {
  getInitialState: function() {
    if (this.props.initialComponentWidth !== undefined && this.props.initialComponentWidth !== null) {
      return {
        componentWidth: this.props.initialComponentWidth
      };
    } else {
      return {};
    }
  },
  // Add our resize sensor.
  componentDidMount: function() {
    this.setState({
      componentWidth: ReactDOM.findDOMNode(this).getBoundingClientRect().width
    }, this.onResize);
    elementResizeEvent(ReactDOM.findDOMNode(this), this._onResize);
  },
  // When the DOM updates, check that our resize sensor is still there.
  componentDidUpdate: function() {
    if (0 === ReactDOM.findDOMNode(this).getElementsByClassName('resize-sensor').length) {
      elementResizeEvent(ReactDOM.findDOMNode(this), this._onResize);
    }
  },
  _onResize: function() {
    // Update the componentWidth and call this.onResize (if it was defined).
    this.setState({
      componentWidth: ReactDOM.findDOMNode(this).getBoundingClientRect().width
    }, this.onResize);
  }
};
