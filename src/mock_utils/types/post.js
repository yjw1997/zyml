import Mock from 'mockjs'
const Random = Mock.Random
export const POST = {
  '/user/userinfo': (req, res) => {
    let body = JSON.parse(req.body)
    console.log('userName', body.userName)
    console.log('userPassword', body.userPassword)
    return {
      'status': 200,
      'data': {
        'userid': Random.id(), // 随机生成用户id
        'username': Random.cname(), // 随机生成中文名字
        'date': Random.date(), // 随机生成日期
        'avatar': Random.image('200x200', 'red', '#fff', 'avatar'), // 生成图片
        'description': Random.cparagraph(), // 描述
        'ip': Random.ip(), // IP地址
        'email': Random.email()// email
      }
    }
  }
}
