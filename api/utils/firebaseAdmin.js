import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(
  readFileSync(new URL('../config/serviceAccountKey.json', import.meta.url))
);

const app = initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore(app);
export default db;