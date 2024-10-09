import React from 'react';

function SubmitButton({ handleSubmit }) {
  return (
    <button onClick={handleSubmit}>
      Enviar
    </button>
  );
}

export default SubmitButton;
