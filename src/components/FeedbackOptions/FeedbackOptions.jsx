import React from 'react';
import css from './FeedBackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedBackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(label => {
        return (
          <button
            className={css.button}
            key={label}
            name={label}
            onClick={onLeaveFeedback}
          >
            {label}
          </button>
        );
      })}
    </>
  );
}

FeedBackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
