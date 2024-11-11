import { api } from "@/api.ts";

const prefix = "modalidade";

export const modalidadeService = {
    load: async () => {
        return await api.get(prefix);
    },

    getTime: async (id) => {
        return await api.get(`${prefix}/${id}`);
    },

    create: async (form) => {
        return await api.post(prefix, form);
    },
    update: async (id, form) => {
        return await api.patch(`${prefix}/${id}`, form);
    },
    remove: async (id) => {
        return await api.delete(`${prefix}/${id}`);
    },
};
