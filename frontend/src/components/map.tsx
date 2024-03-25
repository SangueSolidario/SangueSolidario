import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Campaign } from "@/services/apiRoutes";
interface MapProps {
  selectedCampaignID: string | null;
  campaigns: Campaign[];
}

export function Map({ selectedCampaignID, campaigns }: MapProps) {
  const [center, setCenter] = useState<[number, number]>([39.8239, -7.49189]);

  useEffect(() => {
    const selectedCampaign = campaigns.find(
      (campanha) => campanha.ID === selectedCampaignID
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
          key={campanha.ID}
          position={[
            parseFloat(campanha.Coordenadas.lat),
            parseFloat(campanha.Coordenadas.lon),
          ]}
        >
          <Popup>{campanha.Descricao}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
