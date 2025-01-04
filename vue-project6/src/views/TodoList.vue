<template>
    <div>
    <h1>Todo List</h1>
<ul>
    <todo-item v-for="x in contents" :key="x" :todo-name="x"/>
</ul>
<input type="text" placeholder="Add New Item" v-model="newContent" v-on:keydown.enter="addContent">
<button @click="addContent">Add</button>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                contents: [
                    'item1',
                    'item2',
                    'item3',
                ],
                newContent: '',
            }
        },
        methods: {
            addContent(){
                this.contents.push(this.newContent)
                this.newContent = ''
            }
        },
    }
</script>

<style lang="scss" scoped>
    
</style>