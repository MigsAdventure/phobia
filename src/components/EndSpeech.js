import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';
import { connect } from 'react-redux';
require('aframe-video-controls');

@connect()
export default class EndSpeech extends Component {
  constructor(){
    super();
    this.state = {
      speed: '170',
      clarity: '87%',
      filler: '12 words or 5%',
      umcounter: '12 times',
      show: false
    }
  }

  render() {
    let { speed, clarity, filler, umcounter, show } = this.state
    return (
      <div>
        <img src='./assets/psyduck.png' className='psyLogo'/>
        <Scene>
          {/* <Entity camera look-controls near > */}
          {/* <a-image src='./assets/psyduck.png' position="5 4.5 -6.5" onClick={this.getMenu.bind(this)}></a-image> */}
          {/* <a-image src='./assets/'></a-image> */}
          {/* </Entity> */}
          {/* <Entity height='6' width='6'>

          </Entity> */}
          <a-plane rotation="0 0 0" height="8" width='8' position='0 0 -5' color="green">
            <Entity text={{text:`Speed: ${speed}`, size:'0.15'}} material={{color:'black'}} position="-1.5 -0.8 1"/>
            <Entity text={{text:`Clarity: ${clarity}`, size:'0.15'}} material={{color:'black'}} position="-1.5 -0.2 1"/>
            <Entity text={{text:`Filler Words: ${filler}`, size:'0.15'}} material={{color:'black'}} position="-1.5 0.4 1" />
            <Entity text={{text:`Um Counter: ${umcounter}`, size:'0.15'}} material={{color:'black'}} position="-1.5 1 1"/>
          </a-plane>
          <Entity position="0 0 0">
            <Entity camera look-controls >
              <a-cursor
                cursor="fuse: false; fuseTimeout: 1000"
                geometry="primitive: ring"
                material="color: red; shader: flat"
                animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150">
                <a-animation begin="click" easing="ease-in" attribute="scale"
                  fill="backwards" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
                <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale"
                  fill="forwards" from="1 1 1" to="0.1 0.1 0.1"></a-animation>
              </a-cursor>
            </Entity>
          </Entity>
        </Scene>
      </div>
    )
  }
}
