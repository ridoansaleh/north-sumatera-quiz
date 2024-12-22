import * as prismicT from "@prismicio/types";

export interface NsqAnswerDocument {
  id: string,
  uid: string | null,
  url: string | null,
  type: "nsq_answer",
  href: string,
  tags: string[],
  first_publication_date: `${number}-${number}-${number}T${number}:${number}:${number}+${number}`,
  last_publication_date: `${number}-${number}-${number}T${number}:${number}:${number}+${number}`,
  slugs: string[],
  linked_documents: string[],
  lang: string,
  alternate_languages: prismicT.AlternateLanguage<string, string>[],
  data: {
    question_id: string;
    answer: string;
  }
}

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
