<template>
  <div class="suoyou">
    <div class="title">
      <div class="hangBiao">
        <img class="hangBiao" src="/static/hangbiao.png" alt="惠民舜丰村镇银行">
      </div>
      <div class="lianxi"><span class="rexian">全国统一服务热线：</span><br><span class="haoma">4008-126-157</span></div>
    </div>
    <div class="daohang">
      <div class="fenlei">
        首页
      </div>
      <div class="fenlei">
        个人业务
      </div>
      <div class="fenlei">
        公司业务
      </div>
      <div class="fenlei">
        银行卡业务
      </div>
      <div class="fenlei">
        网上申贷
      </div>
      <div class="fenlei">
        加入我们
      </div>
      <div class="fenlei">
        党建天地
      </div>
      <div class="fenlei">
        企业文化
      </div>
    </div>
    <div class="huandengpian">
      <div class="wangyin">
        <div class="wyButton">
          <van-button icon="manager" url="https://ebank.hmsfrb.com:3000/perbank" size="large"
            color="linear-gradient(to right, #ff6034, #ee0a24)">个人网银</van-button>
        </div>
        <div class="wyButton">
          <van-button icon="wap-home" url="https://ebank.hmsfrb.com:3000/corbank" size="large"
            color="linear-gradient(to right, #ff6034, #ee0a24)">企业网银</van-button>
        </div>
        <div class="wyButton">
          <van-button icon="graphic" size="large" @click="showPopup"
            color="linear-gradient(to right, #ff6034, #ee0a24)">手机银行</van-button>
          <van-popup v-model="show" class="popupNr"><img class="popupImg" src="/static/shoujierweima.jpg" alt="二维码">
          </van-popup>
        </div>
        <img class="ckbx-1" src="/static/ckbx.png" alt="存款保险">
      </div>
      <div class="huandeng">
        <Carousel :imgWidth="750" :imgList="imgList" :initIndex="0" :loop="true" :auto="true" :autoTime="2000">
        </Carousel>
      </div>
      <!-- <div class="ckbx">
        <div class="yinqi">
          <img class="woshou" src="/static/woshou2.jpg" alt="银企互助">
        </div>
      </div> -->
    </div>
    <notice></notice>
    <convenienceService></convenienceService>
    <depositInsurance></depositInsurance>
    <partyBuilding></partyBuilding>
    <brotherBank></brotherBank>
    <qrCode></qrCode>
  </div>
</template>

<script>
  import Carousel from './components/carousel'
  import notice from './components/notice'
  import convenienceService from './components/convenienceService'
  import depositInsurance from './components/depositInsurance'
  import partyBuilding from './components/partyBuilding'
  import brotherBank from './components/brotherBank'
  import qrCode from './components/qrCode'
  import {
    Button,
    Icon,
    Popup
  } from 'vant'
  export default {
    data() {
      return {
        imgList: [{
            img: '/static/sf1.jpg'
          },
          {
            img: '/static/sf2.jpg'
          },
        ],
        show: false,
      }
    },
    methods: {
      showPopup() {
        this.show = true;
      },
    },
    components: {
      Carousel,
      notice,
      convenienceService,
      depositInsurance,
      partyBuilding,
      brotherBank,
      qrCode,
      [Button.name]: Button,
      [Icon.name]: Icon,
      [Popup.name]: Popup
    }
  }
</script>

<style>
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }


  .title {
    display: flex;
    width: 80%;
    margin-left: 10%;
    height: 52px;
    padding: 20px;
  }

  .hangBiao {
    width: 50%;
  }

  .lianxi {
    width: 45%;
    text-align: right;
  }

  .rexian {
    font-size: 16px;
  }

  .haoma {
    color: red;
    font-size: 20px;
    font-weight: 900;
  }

  .daohang {
    background: #f5f5f5;
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .fenlei {
    text-align: center;
    line-height: 40px;
    width: 15%;
    height: 40px;
  }

  .popupImg {
    width: 100%;
    height: 240px;
  }

  .huandengpian {
    display: flex;
    width: 100%;
  }

  .wangyin {
    margin-left: 10%;
    width: 12%;
    margin-top: 12px;
  }

  .huandeng {
    margin-left: 3%;
  }

  .wyButton {
    margin-bottom: 8px;
  }

  .ckbx {
    margin-top: 12px;
    margin-left: 3%;
  }

  .ckbx-1 {
    width: 190px;
  }

  .woshou {
    width: 275px;
    height: 127px;
  }

  .yinqi {
    text-align: center;
    display: flex;
  }

  .popupNr {
    width: 250px;
    height: 250px;
  }
</style>
