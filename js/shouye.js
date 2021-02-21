// 轮播图
let n = 0;	//代表当前在第几张
let liList = $("#bannerimg li")
let bannerdot = $("#bannerdot")[0]
let ul = $("#bannerimg")

function autoPlay(){
    n++;
    if(n >= liList.length){
        n = 0;
    };
    changeImg()
}
setInterval(autoPlay, 3000);
function changeImg(){
    ul.animate({
        marginLeft:-(n * 375)    
    })
    dotList.removeClass("focus");
    dotList.eq(n).addClass("focus");
}

for(let i = 0; i < liList.length;i++){
    let dot = document.createElement("li");
    if(!i){dot.className = 'focus'}
    bannerdot.appendChild(dot)
}
let dotList = $("#bannerdot li");
dotList.click(function(){
    n = $(this).index();
    changeImg()
})