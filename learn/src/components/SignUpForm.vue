<template>
    <form>
        <label>Email:</label>
        <input type="email" required v-model="email"/>

        <label>Password:</label>
        <input type="password" required v-model="password"/>

        <label>Role:</label>
        <select v-model="role">
            <option value="designer">Web designer</option>
            <option value="developer">Web developer</option>
        </select>

        <label>Skills</label>
        <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
        <div v-for="skill in skills" :key="skill" class="pill" @click="deleteSkill(skill)">
            {{ skill }}
        </div>

        <div class="terms">
            <input type="checkbox" v-model="terms" required/>
            <label>Accept terms and conditions</label>
        </div>

        <!--<div>
            <input type="checkbox" value="gon" v-model="name">
            <label>Gon</label>
        </div>
        <div>
            <input type="checkbox" value="killua" v-model="name">
            <label>Killua</label>
        </div>
        <div>
            <input type="checkbox" value="nitro" v-model="name">
            <label>Nitro</label>
        </div> -->
    </form>

    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Terms: {{ terms }}</p>
</template>
<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const role = ref('');
const terms = ref(false);
const tempSkill = ref('');
const skills = ref([]);


const addSkill = (e) => {
    if (e.key === ',' && tempSkill.value) {
        if (!skills.value.includes(tempSkill.value)) {
            skills.value.push(tempSkill.value)
        }
        tempSkill.value = '';
    }
}

const deleteSkill = (skill) => {
    skills.value = skills.value.filter(s => s !== skill);
}
</script>
<style>
    p {
        font-size: 1.5em;
        color: #aaa;
        margin-top: 0.5em;
        /*Center the p element*/
        text-align: center; 
    }
    form {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        padding: 40px;
        border-radius: 10px;
        text-align: left;
    }
    label{
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        color: #aaa;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select {
        display: block;
        box-sizing: border-box;
        width: 100%;
        padding: 10px 6px;
        background: #eee;
        border: none;
        border-bottom: 1px solid #ddd;
    }
    input[type="checkbox"] {
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }
    .pill{
        color: black;
        font-size: medium;
    }
</style>