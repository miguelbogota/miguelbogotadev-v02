// This file contains all the different environment variables to be use inside of the app.
// It's not needed to create a .env file since the dev configuration is here, the only
// configuration in the .env file is for production.

/** Returns the current environment. You could also access common validations. */
export const environment = Object.assign(() => process.env.NODE_ENV, {
  /** Returns true if the current environment is production. */
  isProdEnv: process.env.NODE_ENV === 'production',
  /** Returns true if the current environment is development. */
  isDevEnv: process.env.NODE_ENV === 'development',
});
