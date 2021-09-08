import express from 'express';
import { json } from 'body-parser';
import routes from './routes/index.routes';

require('dotenv-safe').config();

const app = express();
app.use(json());
app.use(routes);

const port = 4000;
app.get('/', (req, res) => {
  res.send({ success: true, message: 'API Is Online' });
});
app.listen(process.env.PORT || port, () => {
  console.info(`Server is Online\n PORT: ${process.env.PORT || port}`);
});
