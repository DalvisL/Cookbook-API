const router = require('express').Router();

// const Recipes = require('./recipes-model.js');

router.get('*', (req, res) => {
    res.json({
        message: 'Welcome to the Recipes API',
    });
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: 'Something went wrong in the recipes router',
        stack: err.stack,
    });
});

module.exports = router;