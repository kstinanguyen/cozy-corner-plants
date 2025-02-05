import { Request, Response } from 'express';
import { generateMotivationalPhrases } from '../services/geminiService';

export const getMotivationalPhrases = async (req: Request, res: Response): Promise<void> => {
    try {
        const phrases = await generateMotivationalPhrases();
        res.json({ message: "Motivational phrases generated successfully!", data: phrases });
    } catch (error) {
        console.error("Error generating motivational phrases:", error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};
