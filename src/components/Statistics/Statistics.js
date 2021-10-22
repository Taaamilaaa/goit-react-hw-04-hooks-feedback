import PropTypes from 'prop-types'; // ES6
import styles from "./statistic.module.css"

export function Statistics({
  goodValue,
  neutralValue,
  badValue,
  total,
  positivePercentage,
}) {
  return (
    <>
      <ul className={styles.statisticsList}>
        <li className={styles.statisticsItem}>
          <span className={styles.text}>Good: {goodValue}</span>
        </li>
        <li className={styles.statisticsItem}>
          <span className={styles.text}>Neutral: {neutralValue}</span>
        </li>
        <li className={styles.statisticsItem}>
          <span className={styles.text}>Bad: {badValue}</span>
        </li>

        <li className={styles.statisticsItem}>
          <span className={styles.text}>Total: {total}</span>
        </li>
        <li className={styles.statisticsItem}>
          <span className={styles.text}>Positive feedback: {positivePercentage}%</span>
        </li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
goodValue : PropTypes.number,
  neutralValue: PropTypes.number,
  badValue: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}