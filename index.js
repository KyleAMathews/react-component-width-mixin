var elementResizeEvent = require('element-resize-event');
var throttle = require('lodash.throttle');

var throttledSetState = throttle(function() {
  this.setState({componentWidth: this.getDOMNode().offsetWidth});
}, 16.666); // Throttle updates to 60 FPS.

module.exports = {
  getInitialState: function() {
    return {
      componentWidth: this.props.initialComponentWidth
    };
  },
  // Add our resize sensor.
  componentDidMount: function() {
    this.setState({componentWidth: this.getDOMNode().offsetWidth});
    elementResizeEvent(this.getDOMNode(), this.onResize);
  },
  // When the DOM updates, check that our resize sensor is still there.
  componentDidUpdate: function() {
    if (0 === this.getDOMNode().getElementsByClassName('resize-sensor').length) {
      elementResizeEvent(this.getDOMNode(), this.onResize);
    }
  },
  onResize: throttledSetState
};
