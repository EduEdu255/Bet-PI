import { ref } from 'vue';


const appState = ref(null);

export const app = () => {
    return {
        set: (data) => {
            sessionStorage.setItem('app', JSON.stringify(data));
            appState.value = data;
        },
        get: () => {
            if (appState.value === null) {
                try {
                    appState.value = JSON.parse(sessionStorage.getItem('app') || '{}') || {};
                } catch (exc) {
                    console.log(exc);
                    appState.value = null;
                }
            }
            return appState.value;
        },
        update: (data: Record<string, any>) => {
            let current = JSON.parse(sessionStorage.getItem('app') || '{}') || {};
            for (const [key, value] of Object.entries(data)) {
                current[key] = value;
            }
            appState.value = current;
            sessionStorage.setItem("app", JSON.stringify(current));
            return appState.value;
        },
        openSnackBar: (text: string) => {
           appState.value = JSON.parse(sessionStorage.getItem('app') || '{}') || {};
           appState.value.snack = true;
           appState.value.snackText = text;
           console.log("Abri o snack!")

           setTimeout(() => {
                appState.value.snack = false;
                appState.value.snackText = '';
                sessionStorage.setItem("app", JSON.stringify(appState.value));
           }, 3000);
           sessionStorage.setItem("app", JSON.stringify(appState.value));
        }
    }
}