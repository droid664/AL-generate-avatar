<template>
  <div class="default-layout">
    <nav class="nav">
      <ul>
        <li>
          <router-link to="/">Главная</router-link>
        </li>
        <li>
          <router-link to="/favorite">Избранное</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.nav {
  ul {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  a {
    color: var(--white);
    font-size: 24px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .router-link-exact-active {
    opacity: 0.7;
    pointer-events: none;
  }
}
.default-layout {
  &:has(.index-page) {
    .nav {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
