// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {initialMin: 0, initialSec: 0}

  componentWillUnmount = () => {
    this.clearTimeInterval()
  }

  clearTimeInterval = () => {
    clearInterval(this.IntervalId)
  }

  incrementSeconds = () => {
    const {initialSec} = this.state
    if (initialSec < 59) {
      this.setState(prevState => ({initialSec: prevState.initialSec + 1}))
    } else {
      this.setState(prevState => ({
        initialMin: prevState.initialMin + 1,
        initialSec: 0,
      }))
    }
  }

  startClicked = () => {
    this.IntervalId = setInterval(this.incrementSeconds, 1000)
  }

  stopClicked = () => {
    this.clearTimeInterval()
  }

  resetClicked = () => {
    this.clearTimeInterval()
    this.setState({initialMin: 0, initialSec: 0})
  }

  render() {
    const {initialMin, initialSec} = this.state
    const minutes = initialMin > 9 ? initialMin : `0${initialMin}`
    const seconds = initialSec > 9 ? initialSec : `0${initialSec}`
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card-container">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt=" stopwatch"
            />
            <h1>Timer</h1>
          </div>
          <h1 className="time">
            {minutes}:{seconds}
          </h1>
          <div className="buttons-container">
            <button type="button" className="start" onClick={this.startClicked}>
              Start
            </button>
            <button type="button" className="stop" onClick={this.stopClicked}>
              Stop
            </button>
            <button type="button" className="reset" onClick={this.resetClicked}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
