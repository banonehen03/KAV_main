/** Mod lại module "bot.js" nếu muốn nó hiển thị ảnh **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
	name: "adm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nguyễn Duy Quân",
	description: "Thông tin người điều hành bot",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Thông tin người điều hành bot:
Facebook: Anh Viet
Username: Vietcony
UID: 100054274066388
Giới tính: trai thẳng ( ͡° ͜ʖ ͡°)
Mối quan hệ: Có 10 người yêu
Sốđt: 0342804905
Website: https://www.facebook.com/profile.php?id=100054274066388/`, event.threadID, event.messageID);
