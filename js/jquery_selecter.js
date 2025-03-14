//sec1
$(function () {
    $('.title1').css("color" , "red")
})

//sec2
$
(function () {
    $(".sec2 *").css("border", "3px solid blue")
})

//sec3
$(function () {
    $(".tit3").css("background-color", "yellow")
    .css("border", "2px dashed red");
})

//sec4
$(function () {
    $(".sec4 h2").css("background-color", "aqua")
    .css("border", "2px dashed red")
})

//sec5
$(function () {
    $(".sec5 h2, .sec5 h4").css("background-color", "aqua")
    .css("border", "2px solid red")
})

//sec6
$(function () {
    $(".sec6 h2.tit6").css("background-color", "aqua")
    .css("border", "2px dashed red")
})

//sec7
$(function () {
    $("#list_1").parent().css("border", "2px dashed red")
})

//sec8
$(function () {
    $(".sec8 h1").css("background-color", "yellow")
    .css("border", "2px dashed red")
})

//sec9
$(function () {
    var style1 = { "background-color" : "aqua", "border" : "2px solid red"}
    var style2 = {"background-color" : "yellow", "border" : "2px dashed red"}
   
    $("#txt9").prevAll().css(style1)
    $("#txt9").nextAll().css(style2)
});

//sec10
$(function () {
    var style10 = { "background-color" : "aqua", "border" : "2px solid red"}
    $("#txt10").siblings().css(style10)
})

//sec11
$(function () {
    $("#menu li").eq(2).css("background-color", "#ff0")
    $("#menu li:lt(2)").css("background-color", "#0ff")
    $("#menu li:gt(2)").css("background-color", "#f0f")
})

//sec12
$(function(){
	var obj = [
		{"area":"서울"},
		{"area":"부산"},
		{"area":"전주"}
	];

	$(obj).each(function(i, o){
			console.log(i + ":", o);
	});
	console.log("==== The End 1 ====");

	$.each($("#menu2 li"), function(i, o){
			console.log(i + ":", o);
	});
	console.log("==== The End 2 ====");    

	$.each($("#menu2 li"), function(i){
			console.log(i + ":", $(this));
	});    
});

//sec13
$(function () {
    var arr13_1 = [{
        "area":"서울", "name":"무대리"
    },{
        "area":"부산", "name":"홍과장"
    },{    
        "area":"대전", "name":"박사장"
    },{
        "area":"서울", "name":"빅마마"
    }]

    var arr13_2 = $.map(arr13_1, function(a, b) {
        if (a.area == "서울") {
            return a;
        }
    })
    console.log(arr13_2)

    var arr13_3 = $.grep(arr13_1, function (a, b) {
        if (a.area == "서울") {
            return true;
        } else {
            return false;
        }
    })
    console.log(arr13_3);
})

//sec14
$(function () {
    var arr14_1 = [ "서울", "대전", "부산", "전주" ]; 
    var arr14_2 = [ "한국", "미국", "일본", "중국" ];
    var obj14 = { "name":"정부장", "area":"서울" };

    var idxNum = $.inArray("부산", arr14_1);
    console.log(idxNum)

    var okArray14_1 = $.isArray(arr14_1);
    var okArray14_2 = $.isArray(obj14);

    console.log(okArray14_1);
    console.log(okArray14_2);

    $.merge(arr14_1, arr14_2);
    console.log(arr14_1);
})

//마무리1
$(function () {
    $("#myList li").not(":first").css("background-color", "yellow")
})

//마무리2
$(function () {
    $("#myList2 li").eq(2).css("background-color", "yellow")
})

//sec13
