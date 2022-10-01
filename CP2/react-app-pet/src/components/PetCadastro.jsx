import React,{ useState } from "react"
import Pet from "./Pet"
import FormCadastro from "./FormCadastro"
import { DivCadastro } from "../style/styled"
import chewie from "../img/chewie.webp"

export default function PetCadastro() {
    const [pet, setPet] = useState([
        {
        "titulo": "Chewie",
        "idade": "Mais de 200",
        "raca": "Wookie",
        "tamanho": "Grande",
        "dono": "Han Solo",
        "telefone": "11911181977",
        "imagem": chewie,
        "observacao": "Ele é o copiloto da nave Millennium Falcon e o melhor amigo de Han Solo, e um alienígena da raça Wookiee, oriundo do planeta Kashyyyk."
        }
    ])
        const [pets, setPets] = useState({
            "titulo": "",
            "idade": "",
            "raca": "",
            "tamanho": "",
            "dono": "",
            "telefone": "",
            "imagem": "",
            "observacao": ""
        })