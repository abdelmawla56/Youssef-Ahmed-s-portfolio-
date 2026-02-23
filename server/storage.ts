import { db } from "./db";
import { messages, type CreateMessageRequest, type MessageResponse } from "@shared/schema";

export interface IStorage {
  createMessage(message: CreateMessageRequest): Promise<MessageResponse>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(insertMessage: CreateMessageRequest): Promise<MessageResponse> {
    const [msg] = await db.insert(messages).values(insertMessage).returning();
    return msg;
  }
}

export const storage = new DatabaseStorage();
