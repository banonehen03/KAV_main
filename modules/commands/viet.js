/** Mod lại module "viet.js" nếu muốn nó hiển thị ảnh **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
	name: "viet",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nguyễn Duy Quân",
	description: "tiểu sử",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Tiểu sử :
Facebook: Anh Viet
Username: Vietcony
UID: 100054274066388
sinh : 03/10/2005
trường : THPT Phúc Thọ
quê: Tích Giang / Phúc Thọ /Hà Nội
Giới tính: nam
Mối quan hệ: Có ngiu
Sốđt: 0342804905
thông tin chút ít : hảo coder top1 thế giới chóp 1 không ai sánh bằng
Website: https://www.facebook.com/profile.php?id=100054274066388/`, event.threadID, event.messageID);
