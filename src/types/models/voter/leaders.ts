export interface Voter {
  uuid: string;
  user: string;
  name: string;
  lastname: string;
  identification: number;
  phone: number;
  zone: string;
  leader: string;
  status: string;
}

export type PartialVoter = Partial<Voter>;
