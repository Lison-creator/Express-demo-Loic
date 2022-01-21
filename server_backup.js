const express = require("express")
const app = express()
const port = process.env.PORT || 3000 /* Si le port est connu (exemple, par un hébergeur comme HEROKU), on déploit su le port, sinon sur le server 3000 */

/* 
Users (on veut récupérer des Utilisateurs en données JSOn sur notre page web)
    localhost:3000/api/users/          ===> GET all users
    localhost:3000/api/users/:id       ===> GET one user by id
    localhost:3000/api/users/          ===> POST one user 
    localhost:3000/api/users/:id       ===> PUT one user (modifier))
    localhost:3000/api/users/:id       ===> DELETE one user by id
    

    CRUD (Create Read Update Delete) : 5 urls 
    CRUD (Insert into, Select, Update, Delete) 
*/

/* Demande localhost:3000/api/users/ ===> GET all users*/
app.get("/api/users", (req, res) => {
    /* res.json : renvoie du status code 200 et indique du json */
    res.json({
        message: 'Liste de tous les users'
    })
})

/* Demande localhost:3000/api/users/ ===> GET one user by id */
app.get("/api/users/:id", (req, res) => {
    res.json({
        message: 'Un seul user'
    })
})

/* Poste une ressource  localhost:3000/api/users/ ===> POST one user */
app.post("/api/users", (req, res) => {
    res.json({
        message: 'Création d\'un user'
    })
})

/*   localhost:3000/api/users/:id ===> PUT one user (modifier)) */
app.put("/api/users/:id", (req, res) => {
    res.json({
        message: 'Modification d\'un user'
    })
})

/* Supprime une ressource localhost:3000/api/users/:id ===> DELETE one user by id */
app.delete("/api/users/:id", (req, res) => {
    res.json({
        message: 'Suppression d\'un user'
    })
})




app.listen(port, console.log(` Le server écoute sur le port ${port}`))