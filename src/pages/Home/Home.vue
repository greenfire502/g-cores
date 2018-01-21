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
      <div class="container">
        <div class="topicEntry topicEntry-withTalk">
          <div class="row row-sticky">
            <div class="col-sm-8">
              <div href="https://www.g-cores.com/gtalk" class="topicHeader topicHeader-entry" style="background-image: url(https://image.g-cores.com/5f86426e-b91f-4c07-bba1-0ffb3c82bad6.jpg)">
                <div class="topic-header-vol">
                  <div class="vol-top"></div>
                  <div class="vol-middle">issue</div>
                  <div class="vol-bottom">35</div>
                </div>
                <div class="topic-header-heading">
                  <h1 class="topicHeader_title">{{talk.theme}}</h1>
                  <p class="topicHeader_desc">吐槽时间到了！</p>
                  <div class="topicHeader_actions">
                    <div class="topicHeader_participant">
                      <strong>{{talk.number}}</strong> 人参与
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="topicEntry_talksContainer" id="j_topicTalksContainer">


                  <!-- <a class="topicEntry_talk j_topicTalk" v-for="(item, index) in talk.users" :key="item.id">
                    <h3>{{item.usertitle}}</h3>
                    <p>{{item.usercontent}}</p>
                    <div class="topicEntry_talk_user">
                      <div class="media">
                        <div class="media_left">
                          <img class="media_object img-circle" :src="item.userportrait">
                        </div>
                        <div class="media_body">
                          <h4>{{item.username}}</h4>
                          <p>{{item.recoverytime}}</p>
                        </div>
                      </div>
                    </div>
                  </a> -->

                  <mt-swipe :show-indicators="false">
                    <mt-swipe-item class="topicEntry_talk j_topicTalk" v-for="(item, index) in talk.users" :key="item.id">
                      <div class="center">
                        <h3>{{item.usertitle}}</h3>
                        <p>{{item.usercontent}}</p>
                        <div class="topicEntry_talk_user">
                          <div class="media">
                            <div class="media_left">
                              <img class="media_object img-circle" :src="item.userportrait">
                            </div>
                            <div class="media_body">
                              <h4>{{item.username}}</h4>
                              <p>{{item.recoverytime}}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </mt-swipe-item>
                  </mt-swipe>

                  <!-- <mt-swipe :show-indicators="false">
                    <mt-swipe-item>1</mt-swipe-item>
                    <mt-swipe-item>2</mt-swipe-item>
                    <mt-swipe-item>3</mt-swipe-item>
                  </mt-swipe> -->
              </div>
            </div>
          </div>
        </div>
        <div class="row">
            <div id="j_sub_focus_imgs">
              <div class="col-xs-6" v-for="(item, index) in hotspot.firsthots" :key="item.id">
                <div class="showcase showcase-original showcase-news">
                  <div class="showcase_time">
                    <span>
                        <div class="type">HOTSPOTS</div>
                    </span>
                    {{item.time}}
                  </div>
                  <div class="showcase_img">
                    <a href="">
                      <img :src="item.img" class="coverimg">  
                      <div class="showcase_meta">
                        <p>
                          <img :src="item.portrait" class="img-circle">
                        </p>
                        <p class="showcase_meta_nums">
                          <span>
                            <b class="fa fa-thumbs-up"></b>{{item.up}}
                          </span>
                          <span>
                            {{item.comment}}Comments
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="showcase_text">
                    <h4>
                      <a>
                        {{item.maintitle}}
                      </a>    
                    </h4>
                    <div class="showcase_info">{{item.subtitle}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-xs-6" v-for="(item, index) in hotspot.secondhots" :key="item.id">
              <div class="showcase showcase-original showcase-news">
                <div class="showcase_time">
                    <span>
                        <div class="type">HOTSPOTS</div>
                    </span>
                    {{item.time}}
                  </div>
                  <div class="showcase_img">
                    <a href="">
                      <img :src="item.img" class="coverimg">  
                      <div class="showcase_meta">
                        <p>
                          <img :src="item.portrait" class="img-circle">
                        </p>
                        <p class="showcase_meta_nums">
                          <span>
                            <b class="fa fa-thumbs-up"></b>{{item.up}}
                          </span>
                          <span>
                            {{item.comment}}Comments
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="showcase_text">
                    <h4>
                      <a>
                        {{item.maintitle}}
                      </a>    
                    </h4>
                    <div class="showcase_info">{{item.subtitle}}</div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      <div class="banner banner-first" id="xinwen">
        <img alt="机核新闻" data-stellar-ratio="1.3" src="https://alioss.g-cores.com/assets/banner/news-4d4b4769020533addc82722ef905e27573570f11cece52dd2715afb545e6cb39.jpg" style="transform: translate3d(0px, -148.528px, 0px);">
        <span>NEWS</span>
      </div>
      <h1 class="heading">新闻</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xs-6" v-for="(item, index) in xinwen.shownews" :key="item.id">
              <div class="showcase showcase-original showcase-news">
                <div class="showcase_time">
                    <span>
                        <div class="type">NEWS</div>
                    </span>
                    {{item.time}}
                </div>
                <div class="showcase_img">
                  <a href="">
                    <img :src="item.img" >  
                    <div class="showcase_meta">
                      <p>
                        <img :src="item.portrait" class="img-circle">
                      </p>
                      <p class="showcase_meta_nums">
                        <span>
                          <b class="fa fa-thumbs-up"></b>{{item.up}}
                        </span>
                        <span>
                          {{item.comment}}Comments
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
                <div class="showcase_text">
                  <h4>
                    <a>
                      {{item.maintitle}}
                    </a>    
                  </h4>
                  <div class="showcase_info">{{item.subtitle}}</div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <p class="tc">
        <a class="btn btn-hollow">更多</a>
      </p>
      <div class="banner banner-second" id="article">
        <img alt="机核文章" data-stellar-ratio="1.3" src="https://alioss.g-cores.com/assets/banner/article-e0042f16e46a464ef52cadd25f3cb7a5e5d6472467f5be6a3a357b9e355637ca.jpg" style="transform: translate3d(0px, -154.388px, 0px);">
        <span>ARTICLE</span>
      </div>
      <h1 class="heading">文章</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xs-6" v-for="(item, index) in article.showarticles" :key="item.id">
              <div class="showcase showcase-original showcase-article">
                <div class="showcase_time">
                    <span>
                        <div class="type">ARTICLE</div>
                    </span>
                    {{item.time}}
                </div>
                <div class="showcase_img">
                  <a href="">
                    <img :src="item.img" >  
                    <div class="showcase_meta">
                      <p>
                        <img :src="item.portrait" class="img-circle">
                      </p>
                      <p class="showcase_meta_nums">
                        <span>
                          <b class="fa fa-thumbs-up"></b>{{item.up}}
                        </span>
                        <span>
                          {{item.comment}}Comments
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
                <div class="showcase_text">
                  <h4>
                    <a>
                      {{item.maintitle}}
                    </a>    
                  </h4>
                  <div class="showcase_info">{{item.subtitle}}</div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <p class="tc">
        <a class="btn btn-hollow">更多</a>
      </p>
      <div class="banner banner-third" id="audio">
        <img alt="机核 GADIO" data-stellar-ratio="1.3" src="https://alioss.g-cores.com/assets/banner/gadio-f7ed3e007552777820b9f5ffd892937cae37273efaf60593ea09e6abd851743e.jpg" style="transform: translate3d(0px, -130.247px, 0px);">
        <span>GADIO</span>
      </div>
      <h1 class="heading">电台</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xs-6" v-for="(item, index) in audio.showaudios" :key="item.id">
              <div class="showcase showcase-original showcase-audio">
                <div class="showcase_time">
                    <span>
                        <div class="type">AUDIO</div>
                    </span>
                    {{item.time}}
                </div>
                <div class="showcase_img">
                  <a href="">
                    <img :src="item.img" >  
                    <div class="showcase_meta">
                      <p>
                        <img :src="item.portrait" class="img-circle">
                      </p>
                      <p class="showcase_meta_nums">
                        <span>
                          <b class="fa fa-thumbs-up"></b>{{item.up}}
                        </span>
                        <span>
                          {{item.comment}}Comments
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
                <div class="showcase_text">
                  <h4>
                    <a>
                      {{item.maintitle}}
                    </a>    
                  </h4>
                  <div class="showcase_info">{{item.subtitle}}</div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <p class="tc">
        <a class="btn btn-hollow">更多</a>
      </p>
      <div class="banner banner-fourth" id="video">
        <img alt="机核视频" data-stellar-ratio="1.3" src="https://alioss.g-cores.com/assets/banner/video-ffa65e7c4e9d45c9f044625295c7f2baf58197c926566ff9c50533ea346baecb.jpg" style="transform: translate3d(0px, -165.806px, 0px);">
        <span>VIDEO</span>
      </div>
      <h1 class="heading">视频</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xs-6" v-for="(item, index) in video.showvideos" :key="item.id">
              <div class="showcase showcase-original showcase-video">
                <div class="showcase_time">
                    <span>
                        <div class="type">VIDEO</div>
                    </span>
                    {{item.time}}
                </div>
                <div class="showcase_img">
                  <a href="">
                    <img :src="item.img" >  
                    <div class="showcase_meta">
                      <p>
                        <img :src="item.portrait" class="img-circle">
                      </p>
                      <p class="showcase_meta_nums">
                        <span>
                          <b class="fa fa-thumbs-up"></b>{{item.up}}
                        </span>
                        <span>
                          {{item.comment}}Comments
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
                <div class="showcase_text">
                  <h4>
                    <a>
                      {{item.maintitle}}
                    </a>    
                  </h4>
                  <div class="showcase_info">{{item.subtitle}}</div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <p class="tc">
        <a class="btn btn-hollow">更多</a>
      </p>
    </div>
  </div>
</template>

<style>
  .home{
    margin-top: 80px;
    /* height: 4000px; */
    /* background: #f0f0f0; */
  }
  .block{
    /* height: 420px; */
    z-index: 1;
    opacity: 0.95;
    position: relative;
    margin-bottom: 23px;
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
  @media (min-width: 768px){
    .col-sm-8 {
      width: 66.6666666667%;
      float: left;
    }
    .col-sm-4 {
      width: 33.3333333333%;
      float: left;
    }
    .banner {
      height: 250px !important;
    }
    .banner span {
      font-size: 50px !important;
      line-height: 250px !important;
    }
  }

  @media (min-width: 480px){
    .col-xs-6 {
      width: 50%;
      float: left;
    }
  }
  @media (min-width: 992px){
    .col-md-4 {
      width: 33.3333333333%;
    }
    .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
      float: left;
    }
  }



  .Carousel{
    width: 100%;
    height: 100%;
  }

  /* 话题 */
  .topicEntry {
    /* height: 123px; */
    /* background: gold; */
    border: 1px solid #ddd;
    margin-bottom: 30px;
  }
  .row-sticky {
    height: 100%;   
    margin-left: -15px;
    margin-right: -15px;
    margin-left: auto;
    margin-right: auto;
  }
  /* .row {
    margin-left: -15px;
    margin-right: -15px;
  } */
  .row-sticky>div {
    padding: 0;
  }
  .topicHeader{
    color: #fff;
    height: 100%;
    display: block;
    margin: 0;
    /* padding: 15px; */
    position: relative;
    background-size: cover;
  }
  .col-sm-8 {
    position: relative;
    height: 100%;
  }
  .topic-header-vol{
    width: 9.5%;
    height: 78%;
    text-align: center;
    border: 1px solid #fff;
    margin-right: 20px;
    position: absolute;
    left: 2%;
    top: 10%;
    line-height: 1;
  }
  .vol-top{
    border-bottom: 1px solid #fff;
    width: 100%;
    height: 20%;
    float: left;
  }
  .vol-middle{
    font-size: 1.8em;
  }
  .vol-bottom{
    font-size: 2.8em;
    line-height: .75;
    margin-top: 8px;
  }
  .topic-header-heading {
    overflow: hidden;
    margin-bottom: 10px;
    max-width: 80%;
    width: 70% !important;
    height: 100%;
    margin-left: 20%;
    padding-top: 2%;
  }
  /* .topicHeader-entry h1.topicHeader_title {
    font-size: 18px;
  } */
  .topicHeader h1.topicHeader_title {
    font-size: 24px;
    margin: 0 0 8px 0;
  }

  .topicEntry .topicEntry_talk {
    display: block;
    height: 100%;
    /* padding: 15px; */
    padding-bottom: 0;
    font-size: 12px;
    text-decoration: none !important;
  }

  .center{
    padding: 8px;
  }
  .topicEntry_talk_user{
    position: absolute;
    bottom: 2px;
  }

  .topicEntry_talk:first-of-type{
    background: gold;
    /* animation: Fadeout 2s infinite; */
  }
  .topicEntry_talk:nth-of-type(2){
    background: green;
  }
  .topicEntry_talk:nth-of-type(3){
    background: pink;
  }
  .topicEntry_talk:nth-of-type(4){
    background: orange;
  }
  .topicEntry_talk:last-of-type{
    background: blueviolet;
  }
  .topicEntry .topicEntry_talk>h3 {
    margin: 0 0 8px 0;
    font-size: 14px;
    line-height: 15px;
    height: 15px;
    overflow: hidden;
    font-weight: bold;
  } 
  .topicEntry .topicEntry_talk>p {
    margin: 0;
    line-height: 18px;
    height: 36px;
    overflow: hidden;
  }
  .topicEntry .topicEntry_talk .topicEntry_talk_user {
    margin-top: 13px;
  }
  .media:first-child, .media-block:first-child {
    margin-top: 0;
  }
  .media, .media-block {
    margin-top: 15px;
  }
  .media_left, .media_right, .media_body {
    display: table-cell;
    vertical-align: top;
  }
  .media_left, .media>.pullLeft, .media-block>.pullLeft {
    padding-right: 10px;
  }
  .topicEntry .topicEntry_talk .topicEntry_talk_user img {
    width: 30px;
    height: 30px;
  }
  .img-circle {
    border-radius: 50%;
  }
  .topicEntry .topicEntry_talk .topicEntry_talk_user h4 {
    margin: 0 0 1px 0;
    font-size: 12px;
  }  
  .topicEntry .topicEntry_talk .topicEntry_talk_user p {
    margin: 0;
    color: #aaa;
  } 


  /* 滚动动画 */
  /* @keyframes Fade
  {
    0%   {display: none}
    100% {display: block}
  }
  @keyframes Fadeout
  {
    0%   {display: block}
    100% {display: none}
  } */

  .col-sm-4 {
    height: 100%;
  }
  .topicEntry_talksContainer{
    height: 100%;
  }
  .mint-swipe{
    height: 100%;
  }


  /* 主题内容 */
  .row {
    margin-left: -15px;
    margin-right: -15px;
  }
  .row:before, .row:after {
    content: " ";
    display: table;
  }
  .row:after {
    clear: both;
  }
  .row:before, .row:after {
      content: " ";
      display: table;
  }
  *:before, *:after {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  }
  .showcase {
    display: block;
  }
  .showcase .showcase_time {
    font-size: 12px;
    color: #909090;
  }
  .showcase .showcase_time span {
    float: right;
    color: #686868;
    font-weight: bold;
  }
  a {
    color: #888;
    text-decoration: none;
  }
  .showcase.showcase-original .showcase_img {
    padding-bottom: 56.25%;
    height: 0;
  }

  .showcase .showcase_img {
    position: relative;
    overflow: hidden;
  }
  .showcase.showcase-original .showcase_img>img, .showcase.showcase-original .showcase_img>a>img {
    position: absolute;
    top: 0;
    left: 0;
  }
  .showcase .showcase_img .showcase_meta {
    opacity: 0;
    filter: alpha(opacity=0);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10% 0;
    text-align: center;
    color: #fff;
    background: #f6695f;
    background: rgba(246,105,95,0.9);
    -webkit-transition: opacity ease 0.8s;
    -o-transition: opacity ease 0.8s;
    transition: opacity ease 0.8s;
  }
  .showcase .showcase_img .showcase_meta p {
    margin: 0 0 10%;
  }
  p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }
  .showcase .showcase_img .showcase_meta p {
    margin: 0 0 10%;
  }
  .showcase .showcase_img .showcase_meta p.showcase_meta_nums span {
    margin: 0 10px;
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .showcase .showcase_text {
    height: 130px;
    overflow: hidden;
  }
  .showcase h4 {
    position: relative;
    margin: 10px 0;
    font-size: 14px;
    color: #686868;
    font-weight: bold;
    max-height: 40px;
    overflow: hidden;
    line-height: 20px;
    padding-left: 15px;
  }
  .showcase .showcase_info {
    color: #909090;
    font-size: 12px;
    overflow: hidden;
    max-height: 57px;
  }
  .showcase h4:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 20px;
    background: #d9534f;
  } 
  .col-xxs-1, .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xxs-2, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xxs-3, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xxs-4, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xxs-5, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xxs-6, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xxs-7, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xxs-8, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xxs-9, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xxs-10, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xxs-11, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xxs-12, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
  }
 
 
  .banner {
    font-family: 'museosans', sans-serif;
    position: relative;
    height: 150px;
    margin-top: 46px;
    overflow: hidden;
    background: #222;
  }
  .banner img {
    position: absolute;
    left: 50%;
    top: -300px;
    margin-left: -1000px;
    width: 2000px;
    /* transform: translate3d(0, 0, 0); */
    transform: translate3d(0px, -148.528px, 0px);
  }
  .banner span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 150px;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #333;
    font-size: 25px;
  }
  .heading {
    position: relative;
    text-align: center;
    margin: 3em 0 2em;
    text-indent: 2em;
    letter-spacing: 2em;
    font-size: 16px;
  }
  .tc {
    text-align: center;
  }
  
  .btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    min-width: 50px;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.64345;
    border-radius: 999px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .btn-hollow {
    color: #909090;
    background-color: #f0f0f0;
    border-color: #909090;
    border-radius: 0;
    background-color: #fff !important;
  } 
  .type{
    font-size: 12px;
  }
  .showcase .showcase_img>img, .showcase .showcase_img>a>img {
    width: 100%;
    height: auto;
    border: none;
    /* -webkit-transition: -webkit-transform ease 0.8s;
    -o-transition: -webkit-transform ease 0.8s;
    transition: -webkit-transform ease 0.8s;
    -webkit-transition: -ms-transform ease 0.8s;
    -o-transition: -ms-transform ease 0.8s;
    transition: -ms-transform ease 0.8s;
    -webkit-transition: -o-transform ease 0.8s;
    -o-transition: -o-transform ease 0.8s;
    transition: -o-transform ease 0.8s;
    -webkit-transition: transform ease 0.8s;
    -o-transition: transform ease 0.8s;
    transition: transform ease 0.8s; */
  }
  .mint-swipe {
    height: 120px;
  }
</style>


<script>
export default {
  created () {
    this.$http.get('http://localhost:3000/bannar')
      .then(res => {
        this.bannar = res.data
      })
    this.$http.get('http://localhost:3000/talks')
      .then(res => {
        this.talk = res.data
    })
    this.$http.get('http://localhost:3000/xinwens')
      .then(res => {
        this.xinwen = res.data
    })
    this.$http.get('http://localhost:3000/hotspots')
      .then(res => {
        this.hotspot = res.data
    })
    this.$http.get('http://localhost:3000/articles')
      .then(res => {
        this.article = res.data
    })
    this.$http.get('http://localhost:3000/audios')
      .then(res => {
        this.audio = res.data
    })
    this.$http.get('http://localhost:3000/videos')
      .then(res => {
        this.video = res.data
    })
  },
  data () {
    return {
       bannar: [],
       talk: [],
       xinwen: [],
       hotspot: [],
       article: [],
       audio: [],
       video: []
    }
  },
  methods: {
    
  }
}
</script>
