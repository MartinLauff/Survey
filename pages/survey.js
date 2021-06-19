import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import surveyData from '../apis/surveyData';
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

  useEffect(() => {
    console.log(state);
  }, [state]);

  const collectQ1 = (datas) => {
    if (datas === 1) {
      setState((prevState) => ({
        ...prevState,
        question1: 1,
      }));
    }
    if (datas === 2) {
      setState((prevState) => ({
        ...prevState,
        question1: 2,
      }));
    }
    if (datas === 3) {
      setState((prevState) => ({
        ...prevState,
        question1: 3,
      }));
    }
    if (datas === 4) {
      setState((prevState) => ({
        ...prevState,
        question1: 4,
      }));
    }
  };

  const collectQ2 = (datas) => {
    if (datas === 1) {
      setState((prevState) => ({
        ...prevState,
        question2: 1,
      }));
    }
    if (datas === 2) {
      setState((prevState) => ({
        ...prevState,
        question2: 2,
      }));
    }
    if (datas === 3) {
      setState((prevState) => ({
        ...prevState,
        question2: 3,
      }));
    }
    if (datas === 4) {
      setState((prevState) => ({
        ...prevState,
        question2: 4,
      }));
    }
  };

  const collectQ3 = (datas) => {
    setState((prevState) => ({
      ...prevState,
      question3: [...datas],
    }));
  };

  const collectQ4 = (datas) => {
    if (datas === 1) {
      setState((prevState) => ({
        ...prevState,
        question4: 1,
      }));
    }
    if (datas === 2) {
      setState((prevState) => ({
        ...prevState,
        question4: 2,
      }));
    }
    if (datas === 3) {
      setState((prevState) => ({
        ...prevState,
        question4: 3,
      }));
    }
    if (datas === 4) {
      setState((prevState) => ({
        ...prevState,
        question4: 4,
      }));
    }
    if (datas === 5) {
      setState((prevState) => ({
        ...prevState,
        question4: 5,
      }));
    }
  };

  const collectQ5 = (datas) => {
    setState((prevState) => ({
      ...prevState,
      question5: datas,
    }));
  };

  const collectQ6 = (datas) => {
    if (datas === 1) {
      setState((prevState) => ({
        ...prevState,
        question6: 1,
      }));
    }
    if (datas === 2) {
      setState((prevState) => ({
        ...prevState,
        question6: 2,
      }));
    }
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
