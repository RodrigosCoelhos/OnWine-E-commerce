import "/src/css/SlickSliderListProduct.css";
import { SliderComponent } from "./SliderComponent";
import { useProductContext } from "../../context/ProductContext";

export function SlickSliderListProduct() {
  const produtosFormatados = useProductContext();

  const lista = produtosFormatados;
  const tamanho = lista.length;
  const meio = Math.floor(tamanho / 2);
  const filteredProducts1 = lista.slice(0, meio);
  const filteredProducts2 = lista.slice(meio);

  return (
    <div className="slider-container" id="slider-container">
      <br />
      <h4>Vinhos para qualquer ocasião:</h4>
      <SliderComponent products={filteredProducts1} />
      <br />
      <br />
      <h4>Para aproveitar sozinho ou compartilhar:</h4>
      <SliderComponent products={filteredProducts2} />
    </div>
  );
}
