function notFound(req, res, next) {
    res.status(404)
    res.json({
        error: 'pagina non trovata',
        message: 'pagina non trovata'
    })
}
module.exports = notFound