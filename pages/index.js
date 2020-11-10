import React, { useState } from 'react'

export default function Home() {
  return (
    <div>
      Home
      <Contador />
    </div>
  )
}

function Contador() {

  const [contador, setContador] = useState(1);

  const adicionarContador = () => {
    setContador(contador => contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
}