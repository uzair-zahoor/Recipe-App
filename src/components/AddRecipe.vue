<template>
  <div class="add">
    <button class="btn">
      <router-link class="link" to="/">&lt; Back</router-link>
    </button>
    <div class="form-body">
      <div class="field">
        <label for="">Title</label>
        <input type="text" v-model="recipe.title" />
      </div>
      <div class="field">
        <label for="">Description</label>
        <textarea name="" v-model="recipe.desc"></textarea>
      </div>
      <div class="field">
        <label for="">Ingrdients</label>
        <textarea name="" v-model="recipe.ingred"></textarea>
      </div>
      <div class="field">
        <label for="">Method</label>
        <textarea name="" v-model="recipe.method"></textarea>
      </div>
      <!-- <button class="btn close">Close</button> -->
      <button class="btn enter" @click="save">Enter</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AddRecipe",
  data() {
    return {
      recipe: {
        id: null,
        title: "",
        desc: "",
        ingred: "",
        method: "",
      },
    };
  },
  methods: {
    async save() {
      if (this.recipe.title === "") {
        alert("Enter the title of the content");
        return;
      } else {
        let result = await axios.post("http://localhost:3000/recipe", {
          // id: this.id,
          title: this.recipe.title,
          desc: this.recipe.desc,
          ingre: this.recipe.ingred,
          method: this.recipe.method,
        });
        console.log(result);
        this.recipe = "";
        return;
      }
    },
    async getApi() {
      let result = await axios.get("http://localhost:3000/recipe");
      if (result.status == 200) {
        console.log(result.data);
      }
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>
<style scoped>
.add {
  background: url("https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000");
  padding: 20px 0px;
  /* opacity: 0.7; */
  /* z-index: 1; */
}
.btn {
  padding: 10px 20px;
  margin-top: 15px;
  border-radius: 10px;
  border: none;
  outline: none;
  color: white;
  background-color: rgb(168, 55, 55);
}
.link {
  text-decoration: none;
  color: white;
}
.form-body {
  width: 50%;
  margin: 20px auto;
  padding: 20px;
  /* border: 1px solid aliceblue; */
  background-color: rgba(170, 87, 87, 0.5);
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
input,
textarea {
  width: 100%;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(163, 85, 85);
  color: white;
}
input {
  height: 40px;
}
textarea {
  height: 100px;
  resize: none;
}
label {
  font-size: 22px;
  font-weight: 800;
  color: rgb(61, 10, 10);
  margin: 5px 10px;
}
.close,
.enter {
  margin: 10px 15px;
  cursor: pointer;
}
</style>
