import api from "./api";


export const userService = {
  getAll: async () => {
    const res = await api.get("/videos");
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`/videos/${id}`);
    return res.data;
  },

  create: async (data) => {
    const res = await api.post("/videos", data);
    return res.data;
  },

  update: async (id, data) => {
    const res = await api.put(`/videos/${id}`, data);
    return res.data;
  },

  remove: async (id)=> {
    await api.delete(`/videos/${id}`);
  },
};
