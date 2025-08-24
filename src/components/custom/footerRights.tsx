import { meta } from "@/content/meta";

export default function FooterRights() {
    return (
        <footer className="my-2 text-center justify-end mt-auto mb-4 w-2/3">
            <hr className="w-full mx-4 my-4"/>
            <span className="text-neutral-400 text-center">Desenvolvido por @DiRezze no GitHub | {meta.version}</span>
        </footer>
    )
}
