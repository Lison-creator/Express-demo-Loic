const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const usersRouter = require("./router/users.router")
app.use("/api/users", usersRouter) /* Redirige les requêtes sur UserRouter si elles commencent par "/api/users" */

/* get all (X3) */

app.get("/api/products/", (req, res) => {
    res.json({
        message: 'Liste de tous les produits'
    })
})
app.get("/api/prices/", (req, res) => {
    res.json({
        message: 'Liste de tous les prix'
    })
})
app.get("/api/categories/", (req, res) => {
    res.json({
        message: 'Liste de toutes les catégories'
    })
})

/* Get one by id */

app.get("/api/products/:id", (req, res) => {
    res.json({
        message: 'Un produit'
    })
})
app.get("/api/categories/:id", (req, res) => {
    res.json({
        message: 'Une catégorie'
    })
})
app.get("/api/prices/:idProd", (req, res) => {
    res.json({
        message: 'Un prix pour un produit'
    })
})

/* Post */

app.post("/api/prices/", (req, res) => {
    res.json({
        message: 'Création d\'un prix'
    })
})
app.post("/api/categories/", (req, res) => {
    res.json({
        message: 'Création d\'une catégorie'
    })
})
app.post("/api/products/", (req, res) => {
    res.json({
        message: 'Création d\'un produit'
    })
})

/* Put */

app.put("/api/prices/:id", (req, res) => {
    res.json({
        message: 'Création d\'un prix'
    })
})
app.put("/api/categories/:idProd", (req, res) => {
    res.json({
        message: 'Création d\'une catégorie'
    })
})
app.put("/api/products/:id", (req, res) => {
    res.json({
        message: 'Création d\'un produit'
    })
})

/* Delete */

app.delete("/api/prices/:idProd", (req, res) => {
    res.json({
        message: 'Suppression d\'un prix'
    })
})
app.delete("/api/categories/:idProd", (req, res) => {
    res.json({
        message: 'Suppression d\'une catégorie'
    })
})
app.delete("/api/products/:id", (req, res) => {
    res.json({
        message: 'Suppression d\'un produit'
    })
})

app.listen(port, console.log(` Le server écoute sur le port ${port}`))