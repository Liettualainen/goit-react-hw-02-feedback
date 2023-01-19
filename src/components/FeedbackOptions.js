import React from 'react';
import {
  ButtonShape, ButtonDecoration, StatisticsShape, NotificationShape
} from './Common.styled.js';


const FeedbackOption = ({onhandleClickGoodCounter, onhandleClickNeutralCounter, onhandleClickBadCounter, onCountTotalFeedback}) => (
  <>
     <StatisticsShape>Please leave feedback</StatisticsShape>
    <ButtonShape>
            <ButtonDecoration type="Button" onClick= {onhandleClickGoodCounter}>Good</ButtonDecoration>
            <ButtonDecoration type="Button"  onClick= {onhandleClickNeutralCounter}>Neutral</ButtonDecoration>
    <ButtonDecoration type="Button" onClick={onhandleClickBadCounter}>Bad</ButtonDecoration>
      </ButtonShape>  
          <StatisticsShape>   <span>Statistics</span>  </StatisticsShape>
        {onCountTotalFeedback === 0 && (
            <NotificationShape>There is no feedback</NotificationShape>)}
    </>

            
        

         
 
);

export default FeedbackOption;