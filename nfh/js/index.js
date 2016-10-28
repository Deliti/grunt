var loadMok=document.querySelector('.load-monk img');
var loadShd=document.querySelectorAll('.load-monk img')[1];
var gress=document.querySelector('.gress');
var plan=document.querySelector('.plan');
var loadPage=document.querySelector('.load');
var startPage=document.querySelector('.start');
var imgs=['last_ping.png','load_bg.png','load_mok1.png','load_mok2.png','load_mok3.png','load_shd1.png','load_shd2.png','loading.png','askA.png','askB.png','askC.png','askD.png','false.png','Logo.png','page2_10.png','page2_11.png','page2_12.png','page2_2.png','page2_3.png','page2_4.png','page2_5.png','page2_6.png','page2_7.png','page2_8.png','page2_9.png','page2_bg.png','page2_guang.png','page3_btn.png','page3_title.png','page4_luck.png','page4_more.png','page4_share.png','page4_title.png','page4_xuezhe.png','page7_share.png','page7_title.png','ques.png','true.png'];
var arrPics=[];
var index=0;


//预加载
for(var i=0;i<imgs.length;i++){
	arrPics[i]=new Image();
	arrPics[i].src='img/'+imgs[i];
	arrPics[i].onload=function(){
		index++;
		if(arrPics.length>=7){
//			loadMonky(loadMok,'img/load_mok1.png','img/load_mok2.png','moko','mokt','img/load_mok3.png','mokh');
//			loadMonky(loadShd,'img/load_shd2.png','img/load_shd1.png','shd1','shd2');
			gress.style.left=-(imgs.length-index)/imgs.length*100+'%';
			plan.innerHTML=parseInt(index/imgs.length*100)+'%';
		}
		if(index==imgs.length){
			loadPage.style.display='none';
			startPage.style.display='block';
		}
	}
}





//开场动画
function loadMonky(obj,src1,src2,cla1,cla2,src3,cla3){
	setInterval(function(){
		obj.setAttribute('src',src1);
		obj.className=cla1;
		setTimeout(function(){
			obj.setAttribute('src',src2);
			obj.className=cla2;
		},250)
		if(src3){
			setTimeout(function(){
				obj.setAttribute('src',src3);
				obj.className=cla3;
			},500)
		}
	},750)
}


//切换页面
var page2=document.querySelector('.page2');
var page2Btn=document.querySelector('.start-btn');
var page3=document.querySelector('.page3');
var page3Btn=document.querySelector('.page3-btn');
var page4=document.querySelector('.page4');
var qAndA=document.querySelector('.asks');
var questions=document.querySelector('.ask');
var answers=document.querySelectorAll('.an p');
var yOrN=document.querySelectorAll('.yorn img');
var lis=document.querySelectorAll('.an');
var icon=document.querySelector('.logo img');
var endPage=document.querySelector('.end');
var losePage=endPage.querySelector('.lose');
var luckyBtn=document.querySelectorAll('.lucky');
var xuezhe=document.querySelectorAll('.page4-title img')[1];
change(page2Btn,page2,page3);
change(page3Btn,page3,qAndA);

function change(obj1,Obj1,Obj2){
	document.addEventListener('touchstart',function(event){
		var target=event.target||window.event.target;
		if(target.parentNode==obj1||target==obj1){
			Obj1.style.display='none';
			Obj2.style.display='block';
		}
	},false)
}




//获取问题答案
function getRandom(min,max){
	return Math.round(Math.random()*(max-min)+min);
}
var arrQA=[];
var s={
	count1:[],
	count2:[],
	count3:[],
	count4:[],
	index:0,
	score:0,
	isAct:true
}

randomArr(0,questionList.brand.length-1,3,s.count1);
getQsAn(questionList.brand,s.count1);
randomArr(0,questionList.xiyou.length-1,7,s.count2);
getQsAn(questionList.xiyou,s.count2);
setQsAn();
function getQsAn(arr1,arr2){
	for(var j=0;j<arr2.length;j++){
		arrQA.push(arr1[arr2[j]]);
	}
	randomArr(0,9,10,s.count3); //打乱问题的顺序
}

function setQsAn(){
	for(var i=0;i<yOrN.length;i++){
		yOrN[i].parentNode.style.display='none';
	}
	s.count4=[];
	randomArr(0,3,4,s.count4);  //打乱答案的顺序
	questions.innerHTML=arrQA[s.count3[s.index]].question;
	for(var i=0;i<answers.length;i++){
		answers[i].innerHTML=arrQA[s.count3[s.index]].answer[s.count4[i]][0];
	}
	icon.src='icon_1-30/pic'+arrQA[s.count3[s.index]].icon+'.png';
}

qAndA.addEventListener('touchstart',function(event){
	var target=event.target||window.event.target;
	if(!s.isAct){
		return;
	}
	switch(target.parentNode){
		case lis[0]:
			if(arrQA[s.count3[s.index]].answer[s.count4[0]][1]){
				yOrN[0].src='img/true.png';
				yOrN[0].parentNode.style.display='block';
				s.score++;
			}else{
				yOrN[0].src='img/false.png';
				yOrN[0].parentNode.style.display='block';
			}
			break;
		case lis[1]:
			if(arrQA[s.count3[s.index]].answer[s.count4[1]][1]){
				yOrN[1].src='img/true.png';
				yOrN[1].parentNode.style.display='block';
				s.score++;
			}else{
				yOrN[1].src='img/false.png';
				yOrN[1].parentNode.style.display='block';
			}
			break;
		case lis[2]:
			if(arrQA[s.count3[s.index]].answer[s.count4[2]][1]){
				yOrN[2].src='img/true.png';
				yOrN[2].parentNode.style.display='block';
				s.score++;
			}else{
				yOrN[2].src='img/false.png';
				yOrN[2].parentNode.style.display='block';
			}
			break;
		case lis[3]:
			if(arrQA[s.count3[s.index]].answer[s.count4[3]][1]){
				yOrN[3].src='img/true.png';
				yOrN[3].parentNode.style.display='block';
				s.score++;
			}else{
				yOrN[3].src='img/false.png';
				yOrN[3].parentNode.style.display='block';
			}
			break;
	}
	if(target.parentNode!=lis[0]&&target.parentNode!=lis[1]&&target.parentNode!=lis[2]&&target.parentNode!=lis[3]){
		return;
	}
	s.isAct=false;
	s.index++;
	if(s.index<10){
		setTimeout(function(){
			s.isAct=true;
			setQsAn();
		},1000)
	}else{
		setTimeout(function(){
			if(s.score>=8){
				var scores=page4.getElementsByTagName('span');
				for(var i=0;i<scores.length;i++){
					scores[i].innerHTML=s.score;
				}
				xuezhe.setAttribute('src','img/page4_xuezhe.png');
				qAndA.style.display='none';
				startPage.style.display='block';
				page4.style.display='block';
			}else if(s.score>=6&&s.score<8){
				var scores=page4.getElementsByTagName('span');
				for(var i=0;i<scores.length;i++){
					scores[i].innerHTML=s.score;
				}
				xuezhe.setAttribute('src','img/page4_xuezhe1.png');
				qAndA.style.display='none';
				startPage.style.display='block';
				page4.style.display='block';
				
			}else{
				var loseScore=endPage.querySelectorAll('.lose span');
				for(var i=0;i<loseScore.length;i++){
					loseScore[i].innerHTML=s.score;
				}
				qAndA.style.display='none';
				losePage.style.display='block';
				endPage.style.display='block';
			}
		},1000)
	}
},false)

//产生随机数组
function randomArr(mins,maxs,num,arr){
	while(arr.length<num){
		var x=0;
		var a=getRandom(mins,maxs);
		if(arr.length==0){
			arr.push(a);
		}else{
			for(var y=0;y<arr.length;y++){
				if(a==arr[y]){
					break;
				}
				x++;
			}
			if(x==arr.length){
				arr.push(a);
			}
		}
	}
	console.log(arr);
}

//ending
var luckly=document.querySelector('.luckys');
var onceMore=document.querySelectorAll('.more');
changes(luckyBtn[0]);
changes(luckyBtn[1]);
function changes(obj){
	document.addEventListener('touchstart',function(event){
		var target=event.target||window.event.target;
		if(luckly.parentNode.style.display=='block'){
			return;
		}
		if(target.parentNode==obj||target==obj){
			page4.style.display='none';
			endPage.style.display='block';
			console.log(luckly.parentNode);
			luckly.parentNode.style.display='block';
			var a=getRandom(0,9);
			if(a>=4){
				luckly.getElementsByTagName('img')[1].src='img/fiv.png';
				luckly.getElementsByTagName('button')[0].className='lucky_btn1';
			}else{
				luckly.getElementsByTagName('img')[1].src='img/fifteen.png';
				luckly.getElementsByTagName('button')[0].className='lucky_btn2';
			}
		}
	},false)
}
console.log(onceMore);
oneMore();
function oneMore(){
	for(var i=0;i<onceMore.length;i++){
		console.log(onceMore[i]);
		onceMore[i].addEventListener('touchstart',function(event){
			var event=event||window.event;
			startPage.style.display='none';
			endPage.style.display='none';
			qAndA.style.display='block';
			s={
				count1:[],
				count2:[],
				count3:[],
				count4:[],
				index:0,
				score:0,
				isAct:true
			}
			
			randomArr(0,questionList.brand.length-1,3,s.count1);
			getQsAn(questionList.brand,s.count1);
			randomArr(0,questionList.xiyou.length-1,7,s.count2);
			getQsAn(questionList.xiyou,s.count2);
			setQsAn();
		},false)
	}
}
