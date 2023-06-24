<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fafafc;
  color: #2c3e50;
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  width: 100%;
  text-align: center;
  padding: 2rem 0;
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  border: 1px solid transparent;
  padding: 0.4rem 0.7rem;
  border-radius: .2rem;
  margin: .5rem;
  color: #fff;

  &-primary {
    background-color: #007bff;
    border-color: #007bff;
  }

  &-success {
    background-color: #28a745;
    border-color: #28a745;
  }

  &-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }
}
form {
  width: 35%;
  padding: 0.3rem 1rem;
  margin-bottom: 0.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  border: 1px solid #f3f4f5;
  height: 100%;
  margin-left: 0.5rem;

  input {
    padding: 0.4rem 0.7rem;
  }
}

.task {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;


  ul {
    width: 60%;
    padding: 0 20px;

  li {
    list-style-type: none;
    padding: .3rem 1rem;
    margin-bottom: .5rem;
    background-color: #fff;
    border-radius: .5rem;
    border: 1px solid #f3f4f5;


  }
}
}
</style>
