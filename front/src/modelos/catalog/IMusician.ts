import { IWithLoading } from "./utils/ILoading";

export interface IMusician {
    id: number;
    name: string;
    lastName: string;
    surName: string;
}

export interface IMusicianCatalog extends IWithLoading {
    data?: IMusician[];
}