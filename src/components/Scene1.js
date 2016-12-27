import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
require('aframe-video-controls');

@connect()
export default class Scene1 extends Component {
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
  startVideo(){
    document.getElementById('video').play();
  }
  getMenu(e){
    this.setState({
      show: !this.state.show
    });
    // browserHistory.push('')
  }

  render() {
    let { speed, clarity, filler, umcounter, show } = this.state
    let stats;
    if(show) {
      // document.getElementById('video').pause();
      stats =
      // <Entity camera near>
        <a-box color='#000' opacity='0.2' height='12' width='15' position='-3 -2 -4' rotation="-30 35 0">
          <Entity text={{text:`Speed: ${speed}`, size:'0.15'}} material={{color:'black', letterSpacing: '2px'}} position="-1.5 -0.8 1"/>
          <Entity text={{text:`Clarity: ${clarity}`, size:'0.15'}} material={{color:'black'}} position="-1.5 -0.2 1"/>
          <Entity text={{text:`Filler Words: ${filler}`, size:'0.15'}} material={{color:'black'}} position="-1.5 0.4 1" />
          <Entity text={{text:`Um Counter: ${umcounter}`, size:'0.15'}} material={{color:'black'}} position="-1.5 1 1"/>
        </a-box>
      // </Entity>
    }
    return (
      <div>
        {/* <h1>TEST</h1> */}

        <Scene>

          {/* <Entity text={{text: 'Hello World!'}} material={{color: 'green'}} position={[0, 0, -5]}></Entity> */}
          {/* <Entity
            geometry={{primitive: 'box'}}
            material='color: red'
            position={[0, 1, -5]}
            // material={{shader: 'flat', src:'https://lh3.googleusercontent.com/9vXfylcy6P43T8vkgdWJjxQCR2Cf3DDLuzJPiXcHcUvtd2JDzTeHnA7Ex0n741qLnHOf=h1264'}}
            // scale="1 1 -1"
          /> */}

          {/* Video */}

          <a-assets>
            <video id="video" src="./assets/demo_360.mp4"
              autoplay='false' loop='false' crossorigin></video>
          </a-assets>
          <a-videosphere  src="#video"></a-videosphere>


          {/* <img id="video-pause-image" src="./assets/psyduck.png" /> */}
          {/* <Entity video-controls={{src: '#video'}}></Entity> */}
          {/* <a-ring color='teal' radius-inner='1' radius-outer='2' position='0 0 -5' opacity='0.9' rotation='-90 0 0'>
          </a-ring> */}
          {stats}
          {/* <a-sphere color='#000' opacity='0.5' radius='1.5' position='0 3.5 -1.5' onClick={this.getMenu.bind(this)}>
            <Entity text={{text:'Done'}} material={{color:'blue'}} position='-0.7 -1 0' rotation={[90, 0, 0]}></Entity>
          </a-sphere> */}
          <Entity camera look-controls near >
            <a-image src='./assets/psyduck.png' position="5 4.5 -6.5" onClick={() => browserHistory.push('/pause')}></a-image>
            {/* <a-image src='./assets/psyduck.png' position="5 4.5 -6.5" onClick={this.getMenu.bind(this)}></a-image> */}
            {/* <a-image src='./assets/'></a-image> */}
          </Entity>
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
