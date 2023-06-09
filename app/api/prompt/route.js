import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

// GET /prompts
export const GET = async (request) => {
  try {
    await connectToDatabase();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(error.message || "Failed to fetch all prompts", {
      status: 500,
    });
  }
};
