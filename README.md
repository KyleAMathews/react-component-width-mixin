react-component-width-mixin
===========================

React mixin which detects when component resizes and sets the new width as a state variable

## Install
`npm install react-component-width-mixin`

## Usage
```javascript
var componentWidthMixin = require('react-component-width-mixin');

React.createClass({
  mixins: [componentWidthMixin],

  onResize: function() {
    // Optional hook/callback function. Called each time the element is resized.
    // onResize will also be called when the element is instantiated and has
    // its componentWidth set for the first time.
  },

  render: function() {
    // Now the component width is available after the initial render
    // as this.state.componentWidth.
  }
});
```

If you'd like to set an initial width for your component (e.g. server-side rendering), pass in a prop called `initialComponentWidth`.
