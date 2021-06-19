import { useState, useEffect } from 'react';
import surveyStyles from '../styles/Survey.module.css';

const Question3 = ({ collectAnswers }) => {
  const [state, setState] = useState([]);

  const answerConfig = {
    exploration: {
      value: 1,
      name: 'exploration',
    },
    searching: {
      value: 2,
      name: 'searching',
    },
    scholarships: {
      value: 3,
      name: 'scholarships',
    },
    apprenticeship: {
      value: 4,
      name: 'apprenticeship',
    },
    enlistment: {
      value: 5,
      name: 'enlistment',
    },
    opportunities: {
      value: 6,
      name: 'opportunities',
    },
    none: {
      value: 7,
      name: 'none',
    },
  };

  useEffect(() => {
    collectAnswers(state);
  }, [state]);

  const onChange = (e) => {
    const { value, name } = answerConfig[e.target.value];

    if (e.target.value === name) {
      if (state.includes(value)) {
        return setState((oldArr) => oldArr.filter((el) => el !== value));
      }

      setState((oldArr) => [...oldArr, value]);
    }
  };

  return (
    <div className={surveyStyles.question}>
      <span>3 / 6</span>
      <legend>
        Which aspects of post-secondary school planning would you like to help
        with?
      </legend>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='checkbox'
          id='exploration'
          name='aspects'
          value='exploration'
          checked={state.forEach((i) => i === 1)}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='exploration'>
          <span className={surveyStyles.formRadioButton}></span>
          Career & skills exploration
        </label>
      </div>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='checkbox'
          id='searching'
          name='aspects'
          value='searching'
          checked={state.forEach((i) => i === 2)}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='searching'>
          <span className={surveyStyles.formRadioButton}></span>
          University searching
        </label>
      </div>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='checkbox'
          id='scholarships'
          name='aspects'
          value='scholarships'
          checked={state.forEach((i) => i === 3)}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='scholarships'>
          <span className={surveyStyles.formRadioButton}></span>
          Financial aid & scholarships
        </label>
      </div>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='checkbox'
          id='apprenticeship'
          name='aspects'
          value='apprenticeship'
          checked={state.forEach((i) => i === 4)}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='apprenticeship'>
          <span className={surveyStyles.formRadioButton}></span>
          Exploring apprenticeship
        </label>
      </div>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='checkbox'
          id='enlistment'
          name='aspects'
          value='enlistment'
          checked={state.forEach((i) => i === 5)}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='enlistment'>
          <span className={surveyStyles.formRadioButton}></span>
          Exploring military enlistment
        </label>
      </div>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='checkbox'
          id='opportunities'
          name='aspects'
          value='opportunities'
          checked={state.forEach((i) => i === 6)}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='opportunities'>
          <span className={surveyStyles.formRadioButton}></span>
          Gap Year opportunities
        </label>
      </div>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='checkbox'
          id='none'
          name='aspects'
          value='none'
          checked={state.forEach((i) => i === 7)}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='none'>
          <span className={surveyStyles.specialBtns}></span>
          None - I've totally got
          <br className={surveyStyles.brs} /> a handle on all of it
        </label>
      </div>
    </div>
  );
};

export default Question3;
