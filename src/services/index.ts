import { supabase } from "../supabaseClient";

export const checkAnswer = async ({
  questionId,
  answer,
}: {
  questionId: number;
  answer: string;
}) => {
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

export const getData = async (table: string) => {
  try {
    const { data, error } = await supabase.from(table).select();
    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};

export const saveUsersVisit = async (userData: {
  created_at: string;
  city: string;
  country: string;
}) => {
  try {
    const { data, error } = await supabase
      .from("users_visit")
      .insert([{ ...userData }]);
    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserLocation = async () => {
  try {
    const res = await fetch("http://ip-api.com/json");
    if (!res.ok) {
      throw res.statusText;
    }
    return res.json();
  } catch (error) {
    throw error;
  }
};
