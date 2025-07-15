
export const financas: Mes[] = [
    {
        title: "Janeiro",
        despesas: [
            {
                date: new Date("2024-01-10"),
                title: "Compra de materiais",
                description: "Canetas e papéis",
                value: 120.50,
                status: FinanceStatus.Paga
            },
            {
                date: new Date("2024-01-15"),
                title: "Aluguel",
                description: null,
                value: 800,
                status: FinanceStatus.Pendente
            }
        ]
    },

];