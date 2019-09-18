const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.status(200).send('Get users not implemented');
});

router.get('/:id', (req, res) =>{
    const id = req.params.id;

    res.status(200).send(`Get users not yet implemented, will fetch user ${id}`);
});


module.exports = router;