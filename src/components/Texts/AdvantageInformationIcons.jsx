import { AiFillLock } from "react-icons/ai";
import { GiHandTruck } from "react-icons/gi";

export function AdvantageInformationIcons() {
  return (
    <div id="extra-vantagens">
      <div id="compra-segura">
        <AiFillLock />
        <span>Compra segura.</span>
      </div>
      <div id="entrega-rapidez">
        <GiHandTruck />
        <span>Enviado pela On Wine, alta qualidade e rapidez na entrega.</span>
      </div>
    </div>
  );
}
