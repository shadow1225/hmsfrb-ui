<template>
  <div class="cunkuan">
    <div class="insurance">
      <div class="insurance-1">
        存款保险·消费者权益保护
      </div>
      <div class="seeMore">查看更多>></div>
    </div>
    <div class="consumers">
      <div class="textAndImg">
        <img class="finance" src="../../static/baoxian3.jpg" alt="存款保险1">
        <div class="textContent">020年12月22日11点08分，惠民舜丰村镇银行胡集支行在惠民县委、县政府、县地方金融监督管理局、人民银行、银保监局、</div>
      </div>
      <div class="textAndImg">
        <img class="finance" src="../../static/baoxian2.jpg" alt="存款保险2">
        <div class="textContent">020年12月22日11点08分，惠民舜丰村镇银行胡集支行在惠民县委、县政府、县地方金融监督管理局、人民银行、银保监局、</div>
      </div>
      <div class="textAndImg">
        <img class="finance" src="../../static/baoxian4.jpg" alt="存款保险3">
        <div class="textContent">020年12月22日11点08分，惠民舜丰村镇银行胡集支行在惠民县委、县政府、县地方金融监督管理局、人民银行、银保监局、</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .cunkuan {
    margin-top: 20px;
    width: 80%;
    margin-left: 10%;
    height: 360px;
  }

  .insurance {
    display: flex;
  }

  .insurance-1 {
    font-size: 24px;
    width: 50%;
  }

  .seeMore {
    width: 50%;
    text-align: right;
    color: #999;
  }

  .consumers {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .textAndImg {
    width: 30%;
    height: 300px;
    overflow: hidden;
    border: 1px solid #e8e8e8;
    margin-top: 20px;
  }

  .finance {
    width: 100%;
    height: 180px;
  }

  .textContent {
    margin-top: 20px;
    height: 20px;
    text-align: left;
    width: 95%;
    margin-left: 5%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }
</style>
