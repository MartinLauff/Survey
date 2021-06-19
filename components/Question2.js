import { useState, useEffect } from 'react';
import surveyStyles from '../styles/Survey.module.css';

const Question2 = ({ collectAnswers }) => {
  const [state, setState] = useState(false);

  const onChange = (e) => {
    switch (e.target.value) {
      case 'absolutely':
        return setState(1);
      case 'planning':
        return setState(2);
      case 'debating':
        return setState(3);
      case 'help':
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
      <span>2 / 6</span>
      <legend>How sure are you about your plans?</legend>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='radio'
          id='absolutely'
          name='sure'
          value='absolutely'
          checked={state === 1}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='absolutely'>
          <span className={surveyStyles.specialBtns}></span>
          Absolutely sure & I have <br className={surveyStyles.brs2} />
          already been planning
        </label>
      </div>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='radio'
          id='planning'
          name='sure'
          value='planning'
          checked={state === 2}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='planning'>
          <span className={surveyStyles.formRadioButton}></span>
          Sure & need to start planning
        </label>
      </div>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='radio'
          id='debating'
          name='sure'
          value='debating'
          checked={state === 3}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='debating'>
          <span className={surveyStyles.formRadioButton}></span>
          Debating options
        </label>
      </div>
      <div className={surveyStyles.formRadioGroup}>
        <input
          className={surveyStyles.formRadioInput}
          type='radio'
          id='help'
          name='sure'
          value='help'
          checked={state === 4}
          onChange={onChange}
        />
        <label className={surveyStyles.formRadioLabel} htmlFor='help'>
          <span className={surveyStyles.specialBtns}></span>
          No idea & I would like <br className={surveyStyles.brs2} />
          some help exploring my options
        </label>
      </div>
    </div>
  );
};

export default Question2;
