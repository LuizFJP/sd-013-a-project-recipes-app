import React from 'react';
import { useSelector } from 'react-redux';

function DetailsInstructions() {
  const instructions = useSelector((state) => state.api.recipe.strInstructions);

  if (!instructions) return null;

  const instrucArray = instructions.split('\r\n'); // Splita as instruções nas quebras de linha;
  instrucArray.forEach((p, i) => { if (!p.endsWith('.')) instrucArray[i] = `${p}.`; }); // Adiciona ponto final (.) quando não tiver;
  return (
    <div className="details-instructions-container">
      <h3>Instructions</h3>
      <div className="details-instructions">
        {instrucArray.map((p, idx) => (
          <p key={ `${p[0]}${idx}` } data-testid="instructions">{p}</p>
        ))}
      </div>
    </div>
  );
}

export default DetailsInstructions;
