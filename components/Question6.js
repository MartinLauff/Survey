import { useState, useEffect } from 'react';
import surveyStyles from '../styles/Survey.module.css';

const Question6 = ({ collectAnswers }) => {
  const [state, setState] = useState(false);

  const onChange = (e) => {
    if (e.target.value === 'yes') {
      setState(1);
    } else {
      setState(2);
    }
  };

  useEffect(() => {
    collectAnswers(state);
  }, [state]);

  return (
    <div className={surveyStyles.question}>
      <span>6 / 6</span>
      <legend>Was this survey useful ?</legend>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='radio'
          id='Yes'
          name='useful'
          value='yes'
          checked={state === 1}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='Yes'>
          <span className={surveyStyles.formRadioButton}></span>
          Yes
        </label>
      </div>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='radio'
          id='No'
          name='useful'
          value='no'
          checked={state === 2}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='No'>
          <span className={surveyStyles.formRadioButton}></span>
          No
        </label>
      </div>
    </div>
  );
};

export default Question6;
