<template>
    <div>
    <button @click="callData">Click Here</button>
    <h1 v-if="mydata">{{mydata}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mydata:null
            }
        },
        methods: {
        async callData(){
                
                let response = await fetch('src/assets/myData.json');
                //let response = await fetch('https://random-data-api.com/api/v2/users');
                this.mydata = await response.json();
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>