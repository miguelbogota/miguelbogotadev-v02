// This file contains all the different environment variables to be use inside of the app.
// It's not needed to create a .env file since the dev configuration is here, the only
// configuration in the .env file is for production.

/** Returns the current environment. You could also access common validations. */
export const environment = Object.assign(() => process.env.NODE_ENV, {
  /** Returns true if the current environment is production. */
  isProdEnv: process.env.NODE_ENV === 'production',
  /** Returns true if the current environment is development. */
  isDevEnv: process.env.NODE_ENV === 'development',
  /** Returns true if the current environment is test. */
  isTestEnv: process.env.NODE_ENV === 'test',
  /** Returns true if the emulator is running. */
  isEmulatorRunning: process.env.FIRESTORE_EMULATOR_HOST !== undefined,
});

/** Object with the firebase configuration. */
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
