// firebaseService.ts
import admin from '../config/firebaseConfig';

export const saveMotivationalPhrases = async (phrases: { id: number; phrase: string }[]) => {
  try {
    const db = admin.database();
    const ref = db.ref('motivational_phrases');
    await ref.set(phrases);
    console.log("Motivational phrases saved to Firebase.");
  } catch (error) {
    console.error("Error saving to Firebase:", error);
    throw error;
  }
};

export const getMotivationalPhrases = async () => {
  try {
    const db = admin.database();
    const ref = db.ref('motivational_phrases');
    const snapshot = await ref.once('value');
    return snapshot.val() || [];
  } catch (error) {
    console.error("Error retrieving phrases from Firebase:", error);
    return [];
  }
};

export const cleanupFirebase = async () => {
  try {
    await admin.app().delete();
    console.log('Firebase connection closed.');
  } catch (error) {
    console.error('Error during Firebase cleanup:', error);
  }
};
