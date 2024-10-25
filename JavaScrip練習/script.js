
// document.write("hello");
// document.write("world<br>");
// alert("いいよ");
// confirm("いいん？")
// document.write("Hello world<br>");

// alert("別のページに移動します");
// confirm("betunope-jini");

// document.write(20170813);
// document.write("<br>");

// var a= "山本";
// document.write(a);
// document.write("<br>");

// var a1=3;
// document.write(++a1);


// 8
// var a1 =5;
// if(a1 > 0){
//     if(a1 < 10){
//         document.write("A<br>");
//     }
// }

// var test1 = 80;
// var test2 = 96;

// if(test1 >= 80){
//     if(test2 <= 89){
//         document.write("不合格");
//     }else if(test2 >= 90){
//         document.write("合格<br>");
//     }
// }


// 9
// var a = 3;

// switch(a){
//     case 2:
//     document.write("ok!");
//     break;
//     case 3:
//     document.write("うい<br>");
//     break;
// }

// var a = "☆";
// switch (a){
//     case "★":
//     document.write("黒い星です");
//     break;

//     case "☆":
//         document.write("白い星です");
//         break;

//     default:
//         document.write("その他の記号です");
// }

// var score =99;



// switch(score){
//     case 99:
//         document.write("おしい！");
//         break;

//     case 100:
//         document.write("満点です！");

//     default:
//         document.write(score + "点です！");

// }



// 10
// for(var i = 10; i >= 0; i--){
//     document.write(i);
//     document.write("/<br>");
// }
// 11 for文応用

// for(var i = 1; i <= 10; i++){
//     if(i % 2 == 0){
//         document.write(i +"<br>");
//     }
// }

for(var i = 1; i <= 5; i++){
    for(var j = 1; j <= 5; j++){
        if(j % 2 == 0){
            document.write("☆");
        }
        else{
            document.write("★");
        }
    }
    document.write("<br>");
}

// 12
var i = 1;

while(i <= 20){
    document.write(i);
    i++;
}

// 13

var myoji =["高木","田中","山本"];
document.write(myoji);

var color =["赤","黒","白"];
document.write(color[0]);
document.write(color[1]);
document.write(color[2]);

// 14
var myoji =["田中","高橋","斎藤"];
myoji.unshift("鈴木");
document.write(myoji);
// 15
function fruitsPrice(apple,orange){
    return(apple * 80) + (orange * 60)
}
document.write(fruitsPrice(10,20)+"円"+"<br>");
document.write(fruitsPrice(6,8)+"円");