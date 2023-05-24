// import React, { Component } from 'react';
import { useState } from 'react';
import Section from './Section/Section';
import Notification from './Notafacation/Notification';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeatbackForm/FeetbackOptions';
import css from './styles.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100) || 0;
  };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.log('Not!');
    }
  };

  return (
    <>
      <div className={css.container}>
        <Section
          title={'Please leave feedback'}
          children={
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={onLeaveFeedback}
            ></FeedbackOptions>
          }
        ></Section>
        {total === 0 ? (
          <Notification message={'There is no feedback'}></Notification>
        ) : (
          <Section
            title={'Statistics'}
            children={
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={countPositiveFeedbackPercentage()}
              ></Statistics>
            }
          ></Section>
        )}
      </div>
    </>
  );
};

//------------------------------------------------------------
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     const result = (good / total) * 100 || 0;
//     return Math.round(result);
//   };

//   onLeaveFeedback = option => {
//     this.setState(state => {
//       return {
//         [option]: state[option] + 1,
//       };
//     });
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div className={css.container}>
//         <Section
//           title={'Please leave feedback'}
//           children={
//             <FeedbackOptions
//               options={Object.keys(this.state)}
//               onLeaveFeedback={this.onLeaveFeedback}
//             ></FeedbackOptions>
//           }
//         ></Section>
//         {total === 0 ? (
//           <Notification message={'There is no feedback'}></Notification>
//         ) : (
//           <Section
//             title={'Statistics'}
//             children={
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={total}
//                 positivePercentage={positivePercentage}
//               ></Statistics>
//             }
//           ></Section>
//         )}
//       </div>
//     );
//   }
// }

// export default App;
