import 'aframe';
import 'aframe-text-component'; // 3d text
import 'aframe-bmfont-text-component'; // flat text
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';
import Root from './components/Root';
import Scene1 from './components/Scene1';
import VRScene from './components/VRScene';
// import EndSpeech from './components/EndSpeech'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Scene1}>
        {/* <Route component={Home} />
        <Route path="/thread/:id" component={ThreadPage} /> */}
      </Route>
      {/* <Route path='/scene1' component={Scene1}/> */}
    </Router>
  </Provider>,
  document.getElementById('root')
);
