import express from 'express';

const PORT = process.env.PORT || 3002;
const APP = express();

APP.get('*', (request, response) => {
  response.send(' W E L C O M E');
});

APP.listen(PORT, () => console.log(`Server, http://localhost:${PORT}`));
