# 网易云音乐

它是一个功能齐全的PC端网易云音乐，PC端软件的功能他基本上都能够实现，例如听歌，听电台，看自己喜欢的视频，发表自己的评论，通过云盘上传自己喜欢的歌曲等等

##### 预览地址：http://47.93.100.102:9000

###### ps:记得要先进行登录，登陆后刷新就可以了，因为好多功能是需要登录才可以实现的。  这是本人账号，请各位不能乱改谢谢
###### 完整代码在master分支，main分支的代码并不全，如若克隆的话，请先切换到master分支
###### 登录时不用使用二维码登录，只做到了给它显示出来，并不能正常登录的(本人太菜了...)

## 功能实现：

###### 1.推荐歌曲/歌单/歌手/排行榜
###### 2.歌单详情/歌手详情/歌单(歌曲)评论收藏者等
###### 3.电台
###### 4.视频及MV
###### 5.动态和热门话题
###### 6.私人FM推荐
###### 7.最近播放/音乐云盘/个人收藏
###### 8.创建歌单/收藏歌单

## 技术栈

###### 1.vue全家桶：主要应用vue vue-router(单页面应用路由) vuex(管理公共组建状态)
###### 2.element UI库：一款精美实用的UI框架
###### 3.axios：发送请求
###### 4.less：css预编译语言
###### 5.webpack：配置vue-cli脚手架
###### 6.lyric-parser：歌词解析
###### 7.js-cookie：cookie缓存，存储个人信息状态
###### 8.qs:用于生成二维码

### 安装运行
###### install dependencies
npm install

###### serve with hot reload at localhost:8080
npm run dev

###### build for production with minification
npm run build

###### build for production and view the bundle analyzer report
npm run build --report

### 最后
###### 1.首先感谢Binaryify能够创造并一直维护如此优秀的接口，感谢大佬的开源精神
###### 2.本人能力有限，刚接触vue两个多月写的，该项目还存在布局无法响应式，歌词和歌曲进度并不吻合，电台切换会失效问题等。
