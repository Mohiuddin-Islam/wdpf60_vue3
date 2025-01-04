<template>
    <div id="box">
        <h3>{{ productName }}</h3>
        <img src="/src/favourite1.png" width="30px" alt="" v-show="isFavourite">
        <p>{{ productDesc }}</p>
    </div>
</template>

<script>
    export default {
        props: ["productName",
                "productDesc",
                "isFavourite",
        ],
    }
</script>

<style>
#box{
    height: 250px;
    width: 300px;
    border: 1px solid orangered;
    float: left;
}
img{
    float: right;
}
</style>