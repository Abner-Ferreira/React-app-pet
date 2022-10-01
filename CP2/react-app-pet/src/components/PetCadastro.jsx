import React, { useState } from "react"
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
    const addPet = (e) => {
        e.preventDefault()
        setPets({
            "titulo": "",
            "idade": "",
            "raca": "",
            "tamanho": "",
            "dono": "",
            "telefone": "",
            "imagem": "",
            "observacao": ""
        })
        setPet([...pet, pets])
    }

    const pega = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        if (name === "titulo") {
            setPets({ ...pets, [name]: value })
        }
        else if (name === "idade") {
            setPets({ ...pets, [name]: value })
        }
        else if (name === "raca") {
            setPets({ ...pets, [name]: value })
        }
        else if (name === "tamanho") {
            setPets({ ...pets, [name]: value })
        }
        else if (name === "dono") {
            setPets({ ...pets, [name]: value })
        }
        else if (name === "telefone") {
            setPets({ ...pets, [name]: value })
        }
        else if (name === "imagem") {
            setPets({ ...pets, [name]: value })
        }
        else if (name === "observacao") {
            setPets({ ...pets, [name]: value })
        }
    }

    function removePet(index) {
        setPet(pet.filter((_, i) => i !== index))
    }