import { config } from 'dotenv';

config({ path: '../../.env' });

const ENVIRONMENT = {
  PORT: process.env.CHARACTERS_API_PORT ?? 3000,
  MONGO_URI: process.env.CHARACTERS_MONGO_URI ?? '',
} as const;

export default ENVIRONMENT;
