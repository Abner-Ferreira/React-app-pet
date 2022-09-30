import React from "react";

export default function FormCadastro(props) {
    return (
        <div>
        <form method="post" onSubmit={props.addPet}>
            <div>
                <label>Nome do Pet</label>
                <input type="text" name="titulo" value={props.pet.titulo} onChange={props.digit}/>
            </div>
            <div>
                <label>Idade do Pet</label>
                <input type="text" name="idade" value={props.pet.idade} onChange={props.digit}/>
            </div>
            <div>
                <label>Raça do Pet</label>
                <input type="text" name="raca" value={props.pet.raca} onChange={props.digit}/>
            </div>
            <div>
                <label>Tamanho do Pet</label>
                <select name="tamanho" onChange={props.digit}>
                    <option value="Não preenchido">--Escolha o porte do pet--</option>
                    <option value="Pequeno">Pequeno</option>
                    <option value="Médio">Médio</option>
                    <option value="Grande">Grande</option>
                </select>
            </div>
        </form>
    </div>
    );
    }