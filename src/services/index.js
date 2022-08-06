import { supabase } from "../supabaseClient";

export const checkAnswer = async ({ questionId, answer }) => {
  try {
    const { data, error } = await supabase
      .from("answers")
      .select("answer")
      .eq("question_id", questionId)
      .single();
    if (error) throw error;
    return data.answer === String(answer);
  } catch (error) {
    throw error;
  }
};

export const getData = async (table) => {
  try {
    let { data, error } = await supabase.from(table).select();
    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};
