var r = /abc/igm;
console.log(r.ignoreCase);// true
console.log(r.global);// true
console.log(r.multiline); // true

//test正则实例对象的test方法返回一个布尔值，表示当前模式是否能匹配参数字符串。
/cat/.test('cats and dogs'); // true


// lastIndex：返回一个整数，表示下一次开始搜索的位置。该属性可读写，但是只在进行连续搜索时有意义:
//source：返回正则表达式的字符串形式（不包括反斜杠），该属性只读。
var r1 = /abc/;
console.log(r1.source); // "abc"
var r2 = /x/g;   //设置g  全局搜索
var s = '_x_x';
console.log(r2.lastIndex); // 0
console.log(r2.test(s)); // true
console.log(r2.lastIndex); // 2
console.log(r2.test(s)); // true
console.log(r2.lastIndex); // 4
console.log(r2.test(s)); // false

//  带有g修饰符时，可以通过正则对象的lastIndex属性指定开始搜索的位置。
var r3 = /x/g;
var s1 = '_x_x';
r3.lastIndex = 4;
console.log(r3.test(s1)); // false
console.log(r3.lastIndex); // 0
console.log(r3.test(s1));//true

//注意，带有g修饰符时，正则表达式内部会记住上一次的lastIndex属性，这时不应该更换所要匹配的字符串，否则会有一些难以察觉的错误。
var r4 = /bb/g;
console.log(r4.test('bb')); // true
console.log(r4.test('-bb-')); // false

//正则实例对象的exec方法，用来返回匹配结果。如果发现匹配，就返回一个数组，成员是匹配成功的子字符串，否则返回null。
var s2 = '_x_x';
var r5 = /x/;
var r6 = /y/;
console.log(r5.exec(s2)); // ["x"]
console.log(r6.exec(s2)); // null

console.log("=======");




//正则表达式中:g 表示的是全局模式匹配
//正则表达式中:i 表示的是忽略大小写

//提取所有数字
var str1 = "中国移动:10086,中国联通:10010,中国电信:10000";
var array1 = str1.match(/\d{5}/g);
console.log(array1); //[10086,10010,10000];



//提取所有邮箱
var str2 = "123123@xx.com,fangfang@valuedopinions.cn 286669312@qq.com 2、emailenglish@emailenglish.englishtown.com 286669312@qq.com...";
var array2 = str2.match(/\w+@\w+\.\w+(\.\w+)?/g);
console.log(array2);


//提取这里的日
var str3 = "2017-11-12";
var array3 = str3.match(/(\d{4})[-](\d{2})[-](\d{2})/g);
console.log(array3);
console.log(RegExp.$3);  //   因为有() 所以分组了,可以提取组,12

//提取邮箱
var email = "shuaiyangtaishuaile@itcast.com.cn";
email.match(/([0-9a-zA-Z_.-]+)[@]([0-9a-zA-Z_-]+)(([.][a-zA-Z]+){1,2})/);
console.log(RegExp.$1);//用户名 shuaiyangtaishuaile
console.log(RegExp.$2);//126  itcast
console.log(RegExp.$3);//域名  .com.cn;

console.log("3333333333333333333");

//replace
var str4 = "小苏好帅哦,真的是太帅了,帅,就是真帅";
str4 = str4.replace(/帅/g, "猥琐");
console.log(str4);

//trim() 去空格
var str5 = "  哦买噶的    ,太幸福了  ";
str5 = str5.trim();
console.log("===" + str5 + "===");

//去掉所有空格
var str6 = "  哦买噶的    ,太幸福了  ";
str6 = str6.replace(/\s+/g, "");
console.log("===" + str6 + "===");


//所有的h都替换成S
var str7 = "HhpphH";
str7 = str7.replace(/[h]/gi, "S");
console.log(str7);


var str8 = "中国移动:10086,中国联通:10010,中国电信:10000";
var reg = /\d{5}/g;
var result = reg.exec(str8);
while (result != null) {
    console.dir(result);
    result = reg.exec(str8);
}

