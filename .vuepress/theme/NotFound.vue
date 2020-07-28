<template>
  <div class="theme-container">
    <div class="content">
      <h1>404</h1>
      <blockquote>Страница не найдена</blockquote>
      <router-link to="/">На главную</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
