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
        <a-sky src="./assets/3dimage_360.jpeg" rotation="0 -130 0"></a-sky>
        <Entity camera look-controls >
          <a-cursor
            cursor="fuse: true; fuseTimeout: 1000"
            position="0 0 -1"
            geometry="primitive: ring"
            material="color: red; shader: flat"
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150">
            <a-animation begin="click" easing="ease-in" attribute="scale"
              fill="backwards" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
            <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale"
              fill="forwards" from="1 1 1" to="0.1 0.1 0.1"></a-animation>
          </a-cursor>
        </Entity>

        {testCase}

        <a-image
          // src="./image.png"
          width="2"
          height="2"
          position= '0 2 -6'
          onClick={() => browserHistory.push('/scene1')}
        />
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
