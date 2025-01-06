// export interface EnvConfig {
//   apiUrl?: string;
// }

// const envConfig: EnvConfig = (window as any).__env || {};

// export const environment = {
//   production: false,
//   apiUrl: envConfig.apiUrl || 'http://localhost:8000'
// };



import { loadEnvironmentConfig } from './environment.config';

const envConfig = loadEnvironmentConfig();

export const environment = {
  production: false,
  apiUrl: envConfig.apiUrl || 'http://localhost:8000', // Default to localhost if not provided
};
