import express from 'express';

import { Transaction } from '@plutus/types'

const app = express();
const PORT = 5000;

app.get("/", (_, res) => {
  const trx = new Transaction({ category: 'Food & Drinks', date: new Date(), username: 'sanjay', title: 'Snacks', amount: 20 })
  res.send(JSON.stringify(trx)).status(200)
})

app.listen(PORT, () => {
  console.log('Server Started');
});
