import React from 'react';

const Statistics = ({onGood, onNeutral, onBad, onCountTotalFeedback, onCountPositiveFeedbackPercentage}) => (
    
        onCountTotalFeedback !== 0 && (
            <div>
                <p>   <span>Statistics</span>  </p>
                <p>Good: {onGood}</p>
                <p>Neutral: {onNeutral}</p>
                <p>Bad: {onBad}</p>
                <p>Total: {onCountTotalFeedback}</p>
                <p>Positive leave feedback: {onCountPositiveFeedbackPercentage}%</p>
            </div>)
    
 
);

export default Statistics;