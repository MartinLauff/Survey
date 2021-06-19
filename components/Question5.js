import { useState, useEffect } from 'react';
import surveyStyles from '../styles/Survey.module.css';

const Question5 = ({ collectAnswers }) => {
  const [state, setState] = useState('');

  useEffect(() => {
    collectAnswers(state);
  }, [state]);

  return (
    <div className={`${surveyStyles.question5} ${surveyStyles.question}`}>
      <span>5 / 6</span>
      <legend>
        If you wanted to study abroad, which country would you choose?
      </legend>
      <input
        onChange={(e) => setState(e.target.value)}
        value={state}
        required
        type='text'
        placeholder='Czechia, Germany etc..'
      />
    </div>
  );
};

export default Question5;
