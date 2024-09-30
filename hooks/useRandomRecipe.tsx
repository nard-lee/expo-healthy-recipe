import { supabase } from "@/database/supabase";

interface RecipeData {
  recipe_id: number;
  title: string;
  description: string;
}

const useRandomRecipe = async (): Promise<RecipeData | null> => {
  try {
    const { data, error } = await supabase
      .from("recipe") // Replace with your table name
      .select("recipe_id, title, description")
      .order("random_row()", { ascending: true })
      .limit(1);
    if (error) {
      console.error("Error fetching data:", error);
      return null;
    }
    return data[0];
  } catch (error) {
    console.error("Error in fetch Random Item:", error);
    return null;
  }
};

export default useRandomRecipe;
