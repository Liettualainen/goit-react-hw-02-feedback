import React from 'react';
import Statistics from "../components/Statistics";
import FeedbackOption from "../components/FeedbackOptions";



class Section extends React.Component {
   state = {
        good: 0,
        neutral: 0,
       bad: 0,
    }
    
    // static defaultProps = {
    //    Initialtotal: 0,
    // }
        
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
        return (<div className="Title">
                  
                <p>Please leave feedback</p>
                   
            <FeedbackOption
                onhandleClickGoodCounter={this.handleClickGoodCounter}
                onhandleClickNeutralCounter= {this.handleClickNeutralCounter}
                onhandleClickBadCounter= {this.handleClickBadCounter}
                 onCountTotalFeedback={this.countTotalFeedback()}         
            />
        
            <Statistics
                onGood={this.state.good}
                onNeutral={this.state.neutral}
                onBad={this.state.bad}
                onCountTotalFeedback={this.countTotalFeedback()}
                onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />

  

       
    </div>
        )
    }
}

export default Section;