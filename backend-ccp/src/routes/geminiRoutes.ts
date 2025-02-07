import { Router } from 'express';
import { generateMotivationalPhrases } from '../services/geminiService';
import { getMotivationalPhrases, saveMotivationalPhrases } from '../services/firebaseService';

const router = Router();

router.post('/phrases', async (req, res) => {
  try {
    const phrases = await generateMotivationalPhrases();
    await saveMotivationalPhrases(phrases);
    res.status(200).json({ message: 'Phrases saved successfully!', phrases });
  } catch (error) {
    console.log('Error saving phrases:', error);
    res.status(500).json({ error: 'Failed to save phrases.' });
  }
});

router.get('/phrases', async (req, res) => {
  try {
    const phrases = await getMotivationalPhrases();
    res.json({ phrases });
  } catch (error) {
    console.log('Error generating phrases:', error);
    res.status(500).json({ error: 'Failed to retrieve phrases.' });
  }
});

router.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

export default router;
