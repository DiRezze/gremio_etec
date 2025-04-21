import {Button} from "@/components/ui/button.tsx";

export default function ErrorElement() {
    return (
        <div className="h-screen flex items-center justify-center flex-col">
            <h1 className="text-4xl font-bold">404 - Página não encontrada</h1>
            <p className="text-muted-foreground mt-2">Ops! Esse endpoint não existe.</p>
            <a href="/" className="text-primary mt-4 underline">
                <Button>
                    Voltar para o início
                </Button>
            </a>
        </div>
    )
}
