<template>
  <transition name="slide-fade">
    <div class="card-skeleton-loader">
      <div class="avatar">
        <div class="img-skeleton"></div>
      </div>
      <div class="container">
        <div class="line"></div>
        <br />
        <div class="line"></div>
        <br />
        <div class="line"></div>
        <br />
        <div class="line"></div>
        <br />
      </div>
    </div>
  </transition>
</template>
<style scoped>
.card-skeleton-loader {
  background: #fff;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex;
  margin: 50px;
  padding: 20px;
  border-radius: 15px;
}
.avatar {
  margin-right: 50px;
}
.container {
  width: 500px;
  font-size: 25px;
  text-align: left;
}
.line,
.img-skeleton {
  display: inline-block;
  width: 400px;
  height: 18px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  background-color: rgb(218, 214, 214);
}
.img-skeleton {
  width: 300px;
  height: 300px;
}
.line::after,
.img-skeleton::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background: linear-gradient(
    to right,
    transparent 0%,
    #e8e8e8 50%,
    transparent 100%
  );
  background-repeat: repeat-y;
  background-size: 50px 200px;
  background-position: 0 0;
  animation: shimmer 2s infinite;
  content: "";
}
.line:nth-child(1) {
  margin-top: 10px;
}
.line:nth-child(3) {
  width: 90%;
}
.line:nth-child(7) {
  width: 70%;
}
.line:nth-child(5) {
  width: 80%;
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
