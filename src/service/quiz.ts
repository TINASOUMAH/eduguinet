import api from "./api";
import { User } from "../types";

export const userService = {
  getAll: async (): Promise<User[]> => {
    const res = await api.get("/quizes");
    return res.data;
  },

  getById: async (id: string): Promise<User> => {
    const res = await api.get(`/quizes/${id}`);
    return res.data;
  },

  create: async (data: Partial<User>): Promise<User> => {
    const res = await api.post("/quizes", data);
    return res.data;
  },

  update: async (id: string, data: Partial<User>): Promise<User> => {
    const res = await api.put(`/quizes/${id}`, data);
    return res.data;
  },

  remove: async (id: string): Promise<void> => {
    await api.delete(`/quizes/${id}`);
  },
};
