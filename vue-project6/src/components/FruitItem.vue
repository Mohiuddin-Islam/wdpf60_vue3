<template>
    <div>
        <h1>Fruit Item</h1>
        <ul>
            <li v-for="x in fruits" :key="x">
                {{ x }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fruits: [
                    'Apple',
                    'Banana',
                    'Cherry',
                    'Grape',
                    'Mango',
                ]
            }
        },
    }
</script>

<style>

</style>