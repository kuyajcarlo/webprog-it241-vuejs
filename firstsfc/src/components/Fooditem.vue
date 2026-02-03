<template>
  <div class="santol">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Santol and Mango',
      message: 'I like santol and mango'
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
    background-color: brown;
  }

</style>