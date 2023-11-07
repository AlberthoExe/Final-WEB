import React from 'react';

const Tarjeta = (props) => {
  const { nombre, apellido, telefono, edad, email, intereses, mensaje, onVolver } = props;

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Datos de la persona</h5>
        <p className="card-text"><strong>Nombre:</strong> {nombre} {apellido}</p>
        <p className="card-text"><strong>Teléfono:</strong> {telefono}</p>
        <p className="card-text"><strong>Edad:</strong> {edad}</p>
        <p className="card-text"><strong>Email:</strong> {email}</p>
        <p className="card-text"><strong>Intereses:</strong> {intereses}</p>
        <p className="card-text"><strong>Mensaje:</strong> {mensaje}</p>
        <button className="btn btn-secondary" onClick={onVolver}>Volver al Formulario</button>
      </div>
    </div>
  );
};

export default Tarjeta;
