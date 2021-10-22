import styles from "./App.module.css";
import React from "react";
import { Statistics } from "../components/Statistics/Statistics";
import { Section } from "../components/Section/Section";
import { FeedbackOptions } from "../components/FeedbackOptions/FeedbackOptions";
import { Notification } from "../components/Notification/Notification";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackChoice = (feedback) => {
    this.setState((prevState) => {      
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positivePercentage = Math.round(
      (100 * good / this.countTotalFeedback()
    ))
    return positivePercentage;
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <section className={styles.container}>
        <div className={styles.feedback}>
          <Section title={"Please leave your feedback"}>
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.feedbackChoice}
            />
          </Section>
          {this.countTotalFeedback() > 0 ? (
            <Section title={"Statistics"}>
              <Statistics
                goodValue={good}
                neutralValue={neutral}
                badValue={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          ) : (
            <Notification massage={"No feedback given"} />
          )}
        </div>
      </section>
    );
  }
}
export default App;
