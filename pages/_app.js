import Head from 'next/head';
import '../styles/global.css';

const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>School Survey</title>
        <meta charSet='UTF-8' />
        <meta
          name='keywords'
          content='school, survey, secondary school survey, high school survey, post high school survey'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='What are your plans after finishing secondary school? This survey is to gather information on how people are sure about their plans, where they want to study and which type of help they would appreciate.'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;500;800&display=swap'
          rel='stylesheet'
        />
        <link rel='shortcut icon' href='/favicon.svg' />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default AppComponent;
