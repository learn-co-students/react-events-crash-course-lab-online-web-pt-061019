import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
    // ^^don't worry about capturing the event, just handle what happens here!

    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
  }
  
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
  // the function has already been written, you don't need to reinvent the wheel! just call it in an appropriate place!
   
  handleKeyPress = (event) =>{
    if (event.key === "a") {
      resize('+')
    } else if (event.key === "s") {
      resize("-")
    }
  }
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  
  render() {
    return (
      <canvas 
        // ^^this is where the event listener goes!
        onMouseMove={this.handleMouseMove}
        onClick={() => toggleCycling()}
        onKeyPress={this.handleKeyPress} 
        // ^^ 'onKeyDown` is also acceptable
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
