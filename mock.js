var Mock = require('mockjs')
var fs = require('fs')

var data = new Mock.mock({
    'bannar|3-5': [
        {
          'id|+1': 1,
          'bannar_img': '@image(1903x420, @color)'
        }
    ]

})

fs.writeFile('db.json', JSON.stringify(data, null, 2), function () {
    console.log('写入成功')
  })