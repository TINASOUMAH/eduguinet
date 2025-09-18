import api from "./api";

export const userService = {
  // Récupérer tous les exercices
  getAll: async () => {
    const res = await api.get("/exercices");
    return res.data;
  },

  // Récupérer un exercice par ID
  getById: async (id) => {
    const res = await api.get(`/exercices/${id}`);
    return res.data;
  },

  // Créer un nouvel exercice
  create: async (data) => {
    const res = await api.post("/exercices", data);
    return res.data;
  },

  // Mettre à jour un exercice
  update: async (id, data) => {
    const res = await api.put(`/exercices/${id}`, data);
    return res.data;
  },

  // Supprimer un exercice
  remove: async (id) => {
    await api.delete(`/exercices/${id}`);
  },
};
