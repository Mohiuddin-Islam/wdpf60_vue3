<template>
    <div><br>
<button @click="showData">Click Here</button>
<h1 ref="h1cont"></h1>
    </div>
    <div>
        <hr>
        <p ref="msg">Today is first Sunday of current Year</p>
        <button @click="copyPaste">Click Here</button>
        <h1 ref="msgShow">...</h1>
    </div>


    <form action="">
        <b>Name:</b>
        <input type="text" name="fullname" placeholder="Enter Full Name" ref="fullname" @input="inputShow">
    </form>
    <h1 ref="nameShow"></h1>

</template>

<script>
    export default {
        methods: {
            showData(){
        this.$refs.h1cont.innerHTML = "Hello World";
            },
            copyPaste(){
                this.$refs.msgShow.innerHTML = this.$refs.msg.innerHTML
            },
            inputShow(){
                this.$refs.nameShow.innerHTML = this.$refs.fullname.value
            }
        },
    }
</script>

<style scoped>

</style>