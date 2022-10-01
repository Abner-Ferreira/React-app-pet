import styled from 'styled-components'

export const DivPet = styled.div`
    background-color : #B8860B;
    border: solid 3px #333;
    box-shadow: 5px 5px 5px #333;
    padding: 10px;
    align-items: center;
    text-align: center;
    width: 400px;
    height: fit-content;
    margin: 20px;
    display: inline-table;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
export const DivCadastro = styled.div`
    width:auto;
    background-color:#fff1f3 ;
    display: flexbox;
    flex-wrap: wrap;
`
export const DivFormularios = styled.div`
    width: 93%;
    height: fit-content;
    background-color: #FFE4B5;
    border: solid 1px #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    margin: 5px;
    display: inline-table;
    border-radius: 10px;

`
export const DivFormulario= styled.div`
    display: flex;
    flex-direction: column;
`
export const Img= styled.img`
    object-fit: contain;
    border:black double 5px;
    min-width: 250px;
    max-width:350px;
    margin-left: 20px;
    margin-right: 20px;
    min-height: 200px;
    max-height: 250px;
`
export const DivDadosPet = styled.div`
    display: flexbox;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
`