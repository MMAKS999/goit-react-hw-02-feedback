import React, { Component } from "react";
import { Statistics } from 'count/Statistics'
import { Section } from "count/Section";
import { FeedbackOptions } from "count/FeeddbackOptions";
import { Notification } from "count/Notification";


// import { Counter } from "../feedback/feedback";

export class App extends Component {
 
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
 LeaveFeedback = (option) => {
    this.setState((state) => ({
      [option]: state[option] + 1,
    }));
  }




  render() {
    const { good, neutral, bad } = this.state;
    return (
       <div>
        <Section 
          nameSection = 'Please leave feedback'
        >
          <FeedbackOptions
            options = {['good','neutral','bad']}
            onLeaveFeedback = {this.LeaveFeedback} />
        </Section>
        <Section 
          nameSection = 'Statistics'
        >
            {(good === 0 && neutral === 0 && bad === 0) ? <Notification/> : 
          <Statistics
            stateGood = {good}
            stateNeutral = {neutral}
            stateBad = {bad}
          />}
        </Section>
      </div>

      
    );
  }
};
