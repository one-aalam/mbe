import { createServer } from 'http';
import * as dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT;

const server = createServer({}, (req, res) => {
  // For the sake of simplicity, we can do this
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Max-Age', 30 * 24 * 60 * 60); // 30 days

  res.end(`Hello, world!`);
});

server.listen(SERVER_PORT, () => console.log(`Server has started on port ${SERVER_PORT}`));
