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
      componentWidth: this.getDOMNode().getBoundingClientRect().width
    });
    elementResizeEvent(this.getDOMNode(), this.onResize);
  },
  // When the DOM updates, check that our resize sensor is still there.
  componentDidUpdate: function() {
    if (0 === this.getDOMNode().getElementsByClassName('resize-sensor').length) {
      elementResizeEvent(this.getDOMNode(), this.onResize);
    }
  },
  onResize: function() {
    this.setState({
      componentWidth: this.getDOMNode().getBoundingClientRect().width
    });
  }
};
