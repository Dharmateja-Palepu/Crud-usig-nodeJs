const express = require('express')
const router = express.Router() // for routing
const Alien = require('../models/alien') //loading the model file

//crud implemtation starts
router.get('/', async(req,res) => {  //  used for function chaing or non-blocking
    try{
           const aliens = await Alien.find() //waits until async function returns  result like function chaining
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const alien = await Alien.findById(req.params.id)
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => { 
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        selct: req.body.selct
    })

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id) 
        alien.selct = req.body.selct
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id) 
        alien.selct = req.body.selct
        const a1 = await alien.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router
 