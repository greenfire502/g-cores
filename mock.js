var Mock = require('mockjs')
var fs = require('fs')
var Random = Mock.Random

var data = new Mock.mock({
    'bannar|3-5': [
        {
          'id|+1': 1,
          'bannar_img': '@image(1903x420, @color)'
        }
    ],
    // 话题
    // 话题id
    // 话题主题
    // 话题参与人数
    // 用户回复标题
    // 用户回复内容
    // 用户名
    // 用户id
    // 用户头像
    // 用户回复时间
    'talks|1': [
        {   
            'id|+1': 1,
            'theme': '@cword(8, 12)',
            'number|100-200': 1,
            'users|5': [
                {
                    'username': '@first()',
                    'userid|+1': 1,
                    'userportrait': '@image(30x30, @color)',
                    'usertitle': '@cword(5, 10)',
                    'usercontent': '@cword(5, 35)',
                    'recoverytime': "@date('2018-01-dd')"
                }
            ]
        }
    ],

    // 热点 
    'hotspots|1': [  
        {
            'firsthots|2':[
                {
                    'id|+1': 1,
                    'maintitle': '@cword(10, 25)',
                    'subtitle': '@cword(5, 15)',
                    'img': '@image(800x450, @color)',
                    'name': '@first()',
                    'portrait': '@image(30x30, @color)',
                    // 'contant': '@cword(200, 300)',
                    'time': "@date('2018-01-dd')",
                    'up|20-200': 1,
                    'comment|10-100': 1
                }
            ],
            "secondhots|6":[
                {
                    'id|+1': 3,
                    'maintitle': '@cword(10, 25)',
                    'subtitle': '@cword(5, 15)',
                    'img': '@image(320x180, @color)',
                    'name': '@first()',
                    'portrait': '@image(30x30, @color)',
                    // 'contant': '@cword(200, 300)',
                    'time': "@date('2018-01-dd')",
                    'up|20-200': 1,
                    'comment|10-100': 1
                }
            ]
        } 
        
    ],




    // 新闻
    // 新闻ID
    // 新闻主标题
    // 新闻副标题
    // 新闻图片
    // 新闻作者
    // 新闻作者头像
    // 新闻内容
    // 新闻时间
    // 新闻点赞数
    // 新闻评论

    'xinwens|1': [  
        {
            'newself': 1,
            'shownews|6':[
                {
                    'id|+1': 1,
                    'maintitle': '@cword(10, 25)',
                    'subtitle': '@cword(5, 15)',
                    'img': '@image(320x180, @color)',
                    'name': '@first()',
                    'portrait': '@image(30x30, @color)',
                    // 'contant': '@cword(200, 300)',
                    'time': "@date('2018-01-dd')",
                    'up|20-200': 1,
                    'comment|10-100': 1
                }
            ],
            "oldnews|35-45":[
                {
                    'id|+1': 7,
                    'maintitle': '@cword(10, 25)',
                    'subtitle': '@cword(5, 15)',
                    'img': '@image(320x180, @color)',
                    'name': '@first()',
                    'portrait': '@image(30x30, @color)',
                    // 'contant': '@cword(200, 300)',
                    'time': "@date('2018-01-dd')",
                    'up|20-200': 1,
                    'comment|10-100': 1
                }
            ]
        } 
        
    ],



    // 文章
    // 文章本身ID(第一分类)
    // 文章ID
    // 文章主标题
    // 文章副标题
    // 文章图片
    // 文章作者
    // 文章作者头像
    // 文章内容
    // 文章时间
    // 文章点赞数
    // 文章评论


    'articles|1': [  
        {
            'articleself': 2,
            'showarticles|6':[
                {
                    'id|+1': 1,
                    'maintitle': '@cword(10, 25)',
                    'subtitle': '@cword(5, 15)',
                    'img': '@image(320x180, @color)',
                    'name': '@first()',
                    'portrait': '@image(30x30, @color)',
                    // 'contant': '@cword(200, 300)',
                    'time': "@date('2018-01-dd')",
                    'up|20-200': 1,
                    'comment|10-100': 1
                }
            ],
            "oldarticles|35-45":[
                {
                    'id|+1': 7,
                    'maintitle': '@cword(10, 25)',
                    'subtitle': '@cword(5, 15)',
                    'img': '@image(320x180, @color)',
                    'name': '@first()',
                    'portrait': '@image(30x30, @color)',
                    // 'contant': '@cword(200, 300)',
                    'time': "@date('2018-01-dd')",
                    'up|20-200': 1,
                    'comment|10-100': 1
                }
            ]
        } 
        
    ],



    // 电台
    // 电台本身ID(第一分类)
    // 电台ID
    // 电台主标题
    // 电台副标题
    // 电台图片
    // 电台作者
    // 电台作者头像
    // 电台内容
    // 电台时间
    // 电台点赞数
    // 电台评论
    'audios|1': [  
        {
            'audioself': 3,
            'showaudios|6':[
                {
                    'id|+1': 1,
                    'maintitle': '@cword(10, 25)',
                    'subtitle': '@cword(5, 15)',
                    'img': '@image(320x180, @color)',
                    'name': '@first()',
                    'portrait': '@image(30x30, @color)',
                    // 'contant': '@cword(200, 300)',
                    'time': "@date('2018-01-dd')",
                    'up|20-200': 1,
                    'comment|10-100': 1
                }
            ],
            "oldaudios|35-45":[
                {
                    'id|+1': 7,
                    'maintitle': '@cword(10, 25)',
                    'subtitle': '@cword(5, 15)',
                    'img': '@image(320x180, @color)',
                    'name': '@first()',
                    'portrait': '@image(30x30, @color)',
                    // 'contant': '@cword(200, 300)',
                    'time': "@date('2018-01-dd')",
                    'up|20-200': 1,
                    'comment|10-100': 1
                }
            ]
        } 
        
    ],


    // 视频
    // 视频本身ID(第一分类)
    // 视频ID
    // 视频主标题
    // 视频副标题
    // 视频图片
    // 视频作者
    // 视频作者头像
    // 视频内容
    // 视频时间
    // 视频点赞数
    // 视频评论

    'videos|1': [  
        {
            'videoself': 4,
            'showvideos|6':[
                {
                    'id|+1': 1,
                    'maintitle': '@cword(10, 25)',
                    'subtitle': '@cword(5, 15)',
                    'img': '@image(320x180, @color)',
                    'name': '@first()',
                    'portrait': '@image(30x30, @color)',
                    // 'contant': '@cword(200, 300)',
                    'time': "@date('2018-01-dd')",
                    'up|20-200': 1,
                    'comment|10-100': 1
                }
            ],
            "oldvideos|35-45":[
                {
                    'id|+1': 7,
                    'maintitle': '@cword(10, 25)',
                    'subtitle': '@cword(5, 15)',
                    'img': '@image(320x180, @color)',
                    'name': '@first()',
                    'portrait': '@image(30x30, @color)',
                    // 'contant': '@cword(200, 300)',
                    'time': "@date('2018-01-dd')",
                    'up|20-200': 1,
                    'comment|10-100': 1
                }
            ]
        } 
        
    ]

})

fs.writeFile('db.json', JSON.stringify(data, null, 2), function () {
    console.log('写入成功')
  })