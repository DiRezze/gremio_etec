import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {Calendar, HeadphonesIcon, LucideIcon, Medal, SpeechIcon, Star, Users, WalletIcon} from "lucide-react";

interface cargo {
    title: string;
    icon: LucideIcon;
}

const cargos: Array<cargo> = [
    {title: "Presidência", icon: Star},
    {title: "Comunicação", icon: SpeechIcon},
    {title: "Cultural", icon: HeadphonesIcon},
    {title: "Desportivo", icon: Medal},
    {title: "Eventos", icon: Calendar},
    {title: "Financeiro", icon: WalletIcon},
    {title: "Relações Sociais", icon: Users},
]

export const CarrosselCargos = () => {
    return(
        <section className="flex items-center flex-col">
            <h2 className="text-2xl font-bold mb-2 self-start">Conheça os cargos!</h2>
            <hr className="border-green-500 border-2 self-start w-1/6"/>
            <Carousel
                className="py-4 w-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent className="-ml-2">
                    {cargos.map((cargo, i) => {
                        const Icon = cargo.icon;
                        return (
                            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 h-72 pl-4 cursor-pointer">
                                <div className="rounded-2xl shadow-md p-6 flex flex-col items-center  justify-center h-full text-center border border-accent">
                                    <div className=" mb-4 bg-green-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                        <Icon className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-primary">
                                        {cargo.title}
                                    </h3>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </section>
    )
}