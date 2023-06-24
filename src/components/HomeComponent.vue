<template>
  <div>
    <h1>Добро пожаловать в приложение Task Manager!</h1>
    <div class="home">
      <router-link to="/tasks">Перейти к задачам</router-link>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 12l14 0" />
        <path d="M15 16l4 -4" />
        <path d="M15 8l4 4" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
}
 a {
   text-decoration: none;
   font-size: 24px;
   color: #000;
 }
</style>