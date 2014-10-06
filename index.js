var elementResizeEvent = require('element-resize-event');
var throttle = require('lodash.throttle');

var throttledSetState = throttle(function() {
  this.setState({componentWidth: this.getDOMNode().offsetWidth});
}, 16.666); // Throttle updates to 60 FPS.

module.exports = {
  componentDidMount: function() {
    this.onResize();
    elementResizeEvent(this.getDOMNode(), this.onResize);
  },
  onResize: throttledSetState
};
