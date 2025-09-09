import api from "./api";
import { User } from "../models/pdf";

export const userService = {
  getAll: async (): Promise<User[]> => {
    const res = await api.get("/pdf");
    return res.data;
  },

  getById: async (id: string): Promise<User> => {
    const res = await api.get(`/pdf/${id}`);
    return res.data;
  },

  create: async (data: Partial<User>): Promise<User> => {
    const res = await api.post("/pdf", data);
    return res.data;
  },

  update: async (id: string, data: Partial<User>): Promise<User> => {
    const res = await api.put(`/pdf/${id}`, data);
    return res.data;
  },

  remove: async (id: string): Promise<void> => {
    await api.delete(`/pdf/${id}`);
  },
};
