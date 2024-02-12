const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());

app.get('/', (request, response) => {
    response.json({
        message: 'This is link shortner'
    });
});

app.listen(port, () => {
    console.log(`App is listening on port : ${port}`);
});