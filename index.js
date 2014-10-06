var elementResizeEvent = require('element-resize-event');
var throttle = require('lodash.throttle');

module.exports = {
  componentDidMount: function() {
    this.onResize();
    elementResizeEvent(this.getDOMNode(), this.onResize);
  },
  onResize: function() { throttle(function() {
      this.setState({componentWidth: this.getDOMNode().offsetWidth});
    }, 16.666); // Throttle updates to 60 FPS.
  }
};
