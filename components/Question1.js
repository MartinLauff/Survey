import { useState, useEffect } from 'react';
import surveyStyles from '../styles/Survey.module.css';

const Question1 = ({ collectAnswers }) => {
  const [state, setState] = useState(false);
  const onChange = (e) => {
    switch (e.target.value) {
      case 'Work':
        return setState(1);
      case 'Gap Year':
        return setState(2);
      case 'University':
        return setState(3);
      case 'Military':
        return setState(4);
      default:
        return state;
    }
  };

  useEffect(() => {
    collectAnswers(state);
  }, [state]);

  return (
    <div className={surveyStyles.question}>
      <span>1 / 6</span>
      <legend>
        Which Post-Secondary School Option do you think you will pursue?
      </legend>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='radio'
          id='work'
          name='pursue'
          value='Work'
          checked={state === 1}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='work'>
          <span className={surveyStyles.formRadioButton}></span>
          Work
        </label>
      </div>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='radio'
          id='gap year'
          name='pursue'
          value='Gap Year'
          checked={state === 2}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='gap year'>
          <span className={surveyStyles.formRadioButton}></span>
          Gap Year
        </label>
      </div>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='radio'
          id='university'
          name='pursue'
          value='University'
          checked={state === 3}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='university'>
          <span className={surveyStyles.formRadioButton}></span>
          University
        </label>
      </div>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='radio'
          id='military'
          name='pursue'
          value='Military'
          checked={state === 4}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='military'>
          <span className={surveyStyles.formRadioButton}></span>
          Military
        </label>
      </div>
    </div>
  );
};

export default Question1;
