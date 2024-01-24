const express = require( 'express')
const router = express.Router()

// get
router.get( '/', (req, res) => {
    res.send( 'Hello there!')
    console.log( 'get')
})

// get(id)
router.get( '/:id', (req, res) => {
    res.send( 'Hello there! ' + req.params.id)
    console.log( 'get(id)')
})

// post
router.post( '/', (req, res) => {
    console.log( 'get')
})

// put
router.put( '/:id', (req, res) => {
    req.params.id
    console.log( 'get')
})

// delete
router.delete( '/:id', (req, res) => {
    req.params.id
    console.log( 'get')
})

module.exports = router