import propTypes from 'prop-types';
import feedbackcss from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option, index) => (
      <button
        key={index}
        onClick={() => onLeaveFeedback(option)}
        className={feedbackcss.btn}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
