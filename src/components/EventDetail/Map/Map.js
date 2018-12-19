import GoogleMapReact from "google-map-react";
import React, { Component } from "react";
import { Wrapper } from "./MapStyles";
import Marker from "./Marker";

export default class Map extends Component {
  onClick = props => {
    const lat = props.latitude;
    const lng = props.longitude;
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
    );
  };

  render() {
    const center = {
      lat: this.props.latitude,
      lng: this.props.longitude
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
            text={this.props.address}
          />
        </GoogleMapReact>
      </Wrapper>
    );
  }
}
