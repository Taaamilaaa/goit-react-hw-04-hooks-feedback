import styles from "./App.module.css";
import { useState} from "react";
import { Statistics } from "../components/Statistics/Statistics";
import { Section } from "../components/Section/Section";
import { FeedbackOptions } from "../components/FeedbackOptions/FeedbackOptions";
import { Notification } from "../components/Notification/Notification";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);  
  
  const options = ['Good', 'Neutral', 'Bad'];

  const feedbackChoice = (e) => {
    console.log(e.target.textContent);
    switch (e.target.textContent) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;
      case 'bad':
        setBad(prevState => prevState + 1)
        break;
      default:
        return;
    };
  };
  const countTotal = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () => Math.round((100 * good / countTotal()));

  return (
    <section className={styles.container}>
      <div className={styles.feedback}>
        <Section title={"Please leave your feedback"}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={feedbackChoice}
          />
        </Section>
        {countTotal() > 0 ? (
          <Section title={"Statistics"}>
            <Statistics
              goodValue={good}
              neutralValue={neutral}
              badValue={bad}
              total={countTotal()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification massage={"No feedback given"} />
        )}
      </div>
    </section>
  );
};

export default App;
