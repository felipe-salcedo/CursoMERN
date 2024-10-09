import React from 'react';
import './styles.css';

function DeleteButton({ handleDelete, index }) {
    return (
        <button className="delete-button" onClick={() => handleDelete(index)}>
            Deletar
        </button>
    );
}

export default DeleteButton;
