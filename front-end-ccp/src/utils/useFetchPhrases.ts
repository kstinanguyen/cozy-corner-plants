import { useState, useEffect } from 'react';

export const useFetchPhrases = () => {
  const [phrases, setPhrases] = useState<string[]>([]);

  useEffect(() => {
    const loadPhrases = async () => {
      const fetchedPhrases = await fetchMotivationalPhrases();
      setPhrases(fetchedPhrases);
    };
    loadPhrases();
  }, []);

  return phrases;
};

async function fetchMotivationalPhrases(): Promise<string[]> {
  try {
    const response = await fetch('http://localhost:3000/api/phrases');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.phrases.map((phraseObj: { phrase: string }) => phraseObj.phrase);
  } catch (error) {
    console.error('Failed to fetch motivational phrases:', error);
    return [];
  }
}
