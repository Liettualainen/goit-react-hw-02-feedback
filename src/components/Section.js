import React from 'react';
import Statistics from "../components/Statistics";
import FeedbackOption from "../components/FeedbackOptions";



class Section extends React.Component {
   state = {
        good: 0,
        neutral: 0,
       bad: 0,
    }

        
    handleClickGoodCounter = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            }
});
    };
    handleClickNeutralCounter = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            }
});
   };
         handleClickBadCounter = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            }
 });
    };
    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad
    }
    countPositiveFeedbackPercentage = () => {
        return isNaN(Math.round(this.state.good / this.countTotalFeedback() * 100)) ? 0 : Math.round(this.state.good / this.countTotalFeedback() * 100)
    }



    render() {

        const { good } = this.state;
        const { neutral } = this.state;
        const { bad } = this.state;

        return (<div className="Title">
                   
            <FeedbackOption              
                onhandleClickGoodCounter={this.handleClickGoodCounter}
                onhandleClickNeutralCounter= {this.handleClickNeutralCounter}
                onhandleClickBadCounter= {this.handleClickBadCounter}
                 onCountTotalFeedback={this.countTotalFeedback()}         
            />
        
            <Statistics
                onGood={good}
                onNeutral={neutral}
                onBad={bad}
                onCountTotalFeedback={this.countTotalFeedback()}
                onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />

  

       
    </div>
        )
    }
}

export default Section;