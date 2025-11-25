import { config, DotenvConfigOptions } from 'dotenv';

const dotenvConfig = config as (options: DotenvConfigOptions) => void;

export const NODE_ENV = process.env.NODE_ENV || 'development';
const envFile = `.env.${NODE_ENV}`;
dotenvConfig({ path: envFile });

export const PORT = process.env.PORT || 3000;

export const DATABASE_URL = process.env.DATABASE_URL;

export const FRONTEND_URL = process.env.FRONTEND_URL;
