import {ReactNode} from "react";

export interface barsItem {
    id:number,
    delay:string
};

export interface dynamicWord {
    id:number,
    icon:ReactNode,
    word: string;
};