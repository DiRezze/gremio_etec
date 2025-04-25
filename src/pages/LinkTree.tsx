import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FooterRights from "@/components/custom/footerRights.tsx";
import { links } from "@/content/links.ts";

export default function LinkTree() {
  return (
    <main className="flex flex-col items-center bg-background overflow-x-hidden">
      <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px]">
        <div className="mask-link-tree-img mask-to-transparent w-full h-full absolute top-0 left-0 z-0"></div>
        <div className="absolute mb-4 bottom-[32px] left-0 right-0 z-10">
          <h1 className="font-bold text-6xl text-center text-green-600">
            Control Z
          </h1>
          <h2 className="font-medium text-xl text-center">
            Grêmio Estudantil - Etec MAM
          </h2>
        </div>
      </div>

      {links.map((link, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-full mx-6 max-w-screen-sm p-6 space-y-4"
          >
            <Link
              to={link.href}
              className="block hover:scale-[1.01] transition-all"
            >
              <Card className="shadow rounded-2xl p-2 h-72 flex items-center justify-center">
                <CardContent className="items-center flex flex-col">
                  <link.icon
                    className="mx-2 my-4 h-20 w-20"
                    color={link.color}
                  />
                  <div className="text-center">
                    <h1 className="text-3xl font-semibold">{link.label}</h1>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        );
      })}
      <FooterRights />
    </main>
  );
}
