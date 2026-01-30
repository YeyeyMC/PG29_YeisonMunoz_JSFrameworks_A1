<template>
    <section class="counter">
        <h2>Counter: </h2>
        <p>Count: {{ store.count }}</p>
        <p>Double: {{ store.doubleCount }}</p>

        <button @click="store.increment">Increment</button>
    </section>
</template>

<script setup lang="ts">
    import { useCounterStore } from "../stores/counter.ts";

    const store = useCounterStore();
</script>

<style scoped>
    .counter {
        padding: 24px;
        margin-bottom: 24px;
        text-align: center;
        background-color: #f5f7fa;
        border-bottom: 2px solid #e0e0e0;
        font-family: Arial;
    }

    button {
        padding: 10px 10px;
        cursor: pointer;
        font-family: Arial;
    }
</style>