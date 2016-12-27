import React, { Component } from 'react';
import { Entity, Scene } from 'aframe-react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

@connect()
export default class MeetingRoom extends Component {
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
  componentDidMount(){
    // setTimeout(() => this.getMenu.bind(this)),  5000);
  }
  startVideo(){
    document.getElementById('video').play();
  }
  getMenu(e){
    this.setState({
      show: !this.state.show
    });
  }
  mainmenu(){
    browserHistory.push('/')
  }

  render() {
    let { speed, clarity, filler, umcounter, show } = this.state
    let stats;
    if(show) {
      stats = <a-image
        src="./assets/statsview.png"
        width="2"
        height="2"
        position= '0 0 -2.3'
        onClick={this.mainmenu.bind(this)}
              ></a-image>
        }
        return (
        <div>
          <Scene>

            {/* Video */}

            <a-assets>
              <video id="video" src="./assets/meeting_360.mp4"
                autoplay='true' loop='true' crossorigin></video>
            </a-assets>
            <a-videosphere  src="#video"></a-videosphere>


            <a-image
              src="./assets/psyduck.png"
              width="2"
              height="2"
              position='0 3.5 -1.5'
              rotation='-90 0 180'
              onClick={this.getMenu.bind(this)}
            />
            <Entity position="0 0 -1">
              <Entity camera look-controls>
                <a-cursor
                cursor="fuse: true; fuseTimeout: 1000"
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
