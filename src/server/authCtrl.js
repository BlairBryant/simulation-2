module.exports = {
    register: (req, res, next) => {
        console.log(req.body)
        console.log(req.session.user.id)

        if(req.body.username) {
            req.session.user.username = req.body.username
            req.session.user.id = req.body.id
            res.status(200).send(req.session.user)
        } else {
            res.status(500).send('did not set up session')
        }
    },

    postListing: (req, res, next) => {
        delete req.body.username
        delete req.body.password
        // console.log(req.body)
        req.session.user.home.push(req.body)
        // console.log(req.session.user)


        // const {propertyName, propertyDesc, address, city, stateOf, zip, imageurl, loanAmount, monthlyMortgage, desiredRent} = req.body
        // const {session} = req     
        // session.propertyName = propertyName
        // session.propertyDesc = propertyDesc
        // session.address = address
        // session.city = city
        // session.stateOf = stateOf
        // session.zip = zip
        // session.imageurl = imageurl
        // session.loanAmount = loanAmount
        // session.monthlyMortgage = monthlyMortgage
        // session.desiredRent = desiredRent

        

        res.status(200).send(req.session.user)
    }
    
}