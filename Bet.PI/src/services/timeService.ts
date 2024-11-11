import { api } from "@/api.ts";

const prefix = "time";

export const timeService = {
  load: async () => {
    return await api.get(prefix);
  },

  getTime: async (id) => {
    return await api.get(`${prefix}/${id}`);
  },
  getTimeModalidade: async(id) => {
    return await api.get(`${prefix}/modalidade/${id}`);
  },

  create: async (form) => {
    return await api.post(prefix, form);
  },
  update: async (id, form) => {
    return await api.put(`${prefix}/${id}`, form);
  },
  remove: async (id) => {
    return await api.delete(`${prefix}/${id}`);
  },
};
