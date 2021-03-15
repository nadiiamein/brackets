module.exports = function check(str, bracketsConfig) {
	str = str.split("");
	let newStr = str.length,
    brack = [];

	for (let i = 0; i < newStr; i++) {
		for (let j = 0; j < bracketsConfig.length; j++) {
			if (str[i] == bracketsConfig[j][1] && brack[brack.length - 1] == bracketsConfig[j][0]) {
				brack.pop();
			} else if (str[i] == bracketsConfig[j][0]) {
				brack.push(str[i]);
			}
		}
	}
	return brack.length == 0 && newStr % 2 == 0 ? true : false;
}
