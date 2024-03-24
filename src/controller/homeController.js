const handleHelloWorld = (req, res) => {
    return res.render('home.ejs')
}

const handleUserPage = (req, res) => {
    const name = 'Bao'
    return res.render('user.ejs', { name })
}

module.exports = {
    handleHelloWorld,
    handleUserPage
}