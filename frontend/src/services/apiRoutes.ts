import api from "./api";

export interface Campaign {
  ID: string;
  Nome: string;
  DataInicio: string;
  DataFim: string;
  Imagem?: string;
  Descricao: string;
  Coordenadas: {
    lat: string;
    lon: string;
  };
  TiposSanguineoNecessario: string[];
  Cidade: string;
  Status: string;
}

export interface CampaignForm {
  Nome: string;
  DataInicio: string;
  DataFim: string;
  Descricao: string;
  Coordenadas: {
    lat: string;
    lon: string;
  };
  TiposSanguineoNecessario: string[];
  Cidade: string;
  Status: string;
}

export interface FamiliarMember {
  email_doador: string;
  NomeFamiliar: string;
  Parentesco: string;
  TipoSanguineo: string;
  id: string;
}

export interface FamiliarMemberForm {
  email_doador: string;
  NomeFamiliar: string;
  Parentesco: string;
  TipoSanguineo: string;
}

interface FamiliarMemberData {
  email: string;
}

export interface GenericDelete {
  id: string;
  email_doador: string;
}

export function getCampaigns(): Promise<Campaign[]> {
  return api.get("/campanhas").then((response) => response.data);
}

export function postCampaign(campaign: CampaignForm): Promise<Campaign> {
  return api.post("/campanha", campaign).then((response) => {
    return response.data;
  });
}

export function getFamiliarMembers(
  data: FamiliarMemberData
): Promise<FamiliarMember[]> {
  console.log(data);
  return api.post("/familiares", data).then((response) => response.data);
}

export function postFamiliarMember(
  familiar: FamiliarMemberForm
): Promise<FamiliarMember> {
  return api.post("/familiar", familiar).then((response) => {
    return response.data;
  });
}

export function deleteFamiliarMember(data: GenericDelete): Promise<void> {
  return api
    .delete("/familiar", {
      data: data,
    })
    .then((response) => {
      return response.data;
    });
}
