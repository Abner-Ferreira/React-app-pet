import React from 'react'
import { FiX as DEL } from 'react-icons/fi'

export default function Pet(props) {
    return (
        <div>
            <div>
                <h1>{props.pet.titulo}</h1>
            </div>
            <img src={props.pet.imagem} alt="imagem do pet"/>
            <div>
                <div><p>{props.pet.idade} anos</p></div>
                <div><p>Da raça {props.pet.raca}</p></div>
                <div><p>De porte {props.pet.tamanho}</p></div>
            </div>
            <br/>
            <div>
                <div><p>Dono<br /> {props.pet.dono}</p></div>
                <div><p>Tel: {props.pet.telefone}</p></div>    
            </div>   
            <div>
                <p>Observação: <br /> {props.pet.observacao}</p>
            </div>
            <button onClick={props.remove}><DEL/></button>
        </div>
    )
}