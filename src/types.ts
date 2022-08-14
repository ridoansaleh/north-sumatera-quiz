export interface IQuestion {
  image: string;
  image_source: string;
  question: string;
  answers: Array<string>;
}

export interface IQuestionTable extends IQuestion {
  id: number;
}

export interface IQuestionUI extends IQuestion {
  id: number;
  number: number;
}

export interface IAnswer {
  id: number;
  answer: string;
  status: boolean;
}

export interface IQuizReview {
  question: string
  answer: string
  status: boolean
}
