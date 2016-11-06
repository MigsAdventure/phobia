
 import React, { Component } from 'react';
 import { Entity, Scene } from 'aframe-react';
 import { connect } from 'react-redux';
 import { browserHistory } from 'react-router';


 @connect()
 export default class Pause extends Component {
   constructor(){
     super();
   }

   render() {
     return (
       <Scene>
       {/* CURSOR */}
       {/* <a-sky color="#6EBAA7"></a-sky> */}
       {/* <a-sky src="./assets/3dimage_360.jpeg" rotation="0 -130 0"></a-sky> */}
       <Entity camera look-controls >
       <a-cursor
       cursor="fuse: true; fuseTimeout: 1000"
       position="0 0 0"
       geometry="primitive: ring"
       material="color: red; shader: flat"
       animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150">
       <a-animation begin="click" easing="ease-in" attribute="scale"
       fill="backwards" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
       <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale"
       fill="forwards" from="1 1 1" to="0.1 0.1 0.1"></a-animation>
       </a-cursor>
       </Entity>

       <a-image
       src="./assets/duckpick.png"
       width="12"
       // height="2"
       position= '6 3 -5'
       />

       <a-image
       src="./assets/public-speaking-icon-white.svg"
       width="5"
       height="2.5"
       position="-7 -1 -6"
       rotation='0 30 0'
       onClick={() => browserHistory.push('/meetingroom')}
       />
       <a-image //  --HACK NO TOUCH
       src="./assets/claustrophobia-icon.svg"
       width="5"
       height="2.5"
       position="0 -1 -6"
       rotation='0 0 0'
      //  onClick={() => browserHistory.push('/meetingroom')}
       />
       <a-image
       src="./assets/heights-icon.svg"
       width="5"
       height="2.5"
       position="7 -1 -6"
       rotation='0 -30 0'
       onClick={() => browserHistory.push('/')}
       />

        <Entity geometry="primitive: box; width: 140%; height: 100%;"
         material={{color:'black'}}
        //  material={{color:'black', opacity: '0.5'}}
        //  transparent='true'
         position='0 -0.5 -8'
         rotation="0 0 0"
         />

       </Scene>
     )
   }
 }
