import { useState, useEffect } from 'react';
import surveyStyles from '../styles/Survey.module.css';

const Question4 = ({ collectAnswers }) => {
  const [state, setState] = useState(false);

  const onChange = (e) => {
    switch (e.target.value) {
      case 'relaxed':
        return setState(1);
      case 'little':
        return setState(2);
      case 'worried':
        return setState(3);
      case 'really':
        return setState(4);
      case 'anxious':
        return setState(5);
      default:
        return state;
    }
  };

  useEffect(() => {
    collectAnswers(state);
  }, [state]);

  return (
    <div className={`${surveyStyles.question4} ${surveyStyles.question}`}>
      <span>4 / 6</span>
      <legend>
        On a scale of 1-5 how "stressed out" are you about the application
        process and getting in to the university you want?
      </legend>
      <div className={surveyStyles.questionContainer}>
        <div className={surveyStyles.answers}>
          <div>
            <p>1. no problem - I'm relaxed</p>
          </div>
          <div>
            <p>2. a little worried</p>
          </div>
          <div>
            <p>3. worried</p>
          </div>
          <div>
            <p>4. really worried & anxious </p>
          </div>
          <div>
            <p>5. so anxious that I'm losing sleep</p>
          </div>
        </div>
        <div className={surveyStyles.checks}>
          <div className={surveyStyles.formRadioGroup}>
            <input
              className={surveyStyles.formRadioInput}
              type='radio'
              id='relaxed'
              name='stress'
              value='relaxed'
              checked={state === 1}
              onChange={onChange}
            />
            <label className={surveyStyles.formRadioLabel} htmlFor='relaxed'>
              <span className={surveyStyles.formRadioButton}></span>
            </label>
          </div>
          <div className={surveyStyles.formRadioGroup}>
            <input
              className={surveyStyles.formRadioInput}
              type='radio'
              id='little'
              name='stress'
              value='little'
              checked={state === 2}
              onChange={onChange}
            />
            <label className={surveyStyles.formRadioLabel} htmlFor='little'>
              <span className={surveyStyles.formRadioButton}></span>
            </label>
          </div>
          <div className={surveyStyles.formRadioGroup}>
            <input
              className={surveyStyles.formRadioInput}
              type='radio'
              id='worried'
              name='stress'
              value='worried'
              checked={state === 3}
              onChange={onChange}
            />
            <label className={surveyStyles.formRadioLabel} htmlFor='worried'>
              <span className={surveyStyles.formRadioButton}></span>
            </label>
          </div>
          <div className={surveyStyles.formRadioGroup}>
            <input
              className={surveyStyles.formRadioInput}
              type='radio'
              id='really'
              name='stress'
              value='really'
              checked={state === 4}
              onChange={onChange}
            />
            <label className={surveyStyles.formRadioLabel} htmlFor='really'>
              <span className={surveyStyles.formRadioButton}></span>
            </label>
          </div>
          <div className={surveyStyles.formRadioGroup}>
            <input
              className={surveyStyles.formRadioInput}
              type='radio'
              id='anxious'
              name='stress'
              value='anxious'
              checked={state === 5}
              onChange={onChange}
            />
            <label className={surveyStyles.formRadioLabel} htmlFor='anxious'>
              <span className={surveyStyles.formRadioButton}></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question4;
