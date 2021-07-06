<template>
  <div class=" serviceClass">
    <div class="forPeople">便民服务</div>
    <div class="servicePicture">
      <img class="sfService" src="../../static/fuwu.png" alt="服务价目表">
      <img class="sfService" src="../../static/daikuan.png" alt="贷款利率">
      <img class="sfService" src="../../static/cunkuan.png" alt="存款利率">
      <img class="sfService" src="../../static/dianzi.png" alt="电子回单">
    </div>
  </div>
</template>

<script>
</script>

<style>
  .serviceClass {
    height: 160px;
    width: 80%;
    margin-top: 20px;
    margin-left: 10%;
  }

  .forPeople {
    font-size: 24px;
  }

  .servicePicture {
    padding-top: 15px;
    display: flex;
    /*  flex-direction: row;
    justify-content: center;
    align-items: center; */
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .sfService {
    
    width: 20%;
    height: 90px;


  }
</style>
