import { Router } from "express"

const docesRoutes = Router()

const guloseimas = [
    {
        id: 1,
        nome: "Trufa",
        preco: 8.5,
    },
    {
        id: 2,
        nome: "Palha italiana",
        preco: 5.90
    },
    {
        id: 3,
        nome: "Bala de coco",
        preco: 1.5
    }
]

docesRoutes.get("/", (req, res) => {
    return res.status(200).send({guloseimas})
})

docesRoutes.post("/", (req, res) => {
    const {nome, preco} = req.body

    const novoDoce = {
        id: guloseimas.length + 1,
        nome: nome,
        preco: preco,
    }
    guloseimas.push(novoDoce)

    return res.status(201).send({guloseimas})
})

export default docesRoutes