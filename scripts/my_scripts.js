
$(document).ready(function(){
	var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;

	goLighting();

	window.onfocus = goLighting;
	window.onblur = stopLighting;

	var int1, int2, int3;

	function goLighting() {
		int1 = setInterval(function() {
			lightning_one();
		}, 4000);
		int2 = setInterval(function() {
			lightning_two();
		}, 5000);
		int3 = setInterval(function() {
			lightning_three();
		}, 7000);
	};

	function stopLighting() {
		window.clearInterval(int1);
		window.clearInterval(int2);
		window.clearInterval(int3);
	};

	var clix = [0, 0, 0, 0];
	var w = 367;
	var m = 10;


	function getRandom (num) {
		var myRandomNum = Math.floor(Math.random() * num);
		return myRandomNum;
	};

	$("#btnRandom").click(randomize);
	$("#btnReset").click(reset);

	function reset() {
		$(".face").each(function(index){
			clix[index] = 0;
			$(this).animate({left:"0px"}, 500);
		});
	};

	function randomize() {
		$(".face").each(function(index) {
			var target_position = getRandom(m);
			var current_position = clix[index];
			clix[index] = target_position;
			if (target_position < current_position) {
				var move_to = (target_position - current_position) * w;
				$(this).animate({left:"-="+move_to+"px"},500);
			} else if (target_position > current_position) {
				var move_to = (current_position - target_position) * w;
				$(this).animate({left:"+="+move_to+"px"},500);
			} else {

		}
		});
	};




	function moveMe(i, obj) {
		if (clix[i] < 9) {
			$(obj).animate({left: "-=367px"},500);
			clix[i] = clix[i] + 1;

		} else {
			$(obj).animate({left: "0px"},500);
			headclix = 0;
		}
	}


	$("#head").click(function(){
		moveMe(0, this);
	});

	$("#eyes").click(function(){
		moveMe(1, this);
	});

	$("#nose").click(function(){
		moveMe(2, this);
	});

	$("#mouth").click(function(){
		moveMe(3, this);
	});
});

function lightning_one(){
$("#container #lightning1").fadeIn(250).fadeOut(250);
};
function lightning_two(){
$("#container #lightning2").fadeIn("fast").fadeOut("fast");
};
function lightning_three(){
$("#container #lightning3").fadeIn("fast").fadeOut("fast");
};
