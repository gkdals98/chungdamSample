<template>
  <div class="header">
    <section class="nav-small grey-border">
      <div class="menu-container">
        <button class="menu-box btn-tlns grey-border">청담러닝</button>
        <button class="menu-box btn-tlns grey-border">청담어학원</button>
        <button class="menu-box btn-tlns grey-border">April어학원</button>
        <button class="menu-box btn-tlns grey-border">아이가르텐</button>
        <button class="menu-box btn-tlns grey-border">Page By Page</button>
      </div>
      <div class="right-menu">
        <div class="menu-container user-container">
          <button class="user-menu btn-tlns">로그인</button>
          <button class="user-menu btn-tlns">회원가입</button>
        </div>
        <div class="menu-container pay-container">
          <button class="pay-menu btn-tlns">수강료납입</button>
          <button class="pay-menu btn-tlns">교재구매</button>
          <button class="pay-menu btn-tlns">어학원찾기</button>
        </div>
      </div>
    </section>
    <section class="nav-big grey-border">
      <router-link to="/">
        <Chungdam/>
      </router-link>
      <div class="menu-container">
        <div class="menu-box grey-border">
          <router-link to="/Brand">브랜드소개</router-link>
        </div>
        <div class="menu-box grey-border">
          <router-link to="/AdmissionGuid">입학안내</router-link>
        </div>
        <div class="menu-box grey-border">
          <router-link to="/ChungdamNews">채널청담</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Chungdam from "@/assets/svg/chungdam.vue";

export default Vue.extend({
  name: "Header",
  components: {
    Chungdam,
  },
  data: function (){
    return {
      menu: [
        {
          depth1 : "브랜드소개",
          depth2 : [
            "브랜드",
            "커리큘럼"
          ]
        },
                {
          depth1 : "입학안내",
          depth2 : [
            "입학안내",
          ]
        },
        {
          depth1 : "입학안내",
          depth2 : [
            "청담소식",
            "청담스토리"
          ]
        },
      ]
    }
  }
})
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header{
  font-size:10px;
}

.menu-container{
      display: flex;
      justify-content: space-between;
}

.menu-box{
  border-style : solid;
  border-width: 0 0 0 1px;
  padding : 0 2em 0 2em;
  background-color: transparent;
  min-width: 6em;
  &:hover{
    cursor: pointer;
    color: #b94242;
    font-weight: bold;
  }
}

.grey-border{
  border-color: #b1b1b1;
}

.right-menu{
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  min-width: 40em;
  .pay-container{

  }
  .user-container{

  }
}
  
.nav-small {
  display: flex;
  justify-content: space-between;
  padding: 0 4em 1em 1em;
  border-style: solid;
  border-width: 0 0 1px 0;

  a {
    color: #2c3e50;
    font-size: 1em;
    text-decoration-line: none;
    &.router-link-exact-active {
      color: #b94242;
    }
  }
}

.nav-big {
  display: flex;
  justify-content: space-between;
  border-style: solid;
  border-width: 0 0 1px 0;
  svg{
    padding: 2em;
    width: 15em;
    &:hover{
      cursor: pointer;
    }
  }

  .menu-container{
    margin-left: 20em;
    padding:2em;
    min-width: 36em;
    a {
      font-weight: bold;
      color: #2c3e50;
      font-size: 1.8em;
      text-decoration-line: none;

      &.router-link-exact-active {
        color: #b94242;
      }
    }
  }
}

@media print, all and (max-width:1230px) {


  .pay-container{
    display: none;
  }
}
@media print, all and (max-width:768px) {
  .header{
    font-size:5px;
  }

  .pay-container{
    display: none;
  }
}

@media screen and (max-width:767px) {
  .header{
    font-size:5px;
  }

  .pay-container{
    display: none;
  }

}
</style>
