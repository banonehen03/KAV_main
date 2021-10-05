/** Không tự động get như module system đâu - xem thông tin pc "WIN + R -> dxdiag" **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NDQ & PTAT",
  description: "Thông tin bot và phần cứng đang hoạt động",
  commandCategory: "Info",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://scontent.xx.fbcdn.net/v/t1.15752-9/241537987_2975978525956981_6149317573564926207_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=PRDZSJci2yMAX9voqTy&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=9201852fc4bc34cbaa9113a2d2e425c1&oe=616F1579",
  ];
   var callback = () => api.sendMessage({body:`Thông tin bot và phần cứng đang hoạt động:
• Thông tin bot đang sử dụng:
• CPU:....
• RAM: ....
• SSD or HDD: ....
• Windows Version: ....
• Network: .....
• Uptime max: ....
• Độ ổn định: Medium/Low
• Language: Tiếng Việt
• Computer name: .....
» Updating....`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };
