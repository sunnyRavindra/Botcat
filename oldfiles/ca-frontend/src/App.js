import React, { Fragment } from 'react';
import MyFirstComponent from './components/MyFirstComponent/MyFirstComponent';
import './scss/main.scss';
const App = () => {
  return (
    <Fragment>
      <MyFirstComponent Component1='firstComponent1' Component2='SecondComponent2'></MyFirstComponent>
      <MyFirstComponent Component1='firstComponent2' Component2='SecondComponent2'></MyFirstComponent>
    </Fragment>
  );
}

export default App;
