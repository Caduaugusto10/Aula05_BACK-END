import { Router } from "express"

import docesRoutes from "./doces.routes.js"
import filmeRoutes from "./filmes.routes.js"

const routes = Router()

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor ta fununciando"})
})

routes.use("/doces", docesRoutes)
routes.use("/filmes", filmeRoutes)

export default routes