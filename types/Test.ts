import { Answer } from "./Answer"

export type Test = {
    options: string[],
    testDescription: string,
    correctAnswer: Answer[],
}