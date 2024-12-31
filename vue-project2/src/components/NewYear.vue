<template>
    <div>
        <h1 v-bind:class="ClassName">Happy New Year 2025</h1>
        <img v-bind:src="url" alt="" width="700" height="450"><hr>
        <p v-if="ProductsInstock">
    in stock
    </p>
    <p v-else>
    not in stock
    </p>

    <div v-show="showDiv">This div tag can be hidden</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ClassName: "head",
                url: "newYear.jpg",   //src path image
                //url:require('@/assets/newYear.png')  //assets path image
                ProductsInstock:false,
                showDiv:true
            }
        }
        
    }
</script>

<style>
.head{
    color:black;
    background-color: orange;
    font-size: 50px;
    text-align: center;
    margin-top: 100px;
}
</style>