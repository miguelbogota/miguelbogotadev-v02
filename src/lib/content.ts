import { doc, firestore, getDoc } from '@app-lib/firebase';

const docId = 'Oab3bfxAJMdAyUDL2hjI';

export type AppContent = {
  title: string;
};

export async function getContent() {
  const docRef = doc(firestore, 'content', docId);
  const docSnapshot = await getDoc(docRef);
  return docSnapshot.data() as AppContent;
}
