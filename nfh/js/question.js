/**
 * User: PatrickSze/22632643@qq.com
 * Date: 2015/12/1
 * Time: 20:00
 */


var questionList = {

    brand: [
        {question: '“黑~芝麻糊~~~哎”,南方黑芝麻的经典广告片“叫卖篇”哪一年在电视上风靡全国？', answer:[["2046年",0],["1990年",0],["1991年",1],["1997年",0]],icon:22},
        {question: '“南方黑芝麻”品牌发源地在哪里呢？', answer:[["南极",0],["南山南",0],["广西南宁",0],["广西容县",1]],icon:23},
        {question: '砖家建议，一天吃多少克黑芝麻为宜？', answer:[["30-40g",0],["90-100g",0],["10-15g",1],["想吃多少吃多少",0]],icon:24},
        {question: '下面不属于黑芝麻功能特性的是？', answer:[["抗衰老",0],["提高生育能力",0],["黑头发",0],["得道成仙",1]],icon:25},
        {question: '100g黑芝麻的含钙量是100g牛奶含钙量的多少倍？', answer:[["100倍",0],["10倍",0],["7.5倍",1],["15倍",0]],icon:26},
        {question: '南方黑芝麻糊2015年的最新广告片“音乐篇”中，翩翩起舞的女主角身穿什么颜色的裙子呢？', answer:[["黑色",0],["黄色",1],["蓝色",0],["粉色",0]],icon:27},
        {question: '这是一道送分题，双12晚上，几点几分锁定浙江卫视可以看南到方黑芝麻糊冠名的《西游奇遇记》首播？', answer:[["20：20",1],["20：10",0],["20：00",0],["20：30",0]],icon:28},
        {question: '南方黑芝麻糊冠名的《西游奇遇记》里金星老师扮演的是？', answer:[["白龙马",0],["女儿国国王",0],["太白金星",1],["观音菩萨",0]],icon:29},
        {question: '南方黑芝麻糊冠名的《西游奇遇记》首站在哪里拍摄的？', answer:[["花果山",0],["西安",1],["火焰山",0],["北京",0]],icon:30}
    ],

    xiyou: [
        {question: '牛魔王的老婆“铁扇公主”又名？', answer:[["小甜甜",0],["红佛女",0],["药叉女",0],["罗刹女",1]],icon:1},
        {question: '八戒为什么长的像个猪？', answer:[["整容失败",0],["他本来就那模样",0],["投错了胎",1],["他喜欢猪，故意变成这样",0]],icon:2},
        {question: '玉皇大帝和王母娘娘到底什么关系？', answer:[["夫妻",0],["母子",0],["同事",1],["不清不楚的关系",0]],icon:3},
        {question: '黑熊精偷了唐僧的袈裟是为什么？', answer:[["别人的就是好的",0],["开生日趴体",1],["穿的拉轰、能泡妞",0],["金光闪闪，壕气",0]],icon:4},
        {question: '二郎神和玉帝是什么关系？', answer:[["父子",0],["叔侄",1],["基友",0],["蓝朋友",0]],icon:5},
        {question: '菩提始祖为什么轰走了孙悟空？', answer:[["猴子吃的太多",0],["猴子长的太帅",0],["猴子是逗逼",0],["猴子装逼",1]],icon:6},
        {question: '白龙马是谁的儿子？', answer:[["东海龙王",0],["南海龙王",0],["北海龙王",0],["西海龙王",1]],icon:7},
        {question: '通天河里的妖怪原本是观音菩萨池塘里的哪条鱼？', answer:[["鲤鱼",1],["鲶鱼",0],["金鱼",0],["金龙鱼",0]],icon:8},
        {question: '孙悟空师从何处？', answer:[["唐僧",0],["菩提老祖",1],["自学成才",0],["太白金星",0]],icon:9},
        {question: '西游记是谁写的？', answer:[["吴承恩",1],["吴奇隆",0],["吴孟达",0],["吴彦祖",0]],icon:10},
        {question: '原著中的孙悟空和下面哪个明星身高最接近？', answer:[["郭敬明",1],["隔壁老王",0],["何炅",0],["黄晓明",0]],icon:11},
        {question: '白龙马和被哪吒扒皮的龙三太子是什么关系？', answer:[["堂兄弟",1],["男朋友",0],["大舅舅",0],["好基友",0]],icon:12},
        {question: '当年是哪个妖精先谣言“吃唐僧肉可长生不老”？', answer:[["黑熊怪",0],["蛇精男",0],["狮驼洞三怪",0],["金角大王",1]],icon:13},
        {question: '要进盘丝洞，要先喊？', answer:[["傅文佩，你开门啊",0],["芝麻开门",1],["我是盘丝大仙",0],["妖精，哪里逃！",0]],icon:14},
        {question: '猪八戒前身“天蓬元帅”在天庭任什么职？', answer:[["总政少将",0],["陆军军委",0],["海军总司令",1],["志愿兵",0]],icon:15},
        {question: '红孩儿的真实年纪是？', answer:[["5岁",0],["300岁",1],["500岁",0],["100岁",0]],icon:16},
        {question: '孙悟空大闹蟠桃会，变成谁的样子骗吃骗喝？', answer:[["王母娘娘",0],["赤脚大仙",1],["太上老君",0],["太白金星",0]],icon:17},
        {question: '因为谁导致唐僧赶走孙悟空？', answer:[["孔雀公主",0],["白骨精",1],["狐狸精",0],["金鼻白毛鼠精",0]],icon:18},
        {question: '下列人物中没有喝过“孙、八、僧”三人组的圣水的是？', answer:[["虎力大仙",0],["鹿力大仙",0],["羊力大仙",0],["牛力大仙",1]],icon:19},
        {question: '第一个想娶唐僧的女妖怪是？', answer:[["凤姐",0],["琵琶精",1],["蝎子精",0],["玉兔精",0]],icon:20},
        {question: '太上老君的御用炼丹炉童子是？', answer:[["青狮魔王&白象魔王&大鹏魔王&虎威魔王",0],["奔波儿灞&灞波儿奔",0],["金角大王&银角大王",1],["辟寒大王&辟暑大王&辟尘大王",0]],icon:21}

    ]

}