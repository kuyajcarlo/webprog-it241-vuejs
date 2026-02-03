<template>
  <div>
    <h1>Personal Profile Web Page</h1>

    <div class="container">
      <div class="about-section">
        <h2>About Me</h2>

        <p>
          Course: BSIT (Bachelor of Science in Information Technology)<br>
          IT Experience: JavaScript, Python Programming, SQL<br>
          Interests: Gaming, Badminton, Cycling<br>
          Goal: Successful Entrepreneur
        </p>

        <img
          alt="John Carlo Baracena"
          class="profile-pic"
        />
      </div>

      <div class="gallery">
        <h2>My Gallery</h2>

        <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=2251868558892663"
          height="550"
          width="450">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>


<style src="./css/personalprofile.css"></style>
