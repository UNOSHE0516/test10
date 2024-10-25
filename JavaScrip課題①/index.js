document.write("問1ーーーーーーーーー<br>");
for(var i = 1; i <= 5; i++){
    document.write("★");
}


document.write("<br>");
document.write("<br>");
document.write("問2ーーーーーーーーー<br>");
for(var i = 1; i <= 2; i++){
    for(var j = 1; j <= 3; j++){
        document.write("★");
    }
    document.write("<br>");
}



document.write("<br>");
document.write("問3ーーーーーーーーー<br>");
for(var i = 1; i <= 2; i++){
    for(var j = 1; j <= 5; j++){
        document.write("☆");
    }
    document.write("<br>");
}



document.write("<br>");
document.write("問4ーーーーーーーーー<br>");
for(var i = 1; i <= 4; i++){
    for(var j = 1; j <= 5; j++){
        document.write("★");
    }
    document.write("<br>");
}



document.write("<br>");
document.write("問5ーーーーーーーーー<br>");
for(var i = 1; i <= 4; i++){
    for(var j = 1; j <= 3; j++){
        document.write("★");
    }
    document.write("<br>");
}



document.write("<br>");
document.write("問6ーーーーーーーーー<br>");
for(var i = 1; i <= 3; i++){
    for(var j = 1; j <= 3; j++){
        if(j % 2 == 0){
            document.write("☆");
        }
        else{
            document.write("★");
        }
    }
    document.write("<br>");
}



document.write("<br>");
document.write("問7ーーーーーーーーー<br>");
for(var i = 1; i <= 4; i++){
    for(var j = 1; j <= 3; j++){

        // 白黒白の順番で☆★☆☆★☆☆★☆☆★☆にする(★は2,5,8,11)
        if(j % 2 == 0 ){
            document.write("★");
        }
        else{
            document.write("☆");
        }
    }
    // document.write("<br>");
}



document.write("<br>");
document.write("問8ーーーーーーーーー<br>");
for(var i = 1; i <= 5; i++){
    for(var j = 1; j <= i; j++){
        document.write("★");
    }
    document.write("<br>");
}
