module.exports = {
    
    register: (req, res) => {
        const db = req.app.set('db')
        // console.log(req.body)
        db.register(req.body.username)
        .then((user) => res.status(200).send(user))
        .catch(() => res.status(500).send())
    },

    // login: (req, res) => {
    //     const db = req.app.set('db')
    //     console.log(req.body)
    //     db.login(req.body)
    //     .then(() => res.status(200).send())
    //     .catch(() => res.status(500).send())
    // },

    postProperties: (req, res) => {
        const {propertyName, propertyDesc, address, city, stateOf, zip, imageurl, loanAmount, monthlyMortgage, desiredRent} = req.body.state
        const db = req.app.set('db')
        console.log(req.body)

        db.postProperties(req.body.sessionID, propertyName, propertyDesc, address, city, stateOf, zip, imageurl, loanAmount, monthlyMortgage, desiredRent)
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    }

}