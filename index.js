import express from 'express';
import data from './data/mock.json' with { type: 'json' };

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
  console.log(data);
});
