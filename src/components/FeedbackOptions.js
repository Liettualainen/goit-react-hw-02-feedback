import { PropTypes } from 'prop-types';
import React from 'react';
import {
  ButtonShape, ButtonDecoration, StatisticsShape, NotificationShape
} from './Common.styled.js';


// const Options = [
//   { label: 'Good'},
//   {label: 'Neutral'},
//   { label: 'Bad' },

// ];


const FeedbackOption = ({ Options, onLeaveFedback, onhandleClickGoodCounter,
  onhandleClickNeutralCounter, onhandleClickBadCounter, onCountTotalFeedback }) => (
  <>
     <StatisticsShape>Please leave feedback</StatisticsShape>
    <ButtonShape>
      {/* {Options.map(({ label }) => (
        <ButtonDecoration type="Button" key={label} onClick={()=> onLeaveFedback(label)} >{label }</ButtonDecoration>
      ))} */}
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

FeedbackOption.propTypes = {

    onhandleClickGoodCounter: PropTypes.string.isRequired,
    onhandleClickNeutralCounter: PropTypes.string.isRequired,
    onhandleClickBadCounter: PropTypes.string.isRequired,
    onCountTotalFeedback: PropTypes.string.isRequired,
   
}
