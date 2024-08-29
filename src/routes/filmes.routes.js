const filmesMarcantes = [
    {
        id: 1001,
        titulo: "Fast and Furious",
        genero: "Action",
        emCartaz: false
    },
    {
        id: 1002,
        titulo: "Procurando Nemo",
        genero: "Animação",
        emCartaz: false
    },
    {
        id: 1003,
        titulo: "It a Coisa",
        genero: "Terror",
        emCartaz: false
    }
]
app.get("/filmes", (req, res) => {
    return res.status(200).send({filmesMarcantes})
})