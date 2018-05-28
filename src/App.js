import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidHJ1ZXNhbmp1IiwiYSI6ImNqZnc1azJxNDE0dGYyd213M2M2OG0wZ2cifQ.khig4-dHariDdNBTjkx0VA';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: 5,
            lat: 34,
            zoom: 1.5
        };
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [lng, lat],
            zoom
        });

        map.on('move', () => {
            const { lng, lat } = map.getCenter();

            this.setState({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render() {
        return ( <
            div className = "App" >
            <
            div ref = { el => this.mapContainer = el } className = "absolute top right left bottom" / >
            <
            /div>
        );
    }
}

export default App;