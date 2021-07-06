<template>
  <div class="quanbu">

    <div class="dynamic">
      <van-tabs v-model="active" @change="tabsChange">
        <van-tab title="最新公告"></van-tab>
        <van-tab title="我行动态"></van-tab>
      </van-tabs>
      <!-- <div class="gonggao"></div>
      <div ></div> -->
      <div class="gengduo">查看更多>></div>
    </div>
    <div class="zhanshi" v-show="isShow">
      <div class="ggImg">
        <img class="ggtu" src="../../static/gonggao.jpg" alt="公告">
      </div>
      <div class="tongzhi">
        <div class="tongzhi-1">
          <div class="dian">
            <div class="dian-1"></div>
          </div>
          <div class="neirong">这12种非法金融广告要警惕！</div>
          <div class="date">2021-05-31</div>
        </div>
        <div class="tongzhi-1">
          <div class="dian">
            <div class="dian-1"></div>
          </div>
          <div class="neirong">这12种非法金融广告要警惕！</div>
          <div class="date">2021-05-31</div>
        </div>
        <div class="tongzhi-1">
          <div class="dian">
            <div class="dian-1"></div>
          </div>
          <div class="neirong">这12种非法金融广告要警惕！</div>
          <div class="date">2021-05-31</div>
        </div>
      </div>
    </div>
    <div class="zhanshi" v-show="!isShow">
      <div class="ggImg">
        <img class="ggtu" src="../../static/gonggao.jpg" alt="公告">
      </div>
      <div class="tongzhi">
        <div class="tongzhi-1">
          <div class="dian">
            <div class="dian-1"></div>
          </div>
          <div class="neirong">测试测试测试测试测试测试测试测试</div>
          <div class="date">2021-05-31</div>
        </div>
        <div class="tongzhi-1">
          <div class="dian">
            <div class="dian-1"></div>
          </div>
          <div class="neirong">测试测试测试测试测试测试测试测试</div>
          <div class="date">2021-05-31</div>
        </div>
        <div class="tongzhi-1">
          <div class="dian">
            <div class="dian-1"></div>
          </div>
          <div class="neirong">测试测试测试测试测试测试测试测试</div>
          <div class="date">2021-05-31</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Tab,
    Tabs
  } from 'vant'
  export default {
    data() {
      return {
        active: 2,
        isShow: true
      }
    },
    methods:{
      tabsChange(index,title){
        console.log(index)
        console.log(title)
        if(index == 0){
          this.isShow = true
        }else{
          this.isShow = false
        }
      }
    },
    components: {
      [Tab.name]: Tab,
      [Tabs.name]: Tabs
    }
  }
</script>

<style>
  .quanbu {
    height: 470px;
    overflow: hidden;
  }

  .dynamic {
    display: flex;
    margin-left: 10%;
    width: 80%;
    border-bottom: 2px solid #e8e8e8;
    margin-top: 50px;
    position: relative;
    height: 33px;
  }

  .gonggao {
    width: 10%;
    font-size: 20px;

  }

  .van-tab {
    width: 115px;
    font-size: 20px;
    color: #000000;
  }

  .van-tabs__line {
    width: 70px;
  }

  .gengduo {
    position: absolute;
    right: 10px;
    width: 10%;
    text-align: right;
    height: 33px;
    line-height: 33px;
    color: #999;
    ;
  }

  .ggImg {
    width: 37%;
  }

  .ggtu {
    width: 90%;
    height: 355px;
  }

  .zhanshi {
    display: flex;
    width: 80%;
    margin-left: 10%;
    height: 340px;
    margin-top: 30px;
  }

  .tongzhi {
    width: 63%;
  }

  .tongzhi-1 {
    display: flex;
    width: 100%;
    border-bottom: 2px solid #e8e8e8;
    height: 25px;
    padding: 10px;
  }

  .dian {
    width: 5%;
    height: 25px;
  }

  .dian-1 {
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background: #b7b7b7;
    margin-top: 8px;
  }

  .neirong {
    width: 50%;
  }

  .date {
    width: 45%;
    text-align: right;
    color: #000000A6;
  }
</style>
