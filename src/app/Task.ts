// this is an interface 

export interface Task {
    //define what a task will include
    id?: number; // ? means optional in TS
    text:string;
    day:string;
    reminder: boolean;
}