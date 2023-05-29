import React, { Component } from "react";


export class Feedback extends Component{
  static defaultProps = {
    step:1
  }
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  responseGood = () => {
    this.setState((state, props) => ({
      good: state.good + props.step,
    }));
  }
   responseNeutral = () => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.step,
    }));
  }
   responseBad = () => {
    this.setState((state, props) => ({
      bad: state.bad + props.step,
    }));
  }
  countTotalFeedback() {
    const { bad, neutral, good } = this.state;
    return bad + neutral + good;
  }
  countPositiveFeedbackPercentage() {
    const { bad, neutral, good } = this.state;
    if (good !== 0 ) {
      return good/(bad + neutral + good)*100;
    } else {
      return 0;
    }
    
  }


  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={this.responseGood}>Good</button>
          <button type="button" onClick={this.responseNeutral}>Neutral</button>
          <button type="button" onClick={this.responseBad}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <ul className="stats">
          <li>
            <span className="label">Good:</span>
            <span className="quantity">{this.state.good}</span>
          </li>
          <li>
            <span className="label">Neutral:</span>
            <span className="quantity">{this.state.neutral}</span>
          </li>
          <li>
            <span className="label">Bad:</span>
            <span className="quantity">{this.state.bad}</span>
          </li>
          <li>
            <span className="label">Total:</span>
            <span className="quantity">{this.countTotalFeedback()}</span>
          </li>
           <li>
            <span className="label">Positive feedback:</span>
            <span className="quantity">{this.countPositiveFeedbackPercentage()}%</span>
          </li>
        </ul>
      </div>
    );
  }
  
}


