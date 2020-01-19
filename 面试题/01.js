// 如何统计出当前网页出现过多少种html 标签
/* 
考察内容：
1、dom 操作
2、去重
3、es6的掌握程度
*/

// 类数组对象
document.getElementsByTagName('*').map(v = v.tagName) 
// es6 拓展运算符, 然后便利去重
[...document.getElementsByTagName('*')].map(v = v.tagName) 
// 进阶做法 es6 的数据结构 Set
new Set([...document.getElementsByTagName('*')].map(v = v.tagName))
