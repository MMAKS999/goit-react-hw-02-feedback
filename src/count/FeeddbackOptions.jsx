import PropTypes from 'prop-types';

export const FeedbackOptions = ({ response, nameButton }) => (
  <button type="button" onClick={response}>{nameButton}</button>
)

FeedbackOptions.propTypes = {
  response: PropTypes.elementType.isRequired,
  nameButton: PropTypes.string.isRequired,
}