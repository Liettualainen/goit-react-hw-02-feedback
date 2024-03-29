import { PropTypes } from 'prop-types';
import React from 'react';
import {
   StatisticResultShape,
} from './Common.styled.js';

const Statistics = ({onGood, onNeutral, onBad, onCountTotalFeedback, onCountPositiveFeedbackPercentage}) => (
    
        onCountTotalFeedback !== 0 && (
            < StatisticResultShape>
                {/* <p>   <span>Statistics</span>  </p> */}
                <p>Good: {onGood}</p>
                <p>Neutral: {onNeutral}</p>
                <p>Bad: {onBad}</p>
                <p>Total: {onCountTotalFeedback}</p>
                <p>Positive leave feedback: {onCountPositiveFeedbackPercentage}%</p>
            </ StatisticResultShape>)
    
 
);

export default Statistics;

Statistics.propTypes = {

    onGood: PropTypes.number.isRequired,
    onNeutral: PropTypes.number.isRequired,
    onBad: PropTypes.number.isRequired,
    onCountTotalFeedback: PropTypes.number.isRequired,
    onCountPositiveFeedbackPercentage: PropTypes.number.isRequired,
   
}
