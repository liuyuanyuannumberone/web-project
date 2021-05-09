/*
   * 正则表达式的作用:匹配字符串的内容
   * 正则表达式的组成:是由元字符或者限定符组成
          . 表示的是:除了\n以外的任意的一个字符;
          * 表示的是:前面的表达式出现了0次到多次   {0,} 表示的是前面的表达式出现了0次到多次,和 *一样的
          +  表示的是:前面的表达式出现了1次到多次   {1,} 表示的是前面的表达式出现了1次到多次,和 +一样的
          ?  表示的是:前面的表达式出现了0次到1次     {0,1} 表示的是前面的表达式出现了0次到1次,和 ?一样的
       {5,10} 表示的是前面的表达式出现了5次到10次
       {4} 前面的表达式出现了4次
            [0-9] 表示的是0到9之间的任意的一个数字,
            [1-7] 表示的是1到7之间的任意的一个数字,
            [a-z] 表示的是:所有的小写的字母中的任意的一个
           [A-Z] 表示的是:所有的大写的字母中的任意的一个
           [a-zA-Z] 表示的是:所有的字母的任意的一个
           [0-9a-zA-Z] 表示的是: 所有的数字或者是字母中的一个
     |    [0-9]|[a-z] 表示的是要么是一个数字,要么是一个小写的字母

           ^[a-z] 以小写字母开始
           ^[0-9] 以数字开头
           [^0-9] 非数字
           [^a-z] 非小写字母
          [a-z]$  必须以小写字母结束

       \d 数字中的任意一个,  \D 非数字中的一个
       \s 空白符中的一个    \S 非空白符
       \w 非特殊符号   ----  \W 特殊符号
       \b 单词的边界
   */


/*
    0.身份证的正则表达式:15位或者18位
            ([1-9][0-9]{14})|([1-9][0-9]{16}[0-9xX])
            ([1-9][0-9]{14})([0-9]{2}[0-9xX])?
    1.座机号码的正则表达式
            010-19876754
            0431-87123490

            [0-9]{3,4}[-][0-9]{8}
            \d{3,4}[-]\d{8}

    2.qq号码的正则表达式
             [1-9][0-9]{4,10}
             \d{5,11}

    3.手机号码的正则表达式
    130 131 132 133 134 135 136 137 138 139
    143 147
    150 151 152 153 154 155 156 157 158 159
    170 171 173 176 177
    180 181 182 183 184 185 186 187 188 189
    ([1][358][0-9][0-9]{8})|([1][4][37][0-9]{8})|([1][7][01367][0-9]{8})
    \d{11}


    4.邮箱的正则表达式,必须要记住的！！！！！！！！！！！！！
       邮箱 (6~18个字符，可使用字母、数字、下划线, 需要以字母开头)
    sd2113_3.-fd@itcast.com.cn
    1445179059@qq.com
    [0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}

    */





















