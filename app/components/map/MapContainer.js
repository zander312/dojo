import React from 'react';
import UsMap from "./UsMap"
import mapDataJson from "./map-data.json"

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData: null,
    };
  }

  componentWillMount(){
    this.setState({mapData: mapDataJson})
    console.log(this.state.mapData)
  }

  render() {
    return (
      <div>
        <UsMap
          mapData={this.state.mapData}
        />
      </div>
    );
  }
}