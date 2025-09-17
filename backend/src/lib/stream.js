import {StreamChat} from 'stream-chat';
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  throw new Error("missing stream api key or secret");
}
const streamClient = StreamChat.getInstance(apiKey, apiSecret);
export const upsertStreamUser = async (userData)=>{
    try {
        const user = await streamClient.upsertUsers([userData]);
        return userData;
    } catch (error) {
        console.error("Error creating/updating Stream user:", error);
    }
};
export const generateStreamToken = (userId) => {
    try {
        const userIdString = userId.toString();
        const token = streamClient.createToken(userIdString);
        return token;
    } catch (error) {
        console.error("Error generating Stream token:", error);
    }
};