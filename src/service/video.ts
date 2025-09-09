import api from "./api";
import { User } from "../types";

export const userService = {
  getAll: async (): Promise<User[]> => {
    const res = await api.get("/videos");
    return res.data;
  },

  getById: async (id: string): Promise<User> => {
    const res = await api.get(`/videos/${id}`);
    return res.data;
  },

  create: async (data: Partial<User>): Promise<User> => {
    const res = await api.post("/videos", data);
    return res.data;
  },

  update: async (id: string, data: Partial<User>): Promise<User> => {
    const res = await api.put(`/videos/${id}`, data);
    return res.data;
  },

  remove: async (id: string): Promise<void> => {
    await api.delete(`/videos/${id}`);
  },
};
