import api from "./api";


export const userService = {
  getAll: async () => {
    const res = await api.get("/quizes");
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`/quizes/${id}`);
    return res.data;
  },

  create: async (data) => {
    const res = await api.post("/quizes", data);
    return res.data;
  },

  update: async (id, data)=> {
    const res = await api.put(`/quizes/${id}`, data);
    return res.data;
  },

  remove: async (id) => {
    await api.delete(`/quizes/${id}`);
  },
};
