/* eslint-disable */
import { app } from "@/stores/app-store.ts";

const api_url = "http://localhost:8001/api";

export const api = {
    get : 
        async (url : string) => {        
            return await api.fetch(url, {
                method: `GET`
            });
        },
    post : 
        async (url : string, form : {}) => {
            return await api.fetch(url, {
                method: 'POST',
                body: form
            });
        },
    put: 
        async (url : string, form : {}) => {
            return await api.fetch(url, {
                method: 'PUT',
                body: form
            });
        },
    patch:
        async (url : string, form : {}) => {
            return await api.fetch(url, {
                method: 'PATCH',
                body: form
            });
        },
    delete: 
        async (url : string) => {
            return await api.fetch(url, {
                method: 'DELETE',
            });
        },
    fetch: async (url : string, args : any) => {

        try {
            app().update({ carregando: true });
            let init = {
                method: args.method ?? 'GET',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${app().get()?.token}`
                }
            };

            if (args?.method === 'POST' || args?.method === 'PUT') {
                init.body =  JSON.stringify(args?.body ?? {});
            }

            let data = await (fetch(`${api_url}/${url}`, init).then((resp) => {
                console.log(resp.headers.get('X-Server-ID'));
                return resp.json();
            }))
            app().update({ carregando: false });
            return data;
        } catch (exc) {
            app().update({ carregando: false });
            console.log('<======= Error =====>', exc);
            return {};
        }
    }
};