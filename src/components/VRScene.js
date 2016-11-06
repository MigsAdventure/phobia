import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


@connect()
export default class VRScene extends Component {
  constructor(){
    super();
    this.state = {
      reset: false
    }
  }

  resetView(){
    this.setState({
      reset: !this.state.reset
    })
  }
  render() {
    let testCase;
    if (this.state.reset) {
      testCase =
        <a-image
          // src="./image.png"
          width="2"
          height="2"
          position= '2 2 -6'
          onClick={this.resetView.bind(this)}
        />
    }
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

        {/* {testCase} */}
         <a-image
        src="./assets/duckpick.png"
        width="12"
        height="2"
        position= '0 4 -6'
        />

        <a-image
          src="./assets/public-speaking-icon-white.svg"
          width="5"
          height="2.5"
          position="-5 1 -6"
          rotation='0 30 0'
          onClick={() => browserHistory.push('/publicspeaking')}
        />
        <a-image
          src="./assets/claustrophobia-icon.svg"
          width="5"
          height="2.5"
          position="4 1 -6"
          rotation='0 -30 0'
          onClick={() => browserHistory.push('/claustrophobia')}
        />
        <a-image
          src="./assets/heights-icon.svg"
          width="5"
          height="2.5"
          position="-5 -3 -6"
          rotation='0 30 0'
          onClick={() => browserHistory.push('/heights')}
        />
        <a-image
          src="./assets/insects-icon.svg"
          width="5"
          height="2.5"
          position=" 4 -3 -6"
          rotation='0 -30 0'
          onClick={() => browserHistory.push('/insects')}
        />


        <a-assets>
          <video id="video" src="./assets/beach_360.mp4"
            autoplay='false' loop='false' crossorigin></video>
        </a-assets>
        <a-videosphere  src="#video"></a-videosphere>


        {/* <a-assets>
          <img id="duck"  src="./assets/duckpick.png"/>
        </a-assets>
        <a-curvedimage src="#duck" height="3.0" radius="10" theta-length="120"   position= '-3 6 -6'
                      rotation="-15 110 30" scale="1"></a-curvedimage>
 */}

        {/* <a-assets>
          <img id="publicSpeaking"  src="./assets/public-speaking-icon-white.svg"/>
        </a-assets>
        <a-curvedimage src="#publicSpeaking" height="3.0" radius="5.7" theta-length="72"   position="-5 1 -6"
                       rotation="0 180 0" scale="0.8 0.8 0.8"></a-curvedimage>
        <a-assets>
          <img id="claustrophobia" src="./assets/claustrophobia-icon.svg"/>
        </a-assets>
        <a-curvedimage src="#claustrophobia" height="3.0" radius="5.7" theta-length="72"  position="4 1 -6"
                       rotation="0 100 0" scale="0.8 0.8 0.8"></a-curvedimage>
        <a-assets>
          <img id="heights" src="./assets/heights-icon.svg"/>
        </a-assets>
        <a-curvedimage src="#heights" height="3.0" radius="5.7" theta-length="72"   position="-5 1 -6"  position="-5 -3 -6"
                       rotation="0 180 0" scale="0.8 0.8 0.8"></a-curvedimage>
        <a-assets>
          <img id="insects" src="./assets/insects-icon.svg"/>
        </a-assets>
        <a-curvedimage src="#insects" height="3.0" radius="5.7" theta-length="72"   position=" 4 -3 -6"
                       rotation="0 100 0" scale="0.8 0.8 0.8"></a-curvedimage>
 */}


        {/* <a-assets>
          <img id="my-image src="'./image.png'">
        </a-assets> */}
        {/* <Entity geometry="primitive: box; width: 1; height: 0.2"
          // material={{src: "url(./demo.mp4)"}}
          material={{color:'black'}}
          position='0 -0.5 -5'
          rotation="-90 0 0"
          onClick={browserHistory.push('/scene1')}
          >
          </Entity>
        {/* <Entity id="links" layout="type: line; margin: 1.5" position="0 -1 -4"> */}
        {/* <Text
          text='Public Speaking'
        color='#DADADA' */}
        {/* // position='-1.05 0.1 -5'
          // layout="type: line; margin: 1.5"

          font-size='0.5'
          />
        */}
        {/* <Entity light={{type: 'ambient', color: '#888'}}/>
          <Entity light={{type: 'directional', intensity: 0.5}} position='1 -0.5 -5'/>
        <Entity light={{type: 'directional', intensity: 1}} position='1 1 0'/> */}

          {/* <Entity
            animation__rot={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
            animation__sca={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
            geometry='primitive: sphere'
            material={{color: this.state.color, opacity: 0.6}}
            // position='0 -0.5 -3'
          onClick={this.changeColor.bind(this)}> */}

          {/* <Entity
            animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '2 2 2'}}
            geometry='primitive: box; depth: 0.2; height: 0.2; width: 0.2'
          material={{color: '#24CAFF'}}/> */}
          {/* </Entity> */}

          </Scene>
          )
          }
          }
