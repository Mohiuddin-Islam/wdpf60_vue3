<template>
    <div>
        <ul>
            <li v-for="x in flowers" :key="x">{{ x.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        inject: ['flowers']
    }
</script>

<style scoped>

</style>