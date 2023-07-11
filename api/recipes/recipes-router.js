const router = require('express').Router();

const Recipes = require('./recipes-model.js');

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => { // eslint-disable-line
            res.status(500).json({ message: 'Failed to get recipes' });
        });
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: 'Something went wrong in the recipes router',
        stack: err.stack,
    });
});

module.exports = router;