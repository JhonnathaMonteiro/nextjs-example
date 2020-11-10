import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  useEffect(() => {
    const callRegister = async () => {
      axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
      const response = await axios({
        method: 'post',
        url: 'https://hash.immunie.org/hash-register',
        data: {
          userData: "USERDAsTA",
          userVaccines: ["AA", "BBC"],
          lastAppliedDate: Date.now().toString(),
        }
      });
      console.log("THE RESPONSE FROM BLCK:" , response.data);
    };

    callRegister();

  }, [])


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