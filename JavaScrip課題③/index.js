document.write("問1ーーーーーーーーーーーーーーーーーー<br>");
function menseki(hankei){
    return(hankei * hankei * 3.14);
}
document.write(menseki(5) + "<br>");
document.write(menseki(7) + "<br>");
document.write(menseki(10) + "<br>");



document.write("<br>");
document.write("問2ーーーーーーーーーーーーーーーーーー<br>");
function totalPrice(human,children){
    return human * 500 + children * 200;
}

// 関数作る
document.write("Aグループの合計金額は" + totalPrice(2,4) + "円です" + "<br>");
document.write("Bグループの合計金額は" + totalPrice(1,5) + "円です" + "<br>");
document.write("Cグループの合計金額は" + totalPrice(3,7) + "円です" + "<br>");