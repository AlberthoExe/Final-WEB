import React, { useState } from 'react';
import Tarjeta from './Tarjeta';

function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setEmail] = useState('');
  const [intereses, setIntereses] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarTarjeta(true);
  };

  const volverAlFormulario = () => {
    setMostrarTarjeta(false);
  };

  return (
    <div className="container">
      <h1 className="mt-5">Tarjeta de Presentación</h1>
      {mostrarTarjeta ? (
        <Tarjeta
          nombre={nombre}
          apellido={apellido}
          telefono={telefono}
          edad={edad}
          email={email}
          intereses={intereses}
          mensaje={mensaje}
          onVolver={volverAlFormulario}
        />
      ) : (
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre:</label>
              <input required type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">Apellido:</label>
              <input required type="text" className="form-control" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">Teléfono:</label>
              <input required type="tel" className="form-control" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="edad" className="form-label">Edad:</label>
              <input required type="number" className="form-control" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input required type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="intereses" className="form-label">Intereses:</label>
          <textarea className="form-control" id="intereses" value={intereses} onChange={(e) => setIntereses(e.target.value)}></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje:</label>
          <textarea className="form-control" id="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Generar Tarjeta</button>
      </form>
      )}
    </div>
  );
}

export default App;
