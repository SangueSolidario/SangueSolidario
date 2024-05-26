import api from "./api";

export interface Campaign {
  id: string;
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
  Imagem: File | undefined;
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

export interface Doador {
  email: string;
  Nome: string;
  TipoSanguineo: string;
  dataNascimento: Date;
}

export interface DoadorPost {
  email: string;
  Nome: string;
}

export interface GenericDelete {
  id: string;
  email_doador: string;
}

export interface ParticipateCampaign {
  email: string;
  id: string;
}

export function getCampaigns(): Promise<Campaign[]> {
  return api
    .get("/campanhas", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => response.data);
}

export function postCampaign(campaign: CampaignForm): Promise<Campaign> {
  const formData = new FormData();
  formData.append("Nome", campaign.Nome);
  formData.append("DataInicio", campaign.DataInicio);
  formData.append("DataFim", campaign.DataFim);
  formData.append("Descricao", campaign.Descricao);
  formData.append("Coordenadas", JSON.stringify(campaign.Coordenadas));
  campaign.TiposSanguineoNecessario.forEach((tipo) => {
    formData.append("TiposSanguineoNecessario[]", tipo);
  });

  formData.append("Cidade", campaign.Cidade);
  formData.append("Status", campaign.Status);
  formData.append("Imagem", campaign.Imagem!);
  return api
    .post("/campanha", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getFamiliarMembers(
  data: FamiliarMemberData
): Promise<FamiliarMember[]> {
  return api
    .post("/familiares", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return [];
    });
}

export function postFamiliarMember(
  familiar: FamiliarMemberForm
): Promise<FamiliarMember> {
  return api
    .post("/familiar", familiar, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function postDoador(data: DoadorPost): Promise<void> {
  return api
    .post("/doador", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function postDoadorForm(data: Doador): Promise<void> {
  return api
    .post("/doador", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function postParticipar(data: ParticipateCampaign): Promise<void> {
  return api
    .post("/doador/campanha", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function deleteFamiliarMember(data: GenericDelete): Promise<void> {
  return api
    .delete("/familiar", {
      data: data,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      return response.data;
    });
}
