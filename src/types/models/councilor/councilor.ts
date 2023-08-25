export interface Councilor {
  uuid: string;
  user: string;
  name: string;
  lastname: string;
  identification: number;
  phone: number;
  status: string;
}

export type PartialCouncilor = Partial<Councilor>;
