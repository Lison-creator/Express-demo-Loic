const express = require("express")
const router = express.Router()

/* Demande localhost:3000/api/users/ ===> GET all users*/
router.get("/", (req, res) => {
    /* res.json : renvoie du status code 200 et indique du json */
    res.json({
        message: 'Liste de tous les users'
    })
})

/* Demande localhost:3000/api/users/ ===> GET one user by id */
router.get("/", (req, res) => {
    res.json({
        message: 'Un seul user'
    })
})

/* Poste une ressource  localhost:3000/api/users/ ===> POST one user */
router.post("/", (req, res) => {
    res.json({
        message: 'Création d\'un user'
    })
})

/*   localhost:3000/api/users/:id ===> PUT one user (modifier)) */
router.put("/", (req, res) => {
    res.json({
        message: 'Modification d\'un user'
    })
})

/* Supprime une ressource localhost:3000/api/users/:id ===> DELETE one user by id */
router.delete("/", (req, res) => {
    res.json({
        message: 'Suppression d\'un user'
    })
})

module.exports = router