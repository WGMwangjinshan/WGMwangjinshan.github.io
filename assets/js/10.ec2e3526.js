(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{484:function(s,n,a){s.exports=a.p+"assets/img/1.98cf4635.png"},485:function(s,n,a){s.exports=a.p+"assets/img/2.f4e70117.png"},486:function(s,n,a){s.exports=a.p+"assets/img/3.986d96f8.png"},526:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("那说深拷贝和浅拷贝，就要说两者的区别才能深入理解这两种拷贝方式。")]),s._v(" "),e("p",[e("strong",[s._v("那如何区分呢？")])]),s._v(" "),e("p",[e("strong",[s._v("如何区分深拷贝与浅拷贝，简单点来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝，拿人手短，如果B没变，那就是深拷贝，自食其力。")])]),s._v(" "),e("p",[s._v("==在这我做个区分，我们看下面的这个例子：==")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var a = 1;\nb = a; // 栈内存会开辟一个新的内存空间，此时b和a都是相互独立的\nb = 2;\nconsole.log(a); // 1\n\x3c!--我们可以看到这里不是深拷贝，因为深拷贝是针对复杂的object--\x3e\n\x3c!--类型，这个是基本数据类型，名字和值都会存储到栈空间里--\x3e\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("==但是如果是引用数据类型的话就不一样了：如果是引用数据类型，名字存在栈内存中，值存在堆内存中，但是栈内存会提供一个引用的地址指向堆内存中的值==")]),s._v(" "),e("p",[e("strong",[s._v("这里我们来看浅拷贝是怎么拷贝引用数据类型的：")])]),s._v(" "),e("p",[e("strong",[s._v("这是一个引用数据类型在内存中的存储方式（栈内存存储key，和一个指向堆内存val的堆地址。）")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(484),alt:"image"}})]),s._v(" "),e("p",[e("strong",[s._v("下面是一个b=a的操作过程。这是一个浅拷贝，我们看到在栈内存中，存储的是b的key和指向堆地址的value，a和b的指向是一样的。")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(485),alt:"image"}})]),s._v(" "),e("p",[e("strong",[s._v("所以在更改a的值时候，b的值也会跟着修改")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(486),alt:"image"}})]),s._v(" "),e("p",[s._v("=="),e("strong",[s._v("我们来看深浅拷贝的实现：")]),s._v("==")]),s._v(" "),e("blockquote",[e("p",[s._v("浅拷贝实现")])]),s._v(" "),e("p",[s._v("（1）循环一层复制：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 只复制第一层的浅拷贝\nfunction simpleCopy(obj1) {\n   var obj2 = Array.isArray(obj1) ? [] : {};\n   for (let i in obj1) {\n   obj2[i] = obj1[i];\n  }\n   return obj2;\n}\nvar obj1 = {\n   a: 1,\n   b: 2,\n   c: {\n         d: 3\n      }\n}\nvar obj2 = simpleCopy(obj1);\nobj2.a = 3;\nobj2.c.d = 4;\nalert(obj1.a); // 1\nalert(obj2.a); // 3\nalert(obj1.c.d); // 4\nalert(obj2.c.d); // 4\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("p",[s._v("（2）只有一个参数的Object.assign方法：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var obj = {\n    a: 1,\n    b: 2\n}\nvar obj1 = Object.assign(obj);\nobj1.a = 3;\nconsole.log(obj.a) // 3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("（3）直接赋值：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("let a=[0,1,2,3,4],\n    b=a;\nconsole.log(a===b);\na[0]=1;\nconsole.log(a,b);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("blockquote",[e("p",[s._v("深拷贝实现（在这我只说几个我之前用过的方法，有的方法看着很复杂，达到的效果是一样的）")])]),s._v(" "),e("p",[s._v("（1）用JSON对象来实现深拷贝")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function deepClone2(obj) {\n  var _obj = JSON.stringify(obj),\n    objClone = JSON.parse(_obj);\n  return objClone;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("++这种方法没办法深拷贝对象中的方法，会显示undefined++")]),s._v(" "),e("p",[s._v("（2）用JQ的extend方法")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var array = [1,2,3,4];\nvar newArray = $.extend(true,[],array); // true为深拷贝，false为浅拷贝\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("（3）如果对象没有方法类型的话，都是基本类型，就可以使用Object.assign来实现深拷贝，但是要给他复制给一个空的对象")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var obj = {\n    a: 1,\n    b: 2\n}\nvar obj1 = Object.assign({}, obj); // obj赋值给一个空{}\nobj1.a = 3;\nconsole.log(obj.a)；// 1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("（4）还有一种我认为有点蠢但是好理解还效的方法（手动深拷贝）：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("let obj1 = {\n   a: 1,\n   b: 2\n}\nlet obj2 = {\n   a: obj1.a,\n   b: obj1.b\n}\nobj2.a = 3;\nalert(obj1.a); // 1\nalert(obj2.a); // 3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("（5）上面我们说的都是堆一级的对象的深拷贝，想一下，若是一个对象下面还有一个方法属性，而不是基础数据类型的话，那么要怎么深度拷贝呢？，下面就是我在CSDN找到的一个终极办法：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('        function DeepCopy(object) {\n            let resultObject = {};\n            for (let obj in object) {\n                if (typeof (object[obj]) == "object" && !Array.isArray(object[obj])) {\n                    let x = {}\n                    x[obj] = DeepCopy(object[obj])\n                    Object.assign(resultObject, x);\n                } else {\n                    let x = {};\n                    x[obj] = object[obj];\n                    Object.assign(resultObject, x);\n                }\n            }\n            return resultObject;\n        }\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);