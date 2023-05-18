<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <div class="logo">
          <router-link to="/">
            <img src="@/assets/logo.svg">
            <span>Absolu<strong>Test</strong></span>
          </router-link>
        </div>
        <nav class="nav">
          <ul class="list">
            <li>
              <router-link class="link" to='/login'>Вход</router-link>
            </li>
            <li>
              <router-link class="link" to='/signup'>Регистрация</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>