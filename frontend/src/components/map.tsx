import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function Map() {
  return (
    <MapContainer
      className="h-[50rem] rounded-md shadow-md border-2 border-gray-400"
      center={[39.8239, -7.49189]}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
