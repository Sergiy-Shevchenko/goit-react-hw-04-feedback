import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="section__statistics">
    <span className={css.item}>
      Good:<p className={css.rating}>{good}</p>
    </span>
    <span className={css.item}>
      Neutral:<p className={css.rating}>{neutral}</p>
    </span>
    <span className={css.item}>
      Bad:<p className={css.rating}>{bad}</p>
    </span>
    <span className={css.item}>
      Total:<p className={css.rating}>{total}</p>
    </span>
    <span className={css.item}>
      Positive feetback:<p className={css.rating}>{positivePercentage}%</p>
    </span>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
