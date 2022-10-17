<template>
  <h2 class="heading">Recipe App</h2>
  <button class="btn">
    <router-link
      class="link"
      style="color: white; font-size: 20px; font-weight: 600"
      to="/addrecipe"
      >Add Recipe</router-link
    >
  </button>
  <div class="container">
    <div class="card" v-for="(item, index) in recipe" :key="index">
      <div class="title">
        <h2>{{ item.title }}</h2>
      </div>
      <div class="desc">{{ item.desc }}</div>
      <div>
        <button>
          <router-link class="link" :to="/viewrecipe/ + item.id"
            >View</router-link
          >
        </button>
        <button style="margin-left: 10px" @click="deleteItem(item.id)">
          Delete
        </button>
      </div>
      <!-- <div>{{ item.desc }}</div> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HomeCom",
  data() {
    return {
      recipe: [],
    };
  },
  methods: {
    async deleteItem(ind) {
      let result = await axios.delete("http://localhost:3000/recipe/" + ind);
      console.log(result);
      if (result.status == 200) {
        this.getApi();
      }
    },
    async getApi() {
      let result = await axios.get("http://localhost:3000/recipe");
      if (result.status == 200) {
        console.log(result.data);
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
.btn {
  padding: 10px 20px;
  margin: 15px 0px;
  border-radius: 10px;
  border: none;
  outline: none;
  /* color: rgb(37, 37, 49); */
  background-color: #ddaa00;
}
.link {
  text-decoration: none;
  color: #ddaa00;
}
.container {
  /* background-color: transparent; */

  padding: 20px 0px;
  /* margin: 20px 40px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* color: blue; */
}
.card {
  width: 300px;
  height: 200px;
  margin: 20px 30px;
  text-align: start;
  color: #353432;
  background-color: rgba(221, 170, 0, 0.9);
  /* border: 2px solid gray; */
  border-radius: 10px;
  padding: 20px;
}
.card button {
  width: 80px;
  height: 35px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #353432;
  color: #ddaa00;
  cursor: pointer;
}
.desc {
  margin: 10px 0px;
  height: 70px;
  /* background-color: aliceblue; */
  border-radius: 10px;
  overflow: hidden;
}
.heading {
  background-color: #ddaa00;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 70px; */
}
</style>
