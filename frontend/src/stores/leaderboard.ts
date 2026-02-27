import { defineStore } from "pinia";

export type LeaderboardItem = {
    id: number;
    player_name: string;
    score: number;
};

type SortMode = "scoreDesc" | "scoreAsc" | "nameAsc" | "nameDesc";

export const useLeaderboardStore = defineStore("leaderboard", {
    state: () => ({
        items: [] as LeaderboardItem[],
        isLoading: false,
        error: "" as string,
        sortMode: "scoreDesc" as SortMode,
    }),

    getters: {
        sortedItems(state): LeaderboardItem[] {
            const copy = [...state.items];

            switch (state.sortMode) {
                case "scoreAsc":
                    return copy.sort((a, b) => a.score - b.score);
                case "scoreDesc":
                    return copy.sort((a, b) => b.score - a.score);
                case "nameAsc":
                    return copy.sort((a, b) => a.player_name.localeCompare(b.player_name));
                case "nameDesc":
                    return copy.sort((a, b) => b.player_name.localeCompare(a.player_name));
                default:
                    return copy;
            }
        },
    },

    actions: {
        async fetchLeaderboard() {
            this.isLoading = true;
            this.error = "";

            try {
                const res = await fetch("http://localhost:3000/api/leaderboard");
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                this.items = await res.json();
            } catch (err) {
                console.error(err);
                this.error = "Failed to load leaderboard.";
            } finally {
                this.isLoading = false;
            }
        },

        setSortMode(mode: SortMode) {
            this.sortMode = mode;
        },
    },
});