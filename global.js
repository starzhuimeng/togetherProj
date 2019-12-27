export default{
	codeStr : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
	serverPath : "http://218.56.29.59:38080",//服务器地址
	rootName : "root",//管理员账号
	rootPass : "123456",//管理员密码
	account : "17661910526",//用于存储用户账号
	getPid:function(){
		var str = ""
		for(var i = 0;i < 8;i++){
			str += this.codeStr[parseInt(Math.random()*62)-1]
		}
		return str
	},
	userInfo:{}
	
}