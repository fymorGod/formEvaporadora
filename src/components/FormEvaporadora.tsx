import { useState } from "react";
import { app } from '../api/app';
import "../styles/form.css";

export default function FormEvaporadora() {
    const [codigo, setCodigo] = useState(''); 
    const [marca, setMarca] = useState(''); 
    const [modelo, setModelo] = useState(''); 
    const [potencia, setPotencia] = useState(''); 

    const HandleSubmit = async () => {
        await app.post('/evaporadoras', {
            "codigo": codigo,
            "marca": marca,
            "modelo": modelo,
            "potencia": +potencia
        }).then(response => {
            console.log(response)
            window.alert("Enviado com sucesso!!!!")
        }).catch(err => {
            console.warn(err)
        })
    }

  return (
    <div className="container">
        <div className="formContainer">
            <h2>Registro Evaporadora</h2>
            <form onSubmit={HandleSubmit}>
                <input type="text" placeholder='codigo' onChange={e => setCodigo(e.target.value)}/>
                <input type="text" placeholder='marca' onChange={e => setMarca(e.target.value)}/>
                <input type="text" placeholder='modelo' onChange={e => setModelo(e.target.value)}/>
                <input type="text" placeholder='potencia' onChange={(e) => setPotencia(e.target.value)}/>

                <input type="submit" value="enviar"/>
            </form>
        </div>
    </div>
  )
}
