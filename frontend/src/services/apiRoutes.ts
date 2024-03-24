import api from "./api";

export interface Campaign {
  ID: string;
  Nome: string;
  DataInicio: string;
  DataFim: string;
  Imagem: string;
  Descricao: string;
  Coordenadas: {
    lat: string;
    lon: string;
  };
  TiposSanguineoNecessario: string[];
  Cidade: string;
  Status: string;
}

export function getCampaigns(): Promise<Campaign[]> {
  return api.get("/campanhas").then((response) => response.data);
}

export function postCampaign(campaign: Campaign): Promise<void> {
  return api.post("/campanhas", campaign).then(() => {});
}
