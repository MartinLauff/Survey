import { useRouter } from 'next/router';
import { useState } from 'react';
// import surveyData from '../apis/surveyData';
import surveyStyles from '../styles/Survey.module.css';
import Question1 from '../components/Question1';
import Question2 from '../components/Question2';
import Question3 from '../components/Question3';
import Question4 from '../components/Question4';
import Question5 from '../components/Question5';
import Question6 from '../components/Question6';

const survey = () => {
  const [state, setState] = useState({});
  const [active, setActive] = useState(false);
  const router = useRouter();

  const collectQ1 = (datas) => {
    setState((prevState) => ({
      ...prevState,
      question1: datas,
    }));
  };

  const collectQ2 = (datas) => {
    setState((prevState) => ({
      ...prevState,
      question2: datas,
    }));
  };

  const collectQ3 = (datas) => {
    setState((prevState) => ({
      ...prevState,
      question3: [...datas],
    }));
  };

  const collectQ4 = (datas) => {
    setState((prevState) => ({
      ...prevState,
      question4: datas,
    }));
  };

  const collectQ5 = (datas) => {
    setState((prevState) => ({
      ...prevState,
      question5: datas,
    }));
  };

  const collectQ6 = (datas) => {
    setState((prevState) => ({
      ...prevState,
      question6: datas,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { question6, question4, question3, question2, question1 } = state;

    if (
      !question1 ||
      !question2 ||
      !question4 ||
      !question6 ||
      question3.length == 0
    ) {
      return setActive(true);
    }

    ///////////////////////
    // Code below is for production

    // await surveyData.post(
    //   '/survey',
    //   { ...state },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );
    router.push('/completion');
  };

  return (
    <form onSubmit={onSubmit} className={surveyStyles.container}>
      <h1>What Does the Future Hold for You?</h1>
      <Question1 collectAnswers={collectQ1} />
      <Question2 collectAnswers={collectQ2} />
      <Question3 collectAnswers={collectQ3} />
      <Question4 collectAnswers={collectQ4} />
      <Question5 collectAnswers={collectQ5} />
      <Question6 collectAnswers={collectQ6} />
      <div
        className={`${surveyStyles.error} ${
          active ? surveyStyles.flex : surveyStyles.hidden
        }`}
      >
        You need to answer all questions
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default survey;
