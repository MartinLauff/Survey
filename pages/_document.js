import Document, { Html, Head, Main, NextScript } from 'next/document';
import Footer from '../components/Footer';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body
          style={{
            backgroundImage:
              'linear-gradient(to right bottom, #ff3366, #ba265d)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
