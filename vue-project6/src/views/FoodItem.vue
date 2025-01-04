<template>
    <!-- <div v-on:mouseenter="countClicks">
        <h1>{{ name }}</h1>
        <p>{{ message }}</p>
        <p>{{ counter }}</p>
    </div> -->
    <div>
        <h1>{{ foodName }}</h1>
        <p>{{ foodDesc }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "Orange",
            message: "This is a food item",
            counter: 0,
        };
    },
    methods: {
        countClicks() {
            this.counter++;
        },
    },
    props: ["foodName",
            "foodDesc",
    ],
};
</script>

<style>
</style>
