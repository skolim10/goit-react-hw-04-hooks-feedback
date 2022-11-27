import propTypes from 'prop-types';
import statisticscss from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={statisticscss.feedbackList}>
    <li className={statisticscss.feedbackListItem}>Good: {good}</li>
    <li className={statisticscss.feedbackListItem}>Neutral: {neutral}</li>
    <li className={statisticscss.feedbackListItem}>Bad: {bad}</li>
    <li className={statisticscss.feedbackListItem}>Total: {total}</li>
    <li className={statisticscss.feedbackListItem}>
      Positive feedback: {positivePercentage} %
    </li>
  </ul>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
