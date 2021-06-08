
import withRedux from '../lib/withRedux'
import { Provider } from 'react-redux'
import Page from '../components/Page'
import '../styles/globals.css'
import NProgress from 'nprogress'
import Router from 'next/router'
import '../styles/nprogress.css'

// class App extends NextApp {
//   static async getInitialProps({ Component, ctx }) {
//     let pageProps = {};

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }

//     return { 
//       pageProps, 
//     };
//   }

//   render() {
//     const { Component, pageProps, reduxStore } = this.props;

//     return (
//       <Provider store={reduxStore}>
//         <Page>
//           <Component {...pageProps} />
//         </Page>
//       </Provider>
//     );
//   }
// }

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, reduxStore }) {
  return (
    <Provider store={reduxStore}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </Provider>
  );
}


MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
} 

export default withRedux(MyApp);