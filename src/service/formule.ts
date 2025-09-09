import api from "./api";
import { User } from "../models/";

export const userService = {
  getAll: async (): Promise<User[]> => {
    const res = await api.get("/formule");
    return res.data;
  },

  getById: async (id: string): Promise<User> => {
    const res = await api.get(`/formule/${id}`);
    return res.data;
  },

  create: async (data: Partial<User>): Promise<User> => {
    const res = await api.post("/formule", data);
    return res.data;
  },

  update: async (id: string, data: Partial<User>): Promise<User> => {
    const res = await api.put(`/formule/${id}`, data);
    return res.data;
  },

  remove: async (id: string): Promise<void> => {
    await api.delete(`/formule/${id}`);
  },
};
