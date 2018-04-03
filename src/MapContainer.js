import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {


  render() {
    return (
      <Map google={this.props.google} zoom={15}
          style={{width: '700px', height: '700px'}}
          initialCenter={{lat: 39.7576, lng: -105.0069}}>

        <Marker id="gSchool"
                name={'Galvanize - Platte'}
                position={{lat:39.7576196 , lng:-105.0069694 }}
                label={"Galvanize - Platte campus"} >
        </Marker>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBVs_Da8LA7YNsfI6VTGmuAlPTN4r5Fdv0')
})(MapContainer)
