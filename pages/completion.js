import Link from 'next/link';
import indexStyles from '../styles/Index.module.css';

const index = () => {
  return (
    <div>
      <header className={indexStyles.bg}>
        <div className={`${indexStyles.rectangle} ${indexStyles.animation}`}>
          Thank you for taking this survey
        </div>

        <div className={indexStyles.right}></div>
        <div className={indexStyles.left}></div>
        <div className={indexStyles.mid}>
          <div className={indexStyles.img}>
            <div className={indexStyles.mask}>
              <div className={indexStyles.topMask}></div>
              <div className={indexStyles.midMask}></div>
              <div className={indexStyles.bottomMask}></div>
            </div>
            <div className={indexStyles.texts}>
              <h1>School Survey</h1>
              <div className={indexStyles.mix}>
                <p>
                  A Survey which provides you a general overview for your
                  options after graduating in secondary school.
                </p>
                <Link href='/survey'>
                  <a>Start Survey</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default index;
