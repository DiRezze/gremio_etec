"use client"

import * as React from "react"
import {Link, useLocation} from "react-router-dom"
import {cn} from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {ChevronUp, GraduationCap, Menu, Moon, School} from "lucide-react";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {useTheme} from "@/providers/theme-provider.tsx";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Finaceiro",
        href: "/financeiro",
        description:
            "Confira os gastos e levantamento de verba do grêmio",
    },
    {
        title: "Notícias",
        href: "/noticias",
        description:
            "Confira em primeira mão as novidades do grêmio",
    },
    {
        title: "Propostas",
        href: "/propostas",
        description:
            "Saiba tudo que vem por aí",
    }
]

function Navbar() {

    const {toggleTheme} = useTheme();

    const location = useLocation();
    const currentLocation = location.pathname;


    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 800);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNavLinkClick = () => {
        setMenuOpen(false)
    }

    if (currentLocation == "/links") return null

    return (
        <nav
            className="flex-row align-items-center flex justify-content-between shadow p-4 top-0 z-50 sticky bg-background w-full">
            <div className="items-center flex mx-8 gap-2">
                <GraduationCap size={32}/>
                <h1 className="md:text-2xl text-lg font-bold">Grêmio Control Z</h1>
            </div>

            {isMobile ? (
                <button
                    className="ml-auto text-neutral-400 focus:outline-none"
                    onClick={() => setMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <ChevronUp size={28}/> : <Menu size={28}/>}
                </button>
            ) : (
                <>
                    <NavigationMenu className="p-2 w-full">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link to="/">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Início
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Calendário</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/calendario/tudo"
                                                >
                                                    <School className="h-6 w-6"/>
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        Geral
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Calendário completo com eventos da Etec MAM, vestibulares,
                                                        olimpíadas e mais!
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="/calendario/internos" title="Eventos">
                                            Eventos internos da Etec MAM
                                        </ListItem>
                                        <ListItem href="/calendario/olimpiadas" title="Olimpíadas">
                                            Competições do conhecimento em que a escola está inscrita
                                        </ListItem>
                                        <ListItem href="/calendario/vestibulares" title="Vestibulares">
                                            Exames de ingresso no Ensino Superior
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Transparência</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[400px] ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="/links">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Redes sociais
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>

                    </NavigationMenu>
                    <Button onClick={toggleTheme} variant="outline" className="self-center mr-4 ml-auto rounded-full">
                        <Moon/>
                    </Button>
                </>
            )}
            {isMobile && isMenuOpen && (
                <div
                    className="bg-background shadow-md p-4 absolute top-16 left-0 w-full flex flex-col items-center space-y-4">
                    <Link
                        to="/"
                        className="w-full"
                    >
                        <Button
                            onClick={handleNavLinkClick}
                            variant="ghost"
                            className="font-semibold w-full"
                        >
                            Início
                        </Button>
                    </Link>
                    <Link
                        to="/calendario/tudo"
                        className="w-full"
                    >
                        <Button
                            onClick={handleNavLinkClick}
                            variant="ghost"
                            className="font-semibold w-full"
                        >
                            Calendário
                        </Button>
                    </Link>
                    <Link
                        to="/financeiro"
                        className="w-full"
                    >
                        <Button
                            onClick={handleNavLinkClick}
                            variant="ghost"
                            className="font-semibold w-full"
                        >
                            Transparência - Financeiro
                        </Button>
                    </Link> <Link
                    to="/propostas"
                    className="w-full"
                >
                    <Button
                        onClick={handleNavLinkClick}
                        variant="ghost"
                        className="font-semibold w-full"
                    >
                        Propostas
                    </Button>
                </Link>
                    <Link
                        to="/links"
                        className="w-full"
                    >
                        <Button
                            onClick={handleNavLinkClick}
                            variant="ghost"
                            className="font-semibold w-full"
                        >
                            Redes sociais
                        </Button>
                    </Link>

                </div>
            )}
        </nav>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Navbar;
