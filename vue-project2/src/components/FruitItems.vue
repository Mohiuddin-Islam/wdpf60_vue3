<template>
    <div>
    <h1 style="background-color: orangered; color: white;">Fruits List</h1>
<ul style="text-align: left;">
    <li v-for="(x, index) in fruits" :key="index" >{{ x }}</li>
</ul>

<ul style="text-align: left;">
    <li v-bind:key="x" v-for="x in fruits">{{ x }}</li>
</ul>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                fruits: [
                'Apple',
                'Banana',
                'Mango',
                'Orange']
            }
        },
    }
    
</script>

<style lang="scss" scoped>

</style>