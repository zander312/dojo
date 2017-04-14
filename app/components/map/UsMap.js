import React from 'react';
import styles from './UsMap.scss';
import axios from 'axios';

import MapSvg from "./MapSvg"

export default class UsMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usState: null,
      mouseX: 0,
      mouseY: 0
    };
  }

  _handleMouseMove(e) {
    this.setState({
      mouseX: e.pageX - 150,
      mouseY: e.pageY - 50
    })
  }

  _handleMouseOver(e) {
    if (e.target.id) {
      this.setState({ usState: e.target.id })
    } else {
      this.setState({ usState: null })
    }
  }

  _fetchStateData(){
    let mapData = this.props.mapData
    let state = this.state.usState
    if(mapData[state]){
      return mapData[state]
    } else {
      return "error"
    }

  }

  _displayDataBox() {
    return (
      <div className={styles.dataDisplay} 
           style={{"top": this.state.mouseY, "left": this.state.mouseX}}>
           {this._fetchStateData()}
      </div>
    )
  }

  render() {
    return (
      <div>
        {
          this.state.usState ? 
          this._displayDataBox()
          : null 
        }
        <MapSvg 
          handleMouseOver={(e) => {this._handleMouseOver(e)}}
          handleMouseMove={(e) => {this._handleMouseMove(e)}}
          className={styles.UsMap}
          />
      </div>
    );
  }
}