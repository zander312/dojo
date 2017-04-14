import React from 'react';
import styles from './MapStates.scss';
import axios from 'axios';

import Svg from "./map-states.svg"
import MapStatesSvg from "./MapStatesSvg"

export default class MapSvg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {animals: ''};
  }

  // componentDidMount() {
  //   axios.get('/animals/domestic')
  //     .then(function(res) {
  //       console.log(res)
  //       this.setState({animals: res.data.animals})
  //     }.bind(this))
  //     .then(function(err) {
  //       console.log(err)
  //     })
  // }

  render() {
    return (
      <div>
        <p>oioi</p>
        <img src={Svg}/>

        <MapStatesSvg/>
      </div>
    );
  }
}