import React, { Component } from 'react';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import L from 'leaflet';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const position = [39.7576196, -105.0069694];

class MapBuilder extends Component {

  static defaultProps = {
    center: {
      lat: 39.75,
      lng: -105.00
    },
    zoom: 13
  };


  initMap() {
    var gPlatte = {lat: 39.75, lng: -105.00};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: gPlatte
    });
  }

  renderMarkers() {
    let marker = new maps.Marker({
      position: myLatLng,
      map,
      title: 'Hello World!'
    });

  }


  render() {
    return (
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBVs_Da8LA7YNsfI6VTGmuAlPTN4r5Fdv0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers()}
          yesIWantToUseGoogleMapApiInternals
        >

          <AnyReactComponent
            lat={39.7576196}
            lng={-105.0069694}
            text={'GALVAINZE - Platte'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapBuilder;
