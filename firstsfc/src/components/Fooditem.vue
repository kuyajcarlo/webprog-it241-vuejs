<template>
  <div class="santol">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
    <p class="extra">❤️ I love tocino</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Apple and Mango',
      message: 'I like apple and mango'
    }
  }
};
</script>

<style>
.santol {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: rgb(248, 235, 116);
}

.extra {
  font-weight: bold;
  color: #b30000;
}
</style>
