<template>
  <Header />
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
</script>

<style>
* {
  font-family: 'League Spartan', sans-serif;

  padding: 0;
  box-sizing: border-box;
  margin: 0;

  --color-surface: #eee9e3;
  --color-primary: #d2705b;
  --color-disable-orange: #dfa698;
  --color-secondary: #505050;
  --color-disable-gray: #916055;

  & a {
    text-decoration: none;
  }
}
</style>
