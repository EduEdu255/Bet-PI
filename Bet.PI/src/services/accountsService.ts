import { api } from "@/api.ts";

export const load = async () => {
    return await api.get('accounts/');
}

export const me = async () => {
    return await api.get('auth/me/');
}

export const login = async (form) => {
    return await api.post('auth/login/', form);
}

export const fetchId = async (id) => {
    return await api.get('pessoas/' + id);
}

export const create = async (form) => {
    return await api.post('pessoas/', form);
}

export const update = async (id, form) => {
    return await api.put(`pessoas/${id}`, form);
}

export const remove = async (id) => {   
    return await api.delete(`pessoas/${id}`);
}