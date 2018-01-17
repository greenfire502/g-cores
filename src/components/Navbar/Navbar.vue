<template>
  <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar_header">
            <button type="button" class="navbar_toggle collapsed" data-toggle="collapse" data-target="#j_navbarCollapse" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar_brand navbar_brand-affix" target="_blank" href="http://shop124260606.taobao.com">
                <img class="navbar_brand-affix_white" src="https://alioss.g-cores.com/assets/store-logo-white-9b591191580455f5508d8c3be70070e541e53e080b02db926927fbd6c5eb9818.png" alt="">
                <img class="navbar_brand-affix_red" src="https://alioss.g-cores.com/assets/store-logo-ed751e2646f74761d83d1c404d6f28046f68dd8863b934be16beb8e3201cbbdd.png" alt="">
            </a>      
            <a class="navbar_brand navbar_brand-logo" id="j_logo" href="https://www.g-cores.com/">
                <img src="https://alioss.g-cores.com/assets/logo-new-0b66d0ff8fa364ff567e08b95ec448b14220b9d5612d7563ece5226b7443068b.png" alt="">
            </a>    
        </div>
        <div class="collapse collapsed navbar_collapse collapse in">
            <ul class="nav navbar_nav navbar_right">
                <li><a href="#account/signin">登录</a></li>
                <li><a href="#account/signup">注册</a></li>
            </ul>
            <form class="navbar_search" action="https://www.g-cores.com/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
                <span class="fa fa-search"></span>
                <input type="text" name="keyword" placeholder="Search">
            </form>
            <ul class="nav navbar_nav navbar_right">
                <li><a href="#new">新闻</a></li>
                <li><a href="#article">文章</a></li>
                <li><a href="#audio">电台</a></li>
                <li><a href="#video">视频</a></li>
                <li><a href="https://www.g-cores.com/gtalk">GTalk</a></li>
                <li><a href="#platform">平台</a></li>
                <li><a href="#special">专题</a></li>
                <li><a href="#download">app</a></li>
            </ul>
        </div>
      </div>
  </nav>
  
</template>

<style type="text/css">

@import url("../../styles/css/font-awesome.min.css");

     /* 媒体查询 */
    @media screen and (min-width: 768px){
         .container {
        width: 750px;
        }
    }
    @media screen and (min-width: 992px){
        .container {
        width: 970px;
        }
        .navbar-fixed-top .navbar_collapse, .navbar-static-top .navbar_collapse, .navbar-fixed-bottom .navbar_collapse {
            padding-left: 0;
            padding-right: 0;
        }
        .navbar_collapse.collapse {
            display: block !important;
            visibility: visible !important;
            height: auto !important;
            padding-bottom: 0;
            overflow: visible !important;
        }
        .navbar_collapse {
            padding: 20px !important;
            width: auto;
            border-top: 0;
            box-shadow: none;
        }
        .navbar_right {
            float: right !important;
            margin-right: -15px;
        }
        .navbar_nav {
            float: left;
            margin: 0;
        }
        .navbar_search {
            float: right;
            margin-left: 15px;
            margin-right: 15px;
            border-left: 1px solid #f0f0f0;
            border-right: 1px solid #f0f0f0;
            padding-top: 28.5px;
            padding-bottom: 28.5px;
        }
        .navbar_right ~ .navbar_right {
            margin-right: 0;
        }
        .navbar_nav>li {
            float: left;
        }
        .navbar_nav>li>a {
            padding-top: 28.5px;
            padding-bottom: 28.5px;
        }
        .navbar_toggle {
            display: none;
        }
         .navbar_header {
            width: 20% !important;
            height: 100%;
            float: left;
        }

    }
    @media screen and (min-width: 1200px){
        .container {
        width: 1000px;
        }
    }

    .navbar {
        transition: margin-top .7s ease 0s;
    }
    
    /* .container{
        height: 80px;
    } */

    .navbar_header {
        width: 100%;
        height: 100%;
        float: left;
    }

    ::-webkit-input-placeholder{
        color: rgb(219, 219, 219);
        font-size: 14px;
    }

    .navbar_toggle {
        position: relative;
        float: right;
        /* margin-right: 15px; */
        padding: 9px 10px;
        margin-top: 23px;
        margin-bottom: 23px;
        background-color: transparent;
        background-image: none;
        border: 1px solid transparent;
        border-radius: 5px;
    }

    .navbar_toggle:hover{
        background: #f0f0f0;
    }

    .navbar_collapse {
        padding: 80px;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }

    .navbar_toggle .icon-bar {
        background-color: #888;
        display: block;
        width: 22px;
        height: 2px;
        border-radius: 1px;
        margin: 3px 0;
    }

    .nav {
        margin-bottom: 0;
        padding-left: 0;
        list-style: none;
    }

    .navbar_search {
        padding: 10px;
        color: #999;
    }

    .nav>li {
        position: relative;
        display: block;
    }

    li {
        display: list-item;
        text-align: -webkit-match-parent;
    }

    .navbar-default .navbar_nav>li>a {
        color: #999;
    }

    .navbar_nav>li>a {
        padding-top: 10px;
        padding-bottom: 10px;
        line-height: 23px;
    }

    .navbar_nav>li>a:hover{
        color: #000;
    }

    .nav>li>a {
        /* height: 60px;
        line-height: 60px; */
        position: relative;
        display: block;
        padding: 10px 15px;
    }

    .navbar a {
        outline: 0;
    }

    .navbar_search input {
        border: none;
        outline: none;
        background: none;
        padding: 0 5px;
        width: 100px;
    }

    input, button, select, textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    button, input, optgroup, select, textarea {
        color: inherit;
        font: inherit;
        margin: 0;
    }

    .fa {
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    form {
        /* height: 60px;
        line-height: 60px; */
        display: block;
        margin-top: 0em;
    }

    .navbar-default {
        background-color: #fff;
        background-color: rgba(255,255,255,0.95);
        border-color: #f0f0f0;
    }

    .nvabar-right{
        float: right;
    }

    .navbar-fixed-top {
        top: 0;
        border-width: 0 0 1px;
    }

    /* .navbar_collapse{
        
    } */

    .collapse.in {
        display: none;
        visibility: visible;
    }

    .navbar-default .navbar_collapse, .navbar-default .navbar_form {
        border-color: #f0f0f0;
    }
    .container>.navbar_header, .container>.navbar_collapse, .container-fluid>.navbar_header, .container-fluid>.navbar_collapse {
        margin-right: -15px;
        margin-left: -15px;
    }

    .navbar-fixed-top .navbar_collapse, .navbar-fixed-bottom .navbar_collapse {
        max-height: 340px;
    }

    /* .collapse {
        display: none;
        visibility: hidden;
    } */

    .navbar_collapse {
        overflow-x: visible;
        padding-right: 15px;
        padding-left: 15px;
        border-top: 1px solid transparent;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
        -webkit-overflow-scrolling: touch;
    }

    .navbar_brand {
        float: left;
        padding: 23.5px 15px;
        font-size: 22px;
        line-height: 33px;
        /* height: 80px; */
        font-family: 'museosans', sans-serif;
        font-weight: 700;
    }

    .navbar_brand-affix img {
        margin: -8px 0 0 0;
        display: inline-block !important;
    }
    
    .navbar_brand>img {
        max-height: 28px;
        display: block;
    }
    img {
        vertical-align: middle;
        border: 0;
    }

    .navbar_brand-logo {
      padding-left: 15px !important;
      margin-left: 0 !important;
    }
    .navbar_brand-affix {
      padding-right: 0 !important;
    }
    @media (min-width: 992px) {
      .navbar_brand-affix {
        margin-left: -50px !important;
      }
      .navbar_brand-logo {
        padding-left: 0 !important;
        margin-left: 0 !important;
      }
    }
  
    .navbar_brand-affix img {
      margin: -8px 0 0 0;
      display: inline-block !important;
    }
    .navbar_brand-affix .navbar_brand-affix_red {
      display: none !important;
    }
    .navbar_brand-affix:hover .navbar_brand-affix_white {
      display: none !important;
    }
    .navbar_brand-affix:hover .navbar_brand-affix_red {
      display: inline !important;
    }

    .navbar-default .navbar_collapse, .navbar-default .navbar_form {
        border-color: #f0f0f0;
    }
  </style>

  <script>
  export default {
    
  }
  </script>
  
