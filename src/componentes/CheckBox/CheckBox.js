import React from "react";

function CheckBox({ nome, definirArea }) {
  const handleChange = (event) => {
    const { checked, value } = event.target;
    definirArea(value, checked);
  };

  return (
    <li className="list-item">
      <label>
        <input type="checkbox" value={nome} onChange={handleChange} />
        {nome}
      </label>
    </li>
  );
}

export default CheckBox;
