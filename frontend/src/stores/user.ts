import { defineStore } from "pinia";

type UserInfo = {
    username: string;
};

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null as UserInfo | null,
        isLoading: false,
        error: "" as string,
    }),

    getters: {
        isLoggedIn: (state) => state.user !== null,
        username: (state) => state.user?.username ?? "",
    },

    actions: {
        async login(username: string, password?: string) {
            this.isLoading = true;
            this.error = "";

            try {
                const params = new URLSearchParams({ username });
                if (password) params.set("password", password);

                const res = await fetch(`http://localhost:3000/api/login?${params.toString()}`);

                if (!res.ok) {
                    const data = await res.json().catch(() => ({}));
                    throw new Error(data.message ?? `Login failed (${res.status})`);
                }

                const data = (await res.json()) as UserInfo;
                this.user = { username: data.username };
            } catch (err: any) {
                this.user = null;
                this.error = err.message ?? "Unknown error";
            } finally {
                this.isLoading = false;
            }
        },

        logout() {
            this.user = null;
            this.error = "";
        },
    },
});