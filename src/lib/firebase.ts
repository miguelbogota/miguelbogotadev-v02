import { environment, firebaseConfig } from '@app-env';
import { initializeApp } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';

export {
  collection,
  doc,
  endAt,
  endBefore,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  startAt,
} from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

if (environment.isEmulatorRunning) {
  connectFirestoreEmulator(firestore, '127.0.0.1', 4008);
}
