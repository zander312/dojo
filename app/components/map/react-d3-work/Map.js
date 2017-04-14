// first of course react!
var React = require('react');
// require your <Map> component
var Map = require('react-d3-map').Map;
// require your <Marker> component
var MarkerGroup = require('react-d3-map').MarkerGroup;






export default class UsMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {animals: ''};
  }



  popupContent(d) {
    return d.properties.text;
  }

  render() {
    var data = {
      "type": "Feature",
      "properties": {
        "text": "this is a Point!!!"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [140, 23.5]
      }
    }

    var width = 700;
    var height = 700;
    // set your zoom scale
    var scale = 1200 * 5;
    // min and max of your zoom scale
    var scaleExtent = [1 << 12, 1 << 13]
      // set your center point
    var center = [122, 23.5];
    // set your popupContent


    return (
      <div>
        <Map
          width= {width}
          height= {height}
          scale= {scale}
          scaleExtent= {scaleExtent}
          center= {center}
        >
          <MarkerGroup
            key= {"polygon-test"}
            data= {data}
            popupContent= {this.popupContent}
            markerClass= {"your-marker-css-class"}
          />
        </Map>
      </div>
    );
  }
}