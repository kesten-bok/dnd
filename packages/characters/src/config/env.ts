import { config } from 'dotenv';

config();

const ENVIRONMENT = {
  PORT: process.env.APPLICATION_PORT ?? 3000,
  MONGO_URI: process.env.MONGO_URI ?? '',
} as const;

export default ENVIRONMENT;
