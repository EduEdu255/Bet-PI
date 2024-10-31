import { ref } from 'vue';

const appState = ref(null);

export const app = () => {
    return {
        set: (data) => {
            localStorage.setItem('app', JSON.stringify(data));
            appState.value = data;
        },
        get: () => {
            if (appState.value === null) {
                try {
                    appState.value = JSON.parse(localStorage.getItem('app') || '{}') || {};
                } catch (exc) {
                    console.log(exc);
                    appState.value = null;
                }
            }
            return appState.value;
        }
    }
}