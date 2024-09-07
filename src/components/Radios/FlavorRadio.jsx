import React, { useState } from "react";
import PropTypes from "prop-types";
import { NotificationInfo } from "../Notifications/NotificationInfo";

export function FlavorRadio({ availableColors, onFlavorChance, initFlavor }) {
  const [selected, setSelected] = useState(initFlavor);

  const handleColorSelecionada = (event) => {
    const flavor = event.target.value;
    setSelected(flavor);
    onFlavorChance(flavor);
  };

  return (
    <div className="content-radio-colors">
      {availableColors && availableColors.length > 0 ? (
        <>
          <h5>Selecione uma garrafa de vinho:</h5>
          <div className="radio-group">
            {availableColors.map((color) => (
              <React.Fragment key={color}>
                <input
                  type="radio"
                  id={`radio-${color.toLowerCase().replace(/ /g, "-")}`}
                  name="color"
                  value={color}
                  checked={selected === color}
                  onChange={handleColorSelecionada}
                  required
                />
                <label
                  htmlFor={`radio-${color.toLowerCase().replace(/ /g, "-")}`}
                />
              </React.Fragment>
            ))}
          </div>
          <h6>* Sabor selecionado: {selected}</h6>
        </>
      ) : (
        <>
          <h6>Aprecie com moderação</h6>
          <NotificationInfo mensagemInfo="Produto destinado ao consumo por maiores de 18 Anos" />
        </>
      )}
    </div>
  );
}

FlavorRadio.propTypes = {
  availableColors: PropTypes.arrayOf(PropTypes.string),
  onFlavorChance: PropTypes.func.isRequired,
  initFlavor: PropTypes.string.isRequired,
};
