(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{502:function(s,a,n){"use strict";n.r(a);var e=n(4),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"项目中遇见了师傅使用sass发现这个东西没有接触过，所以以此为基准线开始学习sass的知识。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目中遇见了师傅使用sass发现这个东西没有接触过，所以以此为基准线开始学习sass的知识。"}},[s._v("#")]),s._v(" 项目中遇见了师傅使用sass发现这个东西没有接触过，所以以此为基准线开始学习Sass的知识。")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("啥是Sass？？")])])]),s._v(" "),n("p",[s._v("说到这我们应该先说一些CSS的痛点，假如你需要在div下的a和li两种标签上加上不同的字体颜色，这个时候你就需要写两个语句，然而是使用了sass之后你只需要写一遍重复的代码。当然，Sass的强大之处不止体现在这，还有一些更加强大的功能，下面一一记录。")]),s._v(" "),n("h2",{attrs:{id:"变量的定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量的定义"}},[s._v("#")]),s._v(" 变量的定义")]),s._v(" "),n("p",[s._v("在Sass里有一种与Css完全不一样的设计就是Sass内部有"),n("strong",[s._v("变量")]),s._v("这一说，下面是例子：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$nav-color: #F90;//这个就是变量，用$开头\nnav {\n  $width: 100px;\n  width: $width;\n  color: $nav-color;//使用的时候用$来引用\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("++我们注意上面的nav块内有又定义了一个width变量，这个变量只会在这个块内起作用，在块外不能被引用。++")]),s._v(" "),n("p",[s._v("除了这种用法之外，我们还可以组合使用变量，类似于js中的字符串拼接：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$highlight-color: #F90;//定义变量\n.selected {\n  border: 1px solid $highlight-color;//普通样式+变量样式的使用。\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$highlight-color: #F90;//定义一个变量\n$highlight-border: 1px solid $highlight-color;//在定义另外一个变量的时候引入另外一个变量\n.selected {\n  border: $highlight-border;//调用变量\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("在变量的定义的时候注意一个细节，就是命名的时候-和_效果是一样的：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$link-color: blue;\na {\n  color: $link_color;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("++在上例中，$link-color和$link_color其实指向的是同一个变量。++")]),s._v(" "),n("h2",{attrs:{id:"嵌套使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#嵌套使用"}},[s._v("#")]),s._v(" 嵌套使用")]),s._v(" "),n("p",[s._v("嵌套使用我感觉就是让程序员偷懒的，让我们来看一个CSS的代码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#content article h1 { color: #333 }\n#content article p { margin-bottom: 1.4em }\n#content aside { background-color: #EEE }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("可以看到我们要重复的获取一个content的ID，假如我们使用Sass的嵌套，是怎么写的呢？")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#content {\n  article {\n    h1 { color: #333 }\n    p { margin-bottom: 1.4em }\n  }\n  aside { background-color: #EEE }\n}\n\n /* 编译后 */\n#content article h1 { color: #333 }\n#content article p { margin-bottom: 1.4em }\n#content aside { background-color: #EEE }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("++可以看到Sass的写法可以让Css的代码具有了逻辑性，增加了可读性的同时还能让我们偷个懒，嘿嘿。++")]),s._v(" "),n("p",[n("strong",[s._v("除了这种简单的场景之外，我们可能还会遇见一个有意思的场景，下面一一举例子：")])]),s._v(" "),n("h3",{attrs:{id:"需要给父元素添加自己的样式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#需要给父元素添加自己的样式"}},[s._v("#")]),s._v(" 需要给父元素添加自己的样式")]),s._v(" "),n("p",[s._v("其实这种和上面的差不多，只是在子元素样式的同一级加上赋予给父元素的样式。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#content {\n  background-color: #f5f5f5;\n  aside { background-color: #eee }\n}\n\n /* 编译后 */\n#content { background-color: #f5f5f5 }\n#content aside { background-color: #eee }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"父选择器的标识符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#父选择器的标识符"}},[s._v("#")]),s._v(" 父选择器的标识符&")]),s._v(" "),n("p",[s._v("说这个部分之前先说一下嵌套的Sass是怎么编译成CSS的。例如上面的例子，在将Sass编译的时候其实就是将里面子元素拿出来然后用空格把父子元素的名字隔开，Css里叫这个后代选择器。但是有的时候使用这种空格隔开的方式就不是很理想。如下例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("article a {\n  color: blue;\n  :hover { color: red }\n}\n\n /* 编译后 */\n article a {\n    color:blue\n }\n article a :hover{\n color: red\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("其实我们最初是想对a进行:hover的伪类添加，但是注意编译出来的a和:hover中间有空格，代表是article的所有后代都会加上这个伪类，这是不对的。这个时候就要使用我们的&来清除这个空格，应该如下写：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("article a {\n  color: blue;\n  &:hover { color: red }\n}\n /* 编译后 */\narticle a { color: blue }\narticle a:hover { color: red }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("这个时候就实现了我们最初想要的效果。")]),s._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",[s._v("其实&还有另外一个用法，但是我没看懂，如果哪位大佬看懂了，可以在下面评论区教教我，若是我看懂了，也会在评论区给上自己的理解！！！")]),s._v(" "),n("p",[s._v("官方说法如下：\n同时父选择器标识符还有另外一种用法，你可以在父选择器之前添加选择器。举例来说，当用户在使用IE浏览器时，你会通过JavaScript在《body》标签上添加一个ie的类名，为这种情况编写特殊的样式如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#content aside {\n  color: red;\n  body.ie & { color: green }\n}\n /* 编译后 */\n #content aside {color: red};\nbody.ie #content aside { color: green }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])]),s._v(" "),n("h3",{attrs:{id:"组合器：-、-和"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组合器：-、-和"}},[s._v("#")]),s._v(" 组合器：>、+和~")]),s._v(" "),n("blockquote",[n("p",[s._v("子组合选择器>选择一个元素的直接子元素。上例中，第一个选择器会选择article下的所有命中section选择器的元素。第二个选择器只会选择article下紧跟着的子元素中命中section选择器的元素。例子如下：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("article section { margin: 5px }\narticle > section { border: 1px solid #ccc }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("blockquote",[n("p",[s._v("同层相邻组合选择器+选择header元素后紧跟的p元素，例子如下：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("header + p { font-size: 1.1em }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("同层全体组合选择器~，选择所有跟在article后的同层article元素，不管它们之间隔了多少其他元素：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("article ~ article { border-top: 1px dashed #ccc }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"sass的引用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sass的引用"}},[s._v("#")]),s._v(" Sass的引用")]),s._v(" "),n("p",[s._v("和Css里的@import是一样的目的，但是Sass优化做的更好。(Css是执行到import才会引入文件，而Sass是直接归纳到到另外一个文件里。)")]),s._v(" "),n("h3",{attrs:{id:"文件部分导入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件部分导入"}},[s._v("#")]),s._v(" 文件部分导入")]),s._v(" "),n("p",[s._v("有的时候我们在写Sass文件的初衷不是想让他单独编译成一个css文件，而是想让他作为导入他的sass文件的一部分，这个时候我们叫这样的Sass文件为“局部文件”，我们也有一个特定的标识符来标识他。")]),s._v(" "),n("p",[n("strong",[s._v('此约定即，sass局部文件的文件名以下划线开头。这样，sass就不会在编译时单独编译这个文件输出css，而只把这个文件用作导入。当你@import一个局部文件时，还可以不写文件的全名，即省略文件名开头的下划线。举例来说，你想导入themes/_night-sky.scss这个局部文件里的变量，你只需在样式表中写@import "themes/night-sky";。')])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://note.youdao.com/yws/res/1407/C70DFD920AAC4C3AB0F9448E276AF878",alt:"image"}})]),s._v(" "),n("h3",{attrs:{id:"默认变量值"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#默认变量值"}},[s._v("#")]),s._v(" 默认变量值")]),s._v(" "),n("p",[s._v("和js一样，如果你重复定义一个变量，那么后面的定义会覆盖前面的赋值：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$link-color: blue;//第一次定义\n$link-color: red;//第二次定义\na {\ncolor: $link-color;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("++上面的例子中color会被设为red。++")]),s._v(" "),n("p",[s._v("那么假设你现在引入一个Sass文件，你可能希望这个引入他的Sass文件可以修改源文件中的一些属性值，那么可以使用一个!default标签.\n++这里我们注意，这个属性只能用于变量++。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$fancybox-width: 400px !default;\n.fancybox {\nwidth: $fancybox-width;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("++上面代码中，如果用一个Sass文件中引入他，且内部有声明过$fancybox-width变量，那么局部文件中的400px就会无效，如果用户没有这么设定，那么局部文件中的400px就会生效。++")]),s._v(" "),n("h3",{attrs:{id:"嵌套导入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#嵌套导入"}},[s._v("#")]),s._v(" 嵌套导入")]),s._v(" "),n("p",[s._v("我们可以在Css样式块内来嵌套导入一个局部文件，例如我们现在有一个叫“_blue-theme.scss”的局部文件：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("aside {\n  background: blue;\n  color: white;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("在引用他的时候可以这么写：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('.blue-theme {@import "blue-theme"}\n\n//生成的结果跟你直接在.blue-theme选择器内写_blue-theme.scss文件的内容完全一样。\n\n.blue-theme {\n  aside {\n    background: blue;\n    color: #fff;\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("++注意：在这个时候，局部文件中的变量或者混合器也只会在这个样式块内生效，并不是全局的++")]),s._v(" "),n("p",[s._v("若是要导入的是原生CSS文件的话，我们可以把文件类型改成Scss的，因为Scss是完全兼容Css的。")]),s._v(" "),n("h2",{attrs:{id:"混合器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#混合器"}},[s._v("#")]),s._v(" 混合器")]),s._v(" "),n("p",[s._v("混合器我感觉就是一个写在文件中的局部文件，为什么这么说，他是怎么定义的，我会一一记录。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@mixin rounded-corners {\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("和上面写的一样，是用@mixin来定义，然后写上你的代码块，那么这个东西怎么调用呢？")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("notice {\n  background-color: green;\n  border: 2px solid #00aa00;\n  @include rounded-corners;//应用混合器\n}\n\n/*编译后*/\n.notice {\n  background-color: green;\n  border: 2px solid #00aa00;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  border-radius: 5px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("如上所示，在引入的时候直接@include加上这个混合器的名字就可以了。")]),s._v(" "),n("p",[s._v("在这个时候你可能会有一个想法，这好像是个大型变量，我可以在很多地方来定义，同时引用。但事实上，大量的时候这个工具会导致加载缓慢，为了项目的稳定性，我们接下来讨论的是在什么时候使用它。")]),s._v(" "),n("h3",{attrs:{id:"什么时候用混合器呢？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么时候用混合器呢？"}},[s._v("#")]),s._v(" 什么时候用混合器呢？")]),s._v(" "),n("p",[s._v("使用构造器的初衷就是在不同的地方共享样式，当你发现你在重复写一段一样的样式的时候，你就可以使用这个东西了。")]),s._v(" "),n("p",[s._v("但是我感觉这么说是废话，我难道不知道么？，可是我在拿起键盘开始写之前我怎么知道我会不会重用他啊？。这个地方官方给出了一个很有意思的方式————你能不能给这个混合器想出一个简短合适的名字。")]),s._v(" "),n("h3",{attrs:{id:"混合器中的样式包含规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#混合器中的样式包含规则"}},[s._v("#")]),s._v(" 混合器中的样式包含规则")]),s._v(" "),n("p",[s._v("假如有段混合器代码是这样：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@mixin no-bullets {\n  list-style: none;\n  li {\n    list-style-image: none;\n    list-style-type: none;\n    margin-left: 0px;\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("我们可以看到上面的混合器中包含着一个li的样式块，那当引入他的时候会变成什么样子？")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ul.plain {\n  color: #444;\n  @include no-bullets;//引入\n}\n\n/*编译后*/\nul.plain {\n  color: #444;\n  list-style: none;\n}\nul.plain li {\n  list-style-image: none;\n  list-style-type: none;\n  margin-left: 0px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("++现在懂我想表达什么了吧++")]),s._v(" "),n("h3",{attrs:{id:"给混合器传参"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#给混合器传参"}},[s._v("#")]),s._v(" 给混合器传参")]),s._v(" "),n("p",[s._v("在使用混合器的时候不一定使用一样的样式，但是可能代码块长得是一样的，这个时候我们需要参数来自定义这个部分。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@mixin link-colors($normal, $hover, $visited) {\n  color: $normal;\n  &:hover { color: $hover; }\n  &:visited { color: $visited; }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("当引入的时候这么用：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("a {\n  @include link-colors(blue, red, green);\n}\n\n/*编译后*/：\na { color: blue; }\na:hover { color: red; }\na:visited { color: green; }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("你也可以使用键值对的形式来传参或者设定参数初始值")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("//键值对形式传参\na {\n    @include link-colors(\n      $normal: blue,\n      $visited: green,\n      $hover: red\n  );\n}\n//默认参数值可以是一个css属性，甚至是其他的参数\n@mixin link-colors(\n    $normal,\n    $hover: $normal,\n    $visited: $normal\n  )\n{\n  color: $normal;\n  &:hover { color: $hover; }\n  &:visited { color: $visited; }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h2",{attrs:{id:"选择器和继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#选择器和继承"}},[s._v("#")]),s._v(" 选择器和继承")]),s._v(" "),n("p",[s._v("在选择器这让我想起来JAVA的面向对象的编程，就像类继承类的使用一样，在Sass中样式也是可以继承样式的，还是，举个栗子(●ˇ∀ˇ●)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("//通过选择器继承继承样式\n.error {\n  border: 1px solid red;\n  background-color: #fdd;\n}\n.seriousError {\n  @extend .error;\n  border-width: 3px;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v('看似平平无奇的一段代码中还是有很多细节的，只要.seriousError继承了.error，就会继承.error的所有样式。换句话说，html标签中的class="seriousError"效果和class="seriousError error"那是一样的，两者的样式都会加上。')]),s._v(" "),n("p",[s._v("除了他会这么使用之外，所有和.error关的组合选择器样式都会被.seriousError以组合器的形式继承，如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("//.seriousError从.error继承样式\n.error a{  //应用到.seriousError a\n  color: red;\n  font-weight: 100;\n}\nh1.error { //应用到hl.seriousError\n  font-size: 1.2rem;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("那我们可以看到和混合器的作用是一样的，都是为了减少代码的复用，那么我们看看什么时候该用继承，什么时候该用混合器。")]),s._v(" "),n("h3",{attrs:{id:"何时使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#何时使用"}},[s._v("#")]),s._v(" 何时使用")]),s._v(" "),n("p",[s._v("这个地方我也感觉很抽象，官方文档中说是当有语义化关系的时候使用，例如上面的seriousError和error 的关系，一看就是更细化的关系。")])])}),[],!1,null,null,null);a.default=r.exports}}]);