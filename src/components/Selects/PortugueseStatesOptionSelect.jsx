import { getportugalStates } from "../../utils/distritosPortugueses/states";
import PropTypes from "prop-types";

import { Select } from "antd";
export function PortugueseStatesOptionSelect({
  formData,
  handleStateSelectedChange,
}) {
  return (
    <div className="left">
      <Select
        required
        name="estado"
        size="middle"
        value={formData.estado}
        onChange={handleStateSelectedChange}
      >
        {getportugalStates.map((state) => (
          <Select.Option key={state} value={state}>
            {state}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
}

PortugueseStatesOptionSelect.propTypes = {
  formData: PropTypes.object.isRequired,
  handleStateSelectedChange: PropTypes.func.isRequired,
};
