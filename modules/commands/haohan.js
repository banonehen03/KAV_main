module.exports.config = {
name: "haohan",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "hảo hán",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("hảo")==0 || (event.body.indexOf("Hảo")==0)) {
		var msg = {
				body: "hảo hán",
				attachment: fs.createReadStream(__dirname + `/noprefix/hảo.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}