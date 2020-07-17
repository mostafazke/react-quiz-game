import { shuffleArray } from './utils';

export interface Question {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    answers: string[];

}

interface Response {
    response_code: number;
    results: Question[];
}




export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuestions = async (amount: number, difficulty: Difficulty): Promise<Question[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data: Response = await (await fetch(endpoint)).json();
    return data.results.map(q => ({
        ...q,
        answers: shuffleArray([...q.incorrect_answers, q.correct_answer])
    }));
}