<template>
    <div>
    <button @click="callData">Click Here</button>
    <h1 v-if="mydata">{{mydata}}</h1>
    </div>
</template>

<script setup>
import axios from 'axios';
</script>

<script>

    export default {
        data() {
            return {
                mydata:null
            }
        },
        methods: {
        async callData(){
                
                // let response = await fetch('src/assets/myData.json');
                let response = await axios.get('https://random-data-api.com/api/v2/users');
                this.mydata = response;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>