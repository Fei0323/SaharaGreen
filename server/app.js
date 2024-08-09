const express = require('express');
const app = express();
const articlesRouter = require('./routes/article');

app.use(express.json());

app.use('/api/articles', articlesRouter);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});