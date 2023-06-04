import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
     { options &&
      options.map((option) => (
      <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
   ))}
  </div>
 
)

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.elementType.isRequired,
  options: PropTypes.array.isRequired,
}