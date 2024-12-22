import * as prismic from "@prismicio/client";

export const checkAnswer = async ({
  questionId,
  answer,
}: {
  questionId: number;
  answer: string;
}) => {
  try {
    const client = await prismic.createClient("ridoan");
    const response = await client.getAllByType("nsq_answer", {
      filters: [
        prismic.filter.at("my.nsq_answer.question_id", JSON.stringify(questionId))
      ],
    });
    return response[0].data.answer === String(answer);
  } catch (error) {
    throw error;
  }
};

export const getQuestions = async () => {
  try {
    const client = await prismic.createClient("ridoan");
    const response = await client.getSingle("nsq_questions");
    const parsedData = (response.data?.question_item || []).map((item: any) => ({
      ...item,
      answers: JSON.parse(item.answers), // a workaround to fix the un-match data type. Can't save an array in Prismic
    }))
    return parsedData;
  } catch (error) {
    throw error;
  }
};
