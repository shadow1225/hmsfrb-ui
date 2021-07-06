<template>
  <div class="qrCode">
    <div class="hmsf">
      <div class="contactInformation">
      <div class="hmsfImg">
         <img class="sfbz" src="/static/hangbiao2.jpg" alt="惠民舜丰村镇银行标志">
      </div>
      <div class="sfdh">电话:4008-126-157</div>
      <div class="sfdizhi">总行地址:中国·山东省滨州市惠民县南关街157号</div>
      </div>
      <div class="qrCode1">
        <div class="sjyhQr">
        <p class="sjyh1">下载手机银行</p>
        <img class="sjyh" src="/static/sjyh.jpg" alt="手机银行">
        </div>
        <div class="sfgzh">
        <p class="gzhText">关注舜丰公众号</p>
        <img class="sjyh" src="/static/gzh.jpg" alt="公众号">
        </div>
      </div>
    </div>
    <div class="ipv6">
      <div class="bendiIpv">本站支持IPV6访问</div>
      <div class="baobei">
Copyright ©惠民舜丰村镇银行 All Rights Reserve. <span style="color: red;">鲁ICP备14025888号-3</span></div>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .qrCode{
    margin-top: 15px;
    height: 195px;
  }
  .contactInformation{
    margin-left: 10%;
    width: 40%;
  }
  .hmsfImg{
    margin-top: 15px;
  }
  .hmsf{
    background-color: #F1F1F1;
    display: flex;
    height: 150px;
  }
  .sfbz{
    height: 45px;
  }
  .sfdh{
    margin-top: 10px;
    font-size: 18px;
    color: #333;
  }
  .sfdizhi{
    margin-top: 5px;
    font-size: 16px;
    color: #333;
  }
  .qrCode1{
    display: flex;
    text-align: center;
   /* flex-wrap: wrap;
    justify-content: space-around; */
    width: 40%;
    justify-content: flex-end;
  }
  .sjyh1{
  }
  .sjyh{
    height: 95px;
  }
  .sjyhQr{
    margin-right: 10px;
  }
  .ipv6{
    background-color: #555555;
    height: 45px;
    width: 100%;
    display: flex;
  }
  .bendiIpv{
    margin-left: 10%;
    line-height: 45px;
    color: #999999;
    width: 20%;
  }
  .baobei{
    line-height: 45px;
    color: #999999;
  }
</style>
