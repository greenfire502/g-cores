<template>
  <div class="home">
    <div class="main">
      <div class="block">
        <!-- <span class="demonstration">Click 指示器触发</span> -->
        <el-carousel trigger="click">
          <el-carousel-item v-for="(item, index) in bannar" :key="item.id">
            <img :src="item.bannar_img" class="Carousel">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<style>
  .home{
    margin-top: 80px;
    height: 2000px;
    background: #f0f0f0;
  }
  .block{
    /* height: 420px; */
    z-index: 1;
    opacity: 0.95;
  }
  .el-carousel{
    height: 300px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .el-carousel__container{
    position: static;
  }

  @media screen and (min-width: 992px){
    .el-carousel{
    height: 420px;
  }
  }
   @media screen and (max-width: 768px){
    .el-carousel{
    height: 250px;
  }
  }

  .Carousel{
    width: 100%;
    height: 100%;
  }
</style>


<script>
export default {
  created () {
    this.$http.get('http://localhost:3000/bannar')
      .then(res => {
        this.bannar = res.data
      })
  },
  data () {
    return {
       bannar: []
    }
  },
  
  methods: {
    
  }
}
</script>