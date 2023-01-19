import React from 'react';

const FeedbackOption = ({onhandleClickGoodCounter, onhandleClickNeutralCounter, onhandleClickBadCounter, onCountTotalFeedback}) => (
    
  <div className="Options" >
            <button type="button" onClick= {onhandleClickGoodCounter}>Good</button>
            <button type="button"  onClick= {onhandleClickNeutralCounter}>Neutral</button>
        <button type="button" onClick={onhandleClickBadCounter}>Bad</button>
        {onCountTotalFeedback === 0 && (
            <p className="Notification message">There is no feedback</p>)}
            
            </div>

         
 
);

export default FeedbackOption;