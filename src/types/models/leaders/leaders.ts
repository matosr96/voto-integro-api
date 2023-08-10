export interface Leader {
  uuid: string;
  user: string;
  name: string;
  lastname: string;
  identification: number;
  phone: number;
  zone: string;
  status: string;
}

export type PartialLeader = Partial<Leader>;
