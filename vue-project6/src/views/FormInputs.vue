<template>
    <div>
        <br>
        <h1>Registration Form</h1>
        <div ref="infoShow" id="display" v-show="showDiv">...</div>
        <hr>
        <div>{{ fullname }}</div>
        <div>{{ gender }}</div>
        <div>{{ district }}</div>
        <div>{{ languages }}</div>
        <div>{{ address }}</div>

        <fieldset style="width: fit-content;">
        <form @submit.prevent="FormSubmit">
            Name: <br> <input type="text" v-model="fullname" name="fullname" placeholder="Enter Name"><br>
            Gender: <br>
            Male: <input type="radio" v-model="gender" name="gender" value="male">
            Female: <input type="radio" v-model="gender" name="gender" value="female"><br>
            District:
            <select name="district" v-model="district">
                <option disabled>Select One</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Khulna</option>
                <option>Barisal</option>
            </select><br>
            Interested Language: <br>
            <input type="checkbox" name="PHP" v-model="languages" value="PHP">PHP
            <input type="checkbox" name="JavaScript" v-model="languages" value="JavaScript">JavaScript
            <input type="checkbox" name="VUE" v-model="languages" value="VUE">VUE
            <br>
            Address: <br>
            <textarea name="address" v-model="address" placeholder="Enter Address"></textarea><br>
            <input type="submit" name="submit" value="SUBMIT">
        </form>
    </fieldset>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fullname: '',
                gender: '',
                district: '',
                languages: [],
                address: '',
                info: '',

                showDiv: true,
            }
        },
        methods: {
            FormSubmit(){
                this.info += "Full Name: " + this.fullname;
                this.info += "<br>Gender: " + this.gender;
                this.info += "<br>District: " + this.district;
                this.info += "<br>Language: " + this.languages;
                this.info += "<br>Address: " + this.address;
                this.$refs.infoShow.innerHTML = this.info;
            }
        },
    }
</script>

<style scoped>
#display{
    background-color: aquamarine;
    color: black;
    padding: 10px;
}
</style>