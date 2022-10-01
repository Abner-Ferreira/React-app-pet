import React from "react";
import { DivFormularios,DivFormulario } from '../style/styled'

export default function FormCadastro(props) {
    return (
        <div>
        <DivFormularios>
        <form method="post" onSubmit={props.addPet}>
            <DivFormulario>
                <label>Nome do Pet</label>
                <input type="text" name="titulo" value={props.pet.titulo} onChange={props.digit}/>
            </DivFormulario>
            <DivFormulario>
                <label>Idade do Pet</label>
                <input type="text" name="idade" value={props.pet.idade} onChange={props.digit}/>
            </DivFormulario>
            <DivFormulario>
                <label>Raça do Pet</label>
                <input type="text" name="raca" value={props.pet.raca} onChange={props.digit}/>
            </DivFormulario>
            <DivFormulario>
                <label>Tamanho do Pet</label>
                <select name="tamanho" onChange={props.digit}>
                    <option value="Não preenchido">--Escolha o porte do pet--</option>
                    <option value="Pequeno">Pequeno</option>
                    <option value="Médio">Médio</option>
                    <option value="Grande">Grande</option>
                </select>
            </DivFormulario>
            <DivFormulario>
                <label>Nome do Dono</label>
                <input type="text" name="dono" value={props.pet.dono} onChange={props.digit}/>
            </DivFormulario>
            <DivFormulario>
                <label>Telefone do Dono</label>
                <input type="tel" name="telefone" value={props.pet.telefone} onChange={props.digit}/>
            </DivFormulario>
            <DivFormulario>
                <label>Imagem do Pet</label>
                <input type="file" name="imagem" value={props.pet.imagem} onChange={props.digit}/>
            </DivFormulario>
            <DivFormulario>
                <label>Observações</label>
                <textarea name="observacao" cols="30" rows="10" value={props.pet.observacao} onChange={props.digit}></textarea><br/> 
            </DivFormulario>
            <DivFormulario>
                <button type="submit">Cadastrar</button>
            </DivFormulario>
        </form>
        </DivFormularios>
    </div>
    );
    }