$(document).ready(function(){
	$(".fadein").hide();
	
	
	$("#inv").on("click", function(){
		$(".fadein").hide();
		$("#inv-frm").fadeIn("slow");
	});
	
	$("#inv-id-btn").on("click", function(){
		$(".fadein").hide();
		$("#inv-id-frm").fadeIn("slow");
	});
	
	$("#con-id").on("click", function(){
		$(".fadein").hide();
		$("#con-id-frm").fadeIn("slow");
		
	});
	
	$("#base-rate").on("click", function(){
		$(".fadein").hide();
		$("#bs-rt-frm").fadeIn("slow");
		
	});
	
	$("#dt-crt").on("click", function(){
		$(".fadein").hide();
		$("#dt-crt-frm").fadeIn("slow");
		
	});
	
	$("#pd-dt").on("click", function(){
		$(".fadein").hide();
		$("#pd-dt-frm").fadeIn("slow");
		
	});
	
	$("#con").on("click", function(){
		$(".fadein").hide();
		$("#con-frm").fadeIn("slow");
		
	});
	
	//These are for the buttons in the admin home page select
	$("#sel").on("click", function(){
		$(".fadein").fadeOut("slow");
		
	});
	
	$("#maggie").on("click", function(){
		$(".fadein").hide();
		$("#u-frm").fadeIn("slow");
		
	});
	
	$("#sally").on("click", function(){
		$(".fadein").hide();
		$("#u-frm").fadeIn("slow");
		
	});
	
	$("#fred").on("click", function(){
		$(".fadein").hide();
		$("#u-frm").fadeIn("slow");
		
	});
});

/*note, use "change" event, */
