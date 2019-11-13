import React from 'react';
import { Helmet } from 'react-helmet';
import { Hello } from './components/Hello';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - React.js cxvbcxvbcvbvbbv" defaultTitle="React.js Boilerplate">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Hello />
    </div>
  );
}
