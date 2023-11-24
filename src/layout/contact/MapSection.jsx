import { MapContainer, TileLayer, Marker,  Popup } from 'react-leaflet'
import L from "leaflet"
import 'leaflet/dist/leaflet.css'

const customIcon = L.icon({
    iconUrl: '/marker-icon.png',
    iconSize: [70, 70],
    iconAnchor: [35, 70]
})

export default function MapSection() {
    
  return (
    <section id="map">
    <MapContainer className='w-full h-96' center={[34.8, -92.2 ]} zoom={6} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[33, -97]} icon={customIcon}>
    <Popup>
        Office II
    </Popup>
  </Marker>
  <Marker position={[36.16, -86.78]} icon={customIcon}>
    <Popup>
        Main Office
    </Popup>
  </Marker>
</MapContainer>
    </section>
  )
}
