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
import PublicSpeaking from './components/PublicSpeaking';
import Claustrophobia from './components/Claustrophobia';
// import Elevator from './components/Elevator';
import Pause from './components/Pause';
// import EndSpeech from './components/EndSpeech'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={VRScene} />
      {/* <Route path='/' component={Pause} /> */}
         <Route path='/publicspeaking' component={PublicSpeaking} />
         {/* <Route path='/elevator' component={Elevator} /> */}
         <Route path='/claustrophobia' component={Claustrophobia} />
         {/* <Route path='/heights' component={Heights} /> */}
         {/* <Route path='/insects' component={insects} /> */}
         <Route path='/meetingroom' component={Scene1} />
         {/* <Route path='/meetingroom' component={MeetingRoom} /> */}
         <Route path='/pause' component={Pause} />

      {/* <Route path='/scene1' component={Scene1}/> */}
    </Router>
  </Provider>,
  document.getElementById('root')
);
