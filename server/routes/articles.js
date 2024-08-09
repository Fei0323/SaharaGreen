const express = require('express');
const router = express.Router();
const articleModel = require('../articleModel');

router.get('/', (req, res) => {
    articleModel.getAllArticles((error, results) => {
        if (error) {
            return res.status(500).json({ error: 'La requête de base de données a échoué' });
        }
        res.json(results);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    articleModel.getArticleById(id, (error, result) => {
        if (error) {
            return res.status(500).json({ error: 'La requête de base de données a échoué' })
        }
        res.json(result);
    });
});

module.exports = router;