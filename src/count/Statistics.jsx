import PropTypes from 'prop-types';


// Компонент відображення статистики
export const Statistics = ({ stateGood, stateNeutral, stateBad }) => {
  // обчислення загальної кількості відгуків
  const totalFeedback = () => {
    return stateBad + stateNeutral + stateGood;
  }
  // обчислення відсотку позитивних відгуків
  const positivePercent = () => {
    if (stateGood !== 0) {
      return Math.round(stateGood / (stateBad + stateNeutral + stateGood) * 100);
    } else {
      return 0;
    }
  }
    return (
      <ul className="stats">
        <li>
          <span className="label">Good:</span>
          <span className="quantity">{stateGood}</span>
        </li>
        <li>
          <span className="label">Neutral:</span>
          <span className="quantity">{stateNeutral}</span>
        </li>
        <li>
          <span className="label">Bad:</span>
          <span className="quantity">{stateBad}</span>
        </li>
        <li>
          <span className="label">Total:</span>
          <span className="quantity">{totalFeedback()}</span>
        </li>
        <li>
          <span className="label">Positive feedback:</span>
          <span className="quantity">{positivePercent()}%</span>
        </li>
      </ul>
    )
}

Statistics.propTypes = {
  stateGood: PropTypes.number.isRequired,
  stateNeutral: PropTypes.number.isRequired,
  stateBad: PropTypes.number.isRequired,
}