
<template>
  <h1>Welcome Home</h1>
  <h1>Food Item global component coming from Main.js</h1>
  <food-item food-name="Burger" food-desc="Bhajapora"></food-item>
  <food-item food-name="Roll" food-desc="Not Good for Health"></food-item>
  <food-item food-name="Butter Nan" food-desc="Good for Health"></food-item>
  <food-item food-name="Pizza" food-desc="Gastick Food"></food-item>
  <hr>

  <product-item product-name="Laptop" product-desc="Good for Work" v-bind:is-favourite="true"></product-item>
  <product-item product-name="Mobile" product-desc="Good for Use" v-bind:is-favourite="false"></product-item>

</template>

<style>
  #app > div {
        border: dashed black 1px;
        display: inline-block;
        margin: 10px;
        padding: 10px;
        background-color: lightgreen;
    }

    #app > div:hover {
  cursor: pointer;
}
</style> 
