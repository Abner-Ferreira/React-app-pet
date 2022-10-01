import React from 'react'
import { FiX as DEL } from 'react-icons/fi'
import {DivPet, DivDadosPet, DivDadosPet2,DivDadosPetH1,DivDadosDonoPet,DivDadosDonoPet2,Img,DivDadosObservacao} from '../style/styled'

export default function Pet(props) {
    return (
        <div>
            <DivPet>
                <DivDadosPetH1>
                    <h1>{props.pet.titulo}</h1>
                </DivDadosPetH1>
                <Img src={props.pet.imagem} alt="imagem do pet"/>
                <DivDadosPet>
                    <DivDadosPet2><p>{props.pet.idade} anos</p></DivDadosPet2>
                    <DivDadosPet2><p>Da raça {props.pet.raca}</p></DivDadosPet2>
                    <DivDadosPet2><p>De porte {props.pet.tamanho}</p></DivDadosPet2>
                </DivDadosPet>
                <br/>
                <DivDadosDonoPet>
                    <DivDadosDonoPet2><p>Dono<br /> {props.pet.dono}</p></DivDadosDonoPet2>
                    <DivDadosDonoPet2><p>Tel: {props.pet.telefone}</p></DivDadosDonoPet2>    
                </DivDadosDonoPet>   
                <DivDadosObservacao>
                    <p>Observação: <br /> {props.pet.observacao}</p>
                </DivDadosObservacao>
                <button onClick={props.remove}><DEL/></button>
            </DivPet>
        </div>
    )
}