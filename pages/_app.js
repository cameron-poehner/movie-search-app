import React from "react";
import NextApp from "next/app";
import withRedux from '../lib/withRedux'
import { Provider } from 'react-redux'
import Page from '../components/Page'
import '../styles/globals.css'

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