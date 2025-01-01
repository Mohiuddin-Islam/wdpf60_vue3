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
                
                let response = await fetch('src/assets/textfile.txt');
                this.mydata = await response.text();
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>