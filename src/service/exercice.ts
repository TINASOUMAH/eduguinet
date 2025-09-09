import api from "./api";
import { User } from "../types";

export const userService = {
  getAll: async (): Promise<User[]> => {
    const res = await api.get("/exercies");
    return res.data;
  },

  getById: async (id: string): Promise<User> => {
    const res = await api.get(`/exercices/${id}`);
    return res.data;
  },

  create: async (data: Partial<User>): Promise<User> => {
    const res = await api.post("/exercices", data);
    return res.data;
  },

  update: async (id: string, data: Partial<User>): Promise<User> => {
    const res = await api.put(`/exercices/${id}`, data);
    return res.data;
  },

  remove: async (id: string): Promise<void> => {
    await api.delete(`/exercices/${id}`);
  },
};
