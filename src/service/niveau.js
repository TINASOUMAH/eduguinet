import api from "./api";


export const userService = {
  getAll: async ()=> {
    const res = await api.get("/levels");
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`/levels/${id}`);
    return res.data;
  },

  create: async (data) => {
    const res = await api.post("/levels", data);
    return res.data;
  },

  update: async (id, data ) => {
    const res = await api.put(`/levels/${id}`, data);
    return res.data;
  },

  remove: async (id) => {
    await api.delete(`/levels/${id}`);
  },
};
