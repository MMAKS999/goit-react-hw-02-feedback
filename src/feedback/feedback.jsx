import React, { Component } from "react";
import { Statistics } from 'count/Statistics'
import { Section } from "count/Section";
import { FeedbackOptions } from "count/FeeddbackOptions";



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
  // countTotalFeedback() {
  //   const { bad, neutral, good } = this.state;
  //   return bad + neutral + good;
  // }
  // PositivePercentage() {
  //   const { bad, neutral, good } = this.state;
  //   if (good !== 0 ) {
  //     return good/(bad + neutral + good)*100;
  //   } else {
  //     return 0;
  //   }
    
  // }


  render() {
    return (
      <div>
        <Section 
          nameSection = 'Please leave feedback'
        >
          <FeedbackOptions
            response={this.responseGood}
            nameButton="Good" />
          <FeedbackOptions
            response={this.responseNeutral}
            nameButton="Neutral" />
          <FeedbackOptions
            response={this.responseBad}
          nameButton="Bad"/>
        </Section>

        <Section 
          nameSection = 'Statistics'
        >
          <Statistics
            stateGood = {this.state.good}
            stateNeutral = {this.state.neutral}
            stateBad = {this.state.bad}
            // totalFeedback = {this.countTotalFeedback()}
            // positivePercent = {this.PositivePercentage()}
        />
        </Section>
      </div>
    );
  }
  
}


