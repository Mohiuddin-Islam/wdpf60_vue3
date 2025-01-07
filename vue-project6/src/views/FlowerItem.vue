<template>
    <div>
        <h1>Flower Name</h1>
        <ul>
            <li v-for="x in flowers" :key="x">{{ x.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                flowers: [
                    {name: 'Flower1', url: 'a1.jpg'},
                    {name: 'Flower2', url: 'a2.jpg'},
                    {name: 'Flower3', url: 'a3.jpg'},
                    {name: 'Flower4', url: 'a4.jpg'},
                ]
            }
        },
        provide(){
            return {
            flowers: this.flowers
    }
        }
    }
</script>

<style scoped>

</style>