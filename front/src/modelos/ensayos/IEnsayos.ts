export interface IRehearsal {
    id: number;
    date: string;
    startOn: string;
    endOn: string;
    assisted: string;
    notAssisted: string;
}


export interface IRehearsalForm {
    date: Date | string | undefined;
    startOn: string;
    endOn: string;
    assisted: string[]
    notAsisted: string[];
}