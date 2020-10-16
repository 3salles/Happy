import { ErrorRequestHandler } from 'express';

const erroHandler: ErrorRequestHandler = (error, request, response, next) => {
  console.error(error);

  return response.status(500).json({ message: 'Internal server error' });
};

export default erroHandler;