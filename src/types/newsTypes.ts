import { ReactNode } from "react";

export type Noticia = {
    id: String;
    date: Date;
    title: String;
    author: String;
    content: ReactNode;
}