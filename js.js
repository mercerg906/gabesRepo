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
		
	})
	
	$("#base-rate").on("click", function(){
		$(".fadein").hide();
		$("#bs-rt-frm").fadeIn("slow");
		
	})
	
	$("#dt-crt").on("click", function(){
		$(".fadein").hide();
		$("#dt-crt-frm").fadeIn("slow");
		
	})
	
	$("#pd-dt").on("click", function(){
		$(".fadein").hide();
		$("#pd-dt-frm").fadeIn("slow");
		
	})
	
	$("#con").on("click", function(){
		$(".fadein").hide();
		$("#con-frm").fadeIn("slow");
		
	})
});

/*note, use "change" event, */
