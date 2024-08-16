import { ArrowRight, MessageCircleMore } from "lucide-react";

import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import { Label } from "./_components/ui/label";
import { Switch } from "./_components/ui/switch";

export default function Home() {
  return (
    <main className="mx-auto mb-auto w-full max-w-7xl">
      <div className="grid gap-2 px-9 lg:grid-cols-2 lg:grid-rows-2 lg:gap-0">
        <div className="w-full lg:row-span-1">
          <div className="flex flex-col items-start justify-center gap-2 text-wrap">
            <h4 className="font-robotoMono font-semibold tracking-tight">
              ONLINE - GRATUITO
            </h4>
            <h1 className="scroll-m-20 font-sora text-4xl font-extrabold uppercase leading-tight tracking-tight lg:max-w-lg lg:text-7xl lg:leading-snug">
              Sorteador de números
            </h1>
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col gap-10 lg:row-span-2 lg:ml-24 lg:mt-16 lg:w-[482px]">
          {/* Informacoes */}
          <div className="flex flex-col gap-1">
            <h4 className="w-full font-robotoMono text-xl font-bold uppercase leading-normal lg:row-span-2">
              Quero sortear
            </h4>
            <span className="font-robotoFlex text-sm leading-normal">
              Defina o intervalo e a quantidade de números, clique em
              &quot;Sortear&quot; e veja os resultados na tela. É rápido e
              fácil!
            </span>
          </div>

          {/* Numeros */}
          <div className="flex flex-col gap-3 lg:mt-0">
            <div className="flex gap-3 lg:w-80">
              <div className="flex w-full max-w-sm flex-col items-center justify-center gap-1.5">
                <Label
                  htmlFor="numero"
                  className="font-robotoFlex text-base font-bold uppercase">
                  Números
                </Label>
                <Input
                  id="numero"
                  type="number"
                  className="h-16 items-center justify-center bg-secondary font-sora text-2xl font-bold"
                />
              </div>
              <div className="flex w-full max-w-sm flex-col items-center justify-center gap-1.5">
                <Label
                  htmlFor="de"
                  className="font-robotoFlex text-base font-bold uppercase">
                  De
                </Label>
                <Input
                  id="de"
                  type="number"
                  className="h-16 items-center justify-center bg-secondary font-sora text-2xl font-bold"
                />
              </div>
              <div className="flex w-full max-w-sm flex-col items-center justify-center gap-1.5">
                <Label
                  htmlFor="ate"
                  className="font-robotoFlex text-base font-bold uppercase">
                  Até
                </Label>
                <Input
                  id="ate"
                  type="number"
                  className="h-16 items-center justify-center bg-secondary font-sora text-2xl font-bold"
                />
              </div>
            </div>

            {/* checkbox */}
            <div className="flex w-full items-center gap-2">
              <Switch size="lg" id="repetir" />
              <Label htmlFor="repetir" className="font-sans font-normal">
                Não repetir números
              </Label>
            </div>
          </div>

          {/* Button */}
          <div className="w-full">
            <Button className="h-14 w-full gap-2 font-robotoFlex text-base font-bold uppercase leading-normal transition-colors dark:bg-[#24222E] dark:text-white dark:hover:bg-[#2c283a]">
              Sortear
              <ArrowRight className="size-6" />
            </Button>
          </div>
        </div>
        {/* Informacoes */}
        <div className="mt-20 flex flex-col gap-9 lg:mt-10 lg:w-96">
          <div className="flex gap-2">
            <MessageCircleMore className="size-5 text-purple-400" />
            <div className="flex flex-1 flex-col gap-1">
              <h4 className="font-robotoFlex text-sm font-bold leading-normal text-purple-400">
                Como funciona o sorteador de números?
              </h4>
              <p className="font-robotoFlex text-xs font-normal leading-normal">
                O sorteador utiliza um algoritmo de geração aleatória para criar
                números dentro do intervalo especificado pelo usuário.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <MessageCircleMore className="size-5 text-purple-400" />
            <div className="flex flex-1 flex-col gap-1">
              <h4 className="font-robotoFlex text-sm font-bold leading-normal text-purple-400">
                Posso escolher o intervalo dos números?
              </h4>
              <p className="font-robotoFlex text-xs font-normal leading-normal">
                Sim, você pode definir os valores mínimo e máximo para o
                intervalo dos números sorteados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
