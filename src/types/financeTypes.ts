export enum FinanceStatus {
    // para despesas
    Pendente = "Pendente",
    Paga = "Paga",
    // para captação de recursos
    Doada = "Doada",
    Arrecadada =  "Arrecadada",
}

export interface Despesa {
    date: Date;
    title: string;
    description: string | null;
    value: number;
    status: FinanceStatus | null;
}

export type Mes = {
    title: string;
    despesas: Despesa[];
}
