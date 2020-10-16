import Leaflet from 'leaflet';

import mapMarkerImg from '../assets/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [45, 55],
  iconAnchor: [22.5, 55],
  popupAnchor: [0, -47]
})

export default mapIcon;