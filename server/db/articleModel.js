const db = require('./db');

const getAllArticles = (callback) => {
    const query = 'SELECT * FROM Articles';
    db.query(query, (error, results) => {
        if (error) {
            return callback(error, null);
        }
        return callback(null, results);
    });
};

const getArticleById = (id, callback) => {
    const query = 'SELECT * FROM Articles WHERE id = ?';
    db.query(query, [id], (error, results) => {
        if (error) {
            return callback(error, null);
        }
        return callback(null, results[0]);
    });
};

module.exports = {
    getAllArticles,
    getArticleById
};