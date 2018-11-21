import GoogleMapReact from "google-map-react";
import React, { Component } from "react";
import { Wrapper } from "./MapStyles";
import Marker from "./Marker";

export default class Map extends Component {
  onClick = props => {
    const lat = 59.955413;
    const lng = 30.337844;
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
    );
  };

  render() {
    const center = {
      lat: 59.955413,
      lng: 30.337844
    };

    const zoom = 11;

    return (
      <Wrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBpWc5UXVWIK21646XVM6oPHLbkj5MAW5g" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            onClick={() => this.onClick(this.props)}
            lat={center.lat}
            lng={center.lng}
            text="Kreyser Avrora"
          />
        </GoogleMapReact>
      </Wrapper>
    );
  }
}
