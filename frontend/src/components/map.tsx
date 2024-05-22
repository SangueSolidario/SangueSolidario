import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Campaign } from "@/services/apiRoutes";
import { Icon } from "leaflet";
import Blood from "@/assets/blood.svg";

interface MapProps {
  selectedCampaignID: string | null;
  campaigns: Campaign[];
}

const icon = new Icon({
  className: "rounded-full bg-red-500",
  iconUrl: Blood,
  iconRetinaUrl: Blood,
  iconSize: [20, 20],
});

export function Map({ selectedCampaignID, campaigns }: MapProps) {
  const [center, setCenter] = useState<[number, number]>([39.8239, -7.49189]);

  useEffect(() => {
    const selectedCampaign = campaigns.find(
      (campanha) => campanha.id === selectedCampaignID
    );
    if (selectedCampaign) {
      setCenter([
        parseFloat(selectedCampaign.Coordenadas.lat),
        parseFloat(selectedCampaign.Coordenadas.lon),
      ]);
    }
  }, [selectedCampaignID, campaigns]);
  return (
    <MapContainer
      key={selectedCampaignID}
      className="h-[50rem] rounded-md shadow-md border-2 border-gray-400"
      center={center}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {campaigns.map((campanha) => (
        <Marker
          key={campanha.id}
          position={[
            parseFloat(campanha.Coordenadas.lat),
            parseFloat(campanha.Coordenadas.lon),
          ]}
          icon={icon}
        >
          <Popup>{campanha.Descricao}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
