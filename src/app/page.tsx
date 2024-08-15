import { Input } from "./_components/ui/input";
import { Label } from "./_components/ui/label";

export default function Home() {
  return (
    <main className="mx-auto h-full max-w-7xl bg-background">
      <div className="grid grid-rows-2 gap-2 px-9 lg:grid-cols-2 lg:gap-0	">
        <div className="w-full lg:row-span-1 lg:h-40">
          <div className="flex flex-col items-start justify-center gap-2 text-wrap">
            <h4 className="font-robotoMono font-semibold tracking-tight">
              ONLINE - GRATUITO
            </h4>
            <h1 className="scroll-m-20 font-sora text-4xl font-extrabold uppercase leading-tight tracking-tight lg:text-5xl">
              Sorteador de números
            </h1>
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col gap-10 lg:row-span-2">
          {/* Informacoes */}
          <div className="flex flex-col gap-1">
            <h4 className="w-full font-robotoMono text-xl font-bold uppercase leading-normal lg:row-span-2 lg:h-80">
              Quero sortear
            </h4>
            <span className="font-robotoFlex text-sm leading-normal">
              Defina o intervalo e a quantidade de números, clique em
              &quot;Sortear&quot; e veja os resultados na tela. É rápido e
              fácil!
            </span>
          </div>

          {/* Numeros */}
          <div className="flex gap-3">
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

          {/* Button */}
          <div className="">
            <h1>Hello World</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
