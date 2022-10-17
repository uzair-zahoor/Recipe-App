<template>
  <div class="view">
    <button class="btn">
      <router-link class="link" to="/">&lt; Back</router-link>
    </button>
    <div class="form-body">
      <div class="field">
        <label for="">Title</label>
        <!-- <input type="text" v-model="recipe.title" /> -->
        <div
          class="title"
          style="font-size: 24px; font-weight: 600; letter-spacing: 1px"
        >
          {{ recipe.title }}
        </div>
      </div>
      <div class="field">
        <label for="">Description</label>
        <!-- <textarea name="" v-model="recipe.desc"></textarea> -->
        <div class="desc">{{ recipe.desc }}</div>
      </div>
      <div class="field">
        <label for="">Ingrdients</label>
        <!-- <textarea name="" v-model="recipe.ingred"></textarea> -->
        <div class="ing">{{ recipe.ingre }}</div>
      </div>
      <div class="field">
        <label for="">Method</label>
        <!-- <textarea name="" v-model="recipe.method"></textarea> -->
        <div class="method">{{ recipe.method }}</div>
      </div>
      <!-- <button class="btn close">Close</button> -->
      <!-- <button class="btn enter" @click="save">Enter</button> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ViewRecipe",
  data() {
    return {
      recipe: {},
    };
  },
  methods: {
    async getApi() {
      let result = await axios.get(
        "http://localhost:3000/recipe/" + this.$route.params.id
      );
      if (result.status == 200) {
        this.recipe = result.data;
      }
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>
<style scoped>
.view {
  /* background-color: aqua; */
  background: url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 20px 0px;
  color: white;
}
.btn {
  padding: 10px 20px;
  margin-top: 15px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: chocolate;
}
.link {
  text-decoration: none;
  color: white;
}
.form-body {
  width: 50%;
  margin: 20px auto;
  padding: 20px;
  /* border: 1px solid chocolate; */
  background-color: rgba(210, 105, 30, 0.5);
  box-shadow: 5px 5px 8px rgb(59, 59, 59);
  border-radius: 10px;
  text-align: left;
}
.field {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px 0px;
}

label {
  font-size: 26px;
  font-weight: 900;
  margin: 5px 10px;
  color: rgb(71, 37, 12);
}
.title,
.desc,
.ing,
.method {
  width: calc(100% - 20px);
  background-color: chocolate;
  /* color: rgb(37, 37, 49); */
  margin: 10px 20px;
  padding: 10px;
  border-radius: 10px;
}
</style>
