import { Logo } from "./Logo";

export function Header() {
  //py padding no eixo Y, se eu quiser utilizar 20px, no tailwind ficaria py-5
  return (
    //20 / 4 (padrão da web dos múltiplos de 4) = 5, teria fazer essa conta pois o tailwind trabalha com unidades relativas, rem.
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  );
}
