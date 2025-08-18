import {GithubIcon} from "lucide-react";

export function MainFooter() {
    return(
        <footer className="bg-background w-full mx-4 items-center flex flex-col p-4">
            <hr className="w-full mx-4 my-4"/>
            <div className="flex flex-row gap-2">
                <span className="text-neutral-400 text-center"><GithubIcon/> </span>
                <span className="text-neutral-400 text-center">Desenvolvido por DiRezze no GitHub | 2025</span>
            </div>
        </footer>
    )
}