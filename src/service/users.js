import api from "./api";


export const userService = {
  getAll: async () => {
    const res = await api.get("/users");
    return res.data;
  },

  getById: async (id) => {
    const res = await api.get(`/users/${id}`);
    return res.data;
  },

  create: async (data) => {
    const res = await api.post("/users/register", data);
    return res.data;
  },

  update: async (id, data) => {
    const res = await api.put(`/users/${id}`, data);
    return res.data;
  },

  remove: async (id)=> {
    await api.delete(`/users/${id}`);
  },
  login: async (email,password)=> {
    const res=await api.post(`/users/login`,{email,password});
    return res.data;
  },
 
  
};
