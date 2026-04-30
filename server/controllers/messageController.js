import axios from "axios";
import Chat from "../models/chat.js";
import User from "../models/User.js";
import imagekit from "../configs/imagekit.js";
import openai from "../configs/openai.js";

//Text-based AI Message controller
export const textMessageControllere = async (req, res) => {
  try {
    const userId = req.user._id;    

    const { chatId, prompt } = req.body;

    const chat = await Chat.findOne({ userId, _id: chatId });
    chat.messages.push({
      role: "user",
      content: prompt,
      timestamp: Date.now(),
      isImage: false,
    });

    const { choices } = await openai.chat.completions.create({
      model: "gemini-3-flash-preview",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const reply = {
      ...choices[0].message,
      timestamp: Date.now(),
      isImage: false,
    };
    res.json({ success: true, reply });

    chat.messages.push(reply);
    await chat.save();
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

//Image Generation Message Controller
export const imageMessageController = async (req, res) => {
  try {
    const userId = req.user._id;
    //check credits
    const { prompt, chatId, isPublished } = req.body;
    // Find chat
    const chat = await Chat.findOne({ userId, _id: chatId });

    // push user message
    chat.messages.push({
      role: "user",
      content: prompt,
      timestamp: Date.now(),
      isImage: false,
    });

    //Encode the prompt
    const encodePrompt = encodeURIComponent(prompt);

    //construct imagekit ai generation url
    const generatatedImageUrl = `${process.env.IMAGEKIT_URL_ENDPOINT}/ik-genimg-prompt-${encodePrompt}/chatGPT/${Date.now()}.png
                  ?tr=w-800,h-800`;

    //Trigger generation by fetching from imagekit
    const aiImageResponse = await axios.get(generatatedImageUrl, {
      responseType: "arraybuffer",
    });

    //convert to base64
    const base64Image = `data:image/png;base64,${Buffer.from(aiImageResponse.data, "binary").toString("base64")}`;

    //upload to imagekit media library
    const uploadResponse = await imagekit.upload({
      file: base64Image,
      fileName: `${Date.now()}.png`,
      folder: "chatGPT",
    });

    const reply = {
      role: "assistant",
      content: uploadResponse.url,
      timestamp: Date.now(),
      isImage: true,
      isPublished,
    };
    res.json({ success: true, reply });

    chat.messages.push(reply);
    await chat.save();

  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};
