 module.exports.config = {
  name: "anhdim",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "KAV + A5K54",
  description: "Random ảnh girl",
  commandCategory: "random-img",
  usages: "ảnh dìm a5 k54",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
	var link = [
	"https://imgur.com/PSDlivg.jpg",
  "https://imgur.com/ojz5RDU.jpg",
  "https://imgur.com/1jGiwrd.jpg",
  "https://imgur.com/K3FJS8q.jpg",
  "https://imgur.com/NhyT7SS.jpg",
  "https://imgur.com/2G4QI6p.jpg",
  "https://imgur.com/eSJcXpV.jpg",
  "https://imgur.com/RCTlKvC.jpg",
  "https://imgur.com/zwqLjBO.jpg",
  "https://imgur.com/hWpIxWJ.jpg",
  "https://imgur.com/8az9W3h.jpg",
  "https://imgur.com/LsUCBon.jpg",
  "https://imgur.com/6ZntLu4.jpg",
  "https://imgur.com/6USt44c.jpg",
  "https://imgur.com/zQNXTD4.jpg",
  "https://imgur.com/QUvvoXs.jpg",
  "https://imgur.com/Lb1M7dr.jpg",
  "https://imgur.com/r7YHmX8.jpg",
  "https://imgur.com/5I1Yv3C.jpg",
  "https://imgur.com/R68hlHK.jpg",
  "https://imgur.com/kVT0SqD.jpg",
  "https://imgur.com/zh4Fobt.jpg",
  "https://imgur.com/XIPhdpA.jpg",
  "https://imgur.com/MqSRsiu.jpg",
  "https://imgur.com/xVr4KJu.jpg",
  "https://imgur.com/LG0ArxB.jpg",
  "https://imgur.com/FbEqi6P.jpg",
  "https://imgur.com/ggc5xvu.jpg",
  "https://imgur.com/UiyNA8m.jpg",
  "https://imgur.com/1vartR2.jpg",
  "https://imgur.com/MmkPREj.jpg",
  "https://imgur.com/W0Qpqnv.jpg",
  "https://imgur.com/MDKdNOk.jpg",
  "https://imgur.com/rrJqa8X.jpg",
  "https://imgur.com/WVKr7G0.jpg",
  "https://imgur.com/T5iNJIB.jpg",
  "https://imgur.com/rGqhs1X.jpg",
  "https://imgur.com/FLnAMo4.jpg",
  "https://imgur.com/KzvdVMQ.jpg",
  "https://imgur.com/wxvGHKE.jpg",
  "https://imgur.com/Nc96PD8.jpg",
  "https://imgur.com/XMOCjLr.jpg",
  "https://imgur.com/bO5PGsl.jpg",
  "https://imgur.com/GEia17o.jpg",
  "https://imgur.com/D1CGK60.jpg",
  "https://imgur.com/9lfcPtt.jpg",
  "https://imgur.com/NdSa0Js.jpg",
  "https://imgur.com/6XhwwF6.jpg",
  "https://imgur.com/7ZPfeBb.jpg",
  "https://imgur.com/GfkQAFS.jpg",
  "https://imgur.com/DDzlI78.jpg",
  "https://imgur.com/xUDfLn8.jpg",
  "https://imgur.com/YqtXdTc.jpg",
  "https://imgur.com/J4RAW2z.jpg",
  "https://imgur.com/0npN5Qs.jpg",
  "https://imgur.com/fSK5qUG.jpg",
  "https://imgur.com/vna0gJt.jpg",
  "https://imgur.com/DL1s1ZT.jpg",
  "https://imgur.com/80vjKo4.jpg",
  "https://imgur.com/WStkHX4.jpg",
  "https://imgur.com/ctGfYMr.jpg",
  "https://imgur.com/82tCaFq.jpg",
  "https://imgur.com/CWL7K2W.jpg",
  "https://imgur.com/zvX7fBA.jpg",
  "https://imgur.com/2IVD80i.jpg",
  "https://imgur.com/CC012MC.jpg",
  "https://imgur.com/QqMhNWq.jpg",
  "https://imgur.com/JKj02fb.jpg",
  "https://imgur.com/5ek2Nq7.jpg",
  "https://imgur.com/d3hyg8x.jpg",
  "https://imgur.com/M9ob0Hs.jpg",
  "https://imgur.com/PQ0AKVh.jpg",
  "https://imgur.com/guf3TS1.jpg",
  "https://imgur.com/iPdqZYr.jpg",
  "https://imgur.com/GDiOitM.jpg",
  "https://imgur.com/gtHgkM2.jpg",
  "https://imgur.com/VCDeNK9.jpg",
  "https://imgur.com/YoHzxA6.jpg",
  "https://imgur.com/C5POipq.jpg",
  "https://imgur.com/uOkY3e8.jpg",
  "https://imgur.com/xQboLpV.jpg",
  "https://imgur.com/Je22U2B.jpg",
  "https://imgur.com/ozhLprz.jpg",
  "https://imgur.com/S5FxXGW.jpg",
  "https://imgur.com/ZS8ZEYP.jpg",
  "https://imgur.com/SQPPyEz.jpg",
	];
	 var callback = () => api.sendMessage({body:`Chúc mừng, đây là ảnh dìm a5 k54 dành cho bạn\nSố ảnh hiện có: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };