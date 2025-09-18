import api from "./api";


export const userService = {
  getAll: async () => {
    const res = await api.get("/formule");
    return res.data;
  },

  getById: async (id)=> {
    const res = await api.get(`/formule/${id}`);
    return res.data;
  },

  create: async (data)=> {
    const res = await api.post("/formule", data);
    return res.data;
  },

  update: async (id,data)=> {
    const res = await api.put(`/formule/${id}`, data);
    return res.data;
  },

  remove: async (id)=> {
    await api.delete(`/formule/${id}`);
  },
};
