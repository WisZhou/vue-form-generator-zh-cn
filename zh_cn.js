_.extend(VueFormGenerator.validators.resources, {
  fieldIsRequired: "此处必填",
	invalidFormat: "无效的格式",

	numberTooSmall: "不得小于{0}",
	numberTooBig: "不得大于{0}",
	invalidNumber: "无效的数字",

	textTooSmall: "请至少输入{1}个字符，当前已输入{0}个",
	textTooBig: "不得大于{1}个字符，但钱已输入{0}个",
	thisNotText: "无效的字符",

	thisNotArray: "无效的数组",

	selectMinItems: "请至少选择{0}个选项",
	selectMaxItems: "最多选择{0}个选项",

	invalidDate: "无效的时间",
	dateIsEarly: "不得早于{1}，当前输入{0}",
	dateIsLate: "不得晚于{1}，当前输入{0}",

	invalidEmail: "无效的Email",
	invalidURL: "无效的URL",

	invalidCard: "无效的卡号格式",
	invalidCardNumber: "无效的卡号",

	invalidTextContainNumber: "无效的字符，不能包含数字或特殊字符",
	invalidTextContainSpec: "无效的字符，不能包含特殊字符"
});
