<template>
  <div id="top">
    <nav class="top_wrap">
      <ul class="nav-list">
        <li class="apple-logo">
          <a class="link-main" href="/"><div class="img-main-logo"></div></a>
        </li>
        <li><a><p>Mac</p></a></li>
        <li><a><p>iPad</p></a></li>
        <li><a href="/iphone-11"><p>iPhone</p></a></li>
        <li><a><p>Watch</p></a></li>
        <li><a><p>Music</p></a></li>
        <li><a @click="goServiceLayout"><p>고객지원</p></a></li>
        <li><a><div class="img-main-search"></div></a></li>
        <li><a href="/iphone-11/market"><div class="img-main-market"></div></a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Top',
  methods: {
    goServiceLayout () {
      this.$router.push({
        name: 'IPhoneServiceLayout'
      }).catch(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-list{
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.nav-list p {
  color : #ffffff;
  font-size: 1rem;
  font-weight: 300;
  line-height: 2.9;
}

.nav-list li {
  padding: 0 0.714285rem;
  cursor: pointer;
    &:hover{
      opacity: 0.5;
      transition-duration: 0.25s;
    }
}

.img-main-logo,.img-main-search,.img-main-market{
    background-size: 1.142857rem 3.142857rem;
    background-repeat: no-repeat;
    background-position: center center;
    width: 1.142857rem;
    height: 3.142857rem;
}

.img-main-logo{
    background-image: url(https://www.apple.com/ac/globalnav/4/ko_KR/images/globalnav/apple/image_large.svg);
}

.img-main-search{
  background-image: url(https://www.apple.com/ac/globalnav/4/ko_KR/images/globalnav/search/image_large.svg);
}

.img-main-market{
  background-image: url(https://www.apple.com/ac/globalnav/4/ko_KR/images/globalnav/bag/image_large.svg);
}

.top_wrap {
  height: 3.15rem;
  background-color: #333;
}
</style>
