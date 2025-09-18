import api from "./api";


export const userService = {
  getAll: async () => {
    const res = await api.get("/pdf");
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`/pdf/${id}`);
    return res.data;
  },

  create: async (data) => {
    const res = await api.post("/pdf", data);
    return res.data;
  },

  update: async (id, data) => {
    const res = await api.put(`/pdf/${id}`, data);
    return res.data;
  },

  remove: async (id) => {
    await api.delete(`/pdf/${id}`);
  },
};
