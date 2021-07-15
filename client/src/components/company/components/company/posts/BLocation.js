import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Location.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <div className="location-box-b" style={{ height: '410px', width: '400px', borderRadius: '20px' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyBibEsSWGqXjOS3DbXiFM4i2cbQhZHb2wo" }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
        );
    }
}

export default SimpleMap;
