import express from 'express';
import config from './config';
import serverRender from './renderers/server';
import { data } from './testData';

const app = express();

app.use(express.static('public'));

// seting template language for express
app.set('view engine', 'ejs');

// when go to / we render index
app.get('/', async (req, res) => {
  const initialContent = await serverRender();
  res.render('index', { ...initialContent });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});
