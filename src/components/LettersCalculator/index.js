// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeLetter = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="words-container">
          <h1 className="heading">
            Calculate the
            <br /> Letters you <br />
            enter
          </h1>
          <label className="pera" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            type="text"
            id="phraseText"
            className="input-word"
            placeholder="Enter the phrase"
            value={searchInput}
            onChange={this.onChangeLetter}
          />
          <p className="no-of-letter">No.of letters: {searchInput.length}</p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
