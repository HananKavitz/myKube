import express = require('express');
import logger from 'winston';
import morgan from 'morgan';
const path = require('path');
const app = express();
const port:number = 5000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname ,'/../frontend/build')));


app.get('/api/me', (request:express.Request, response:express.Response) => {
	response.send('{"name": "Arthur Dent", "location": "Earth"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request:express.Request, response:express.Response) => {
	response.send('[{"yearFrom": "2010", "yearTo": "2018", "place": "BBC Radio", "comment": "Was doing stuff"}, {"yearFrom": "2009", "yearTo": "2010", "place": "The coffee shop", "comment": "Making coffee"}]');
	logger.info('Responded to GET request on /api/work')
});


app.listen(port, (err:Error) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`); 
});
