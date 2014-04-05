define(function() {
	
	// ************************** CONTACT FORM **************************
	
	// Subject Dropdown
	$("#arrowDown").click(function(){
		$("#subjectOptions").slideToggle("fast");
	});
	
	$("#subjectOptions li").click(function() {
		$("#subject span").text($(this).text());
		$("#subjectOptions").hide();
		$("input[name='subject']").val($(this).attr("id"));
		$("#subject").css("color","#333");
	});
	
	// Clear fields on focus, then reset
	var defaultValues = new Array();
	
	$(".field")
		.each(function(i) {
			defaultValues[i] = $(this).val();
		})
		.focus(function(){
			$(this).css("color","#333");
			if ($(this).val() == defaultValues[$(".field").index(this)])
				$(this).val("");
		})
		.blur(function(){
			if ($(this).val() == "") {
				$(this).css("color","#999");
				$(this).val(defaultValues[$(".field").index(this)]);
			}
		});
	
	// Form Validation
	$("#contactForm").submit(function(){
		return runValidation();
	});
	
	// AJAX Form Submit
	$("#submit").click(function() {
		if (runValidation()) {
			$("#submit").after('<span id="processing">Sending Your Message. Please wait...</span>');
			var data = $("#contactForm").serialize() + "&async=true";
			var failMsg = "<div id='<div id='thankYouMsg'>Oops! There was an problem.<br /><a href='#'>Please Try again</a></div>";
			$.ajax({
				type: "POST",
				url: "/contact/sendmsg",
				data: data
			}).done(function(response) {
				if (response.message === 'success')
					appendMessage("Hooray! Your message has been sent. Prepare to receieve a response shortly.");
				else
					appendMessage("Hmmm. Something didn't go quite right. The server isn't answering, so chances are good your message didn't go through. For now, try just sending an e-mail to <a href='mailto:derrick@derrickshowers.com'>derrick@derrickshowers.com</a>. Oh, and let me know there's something broke! :)");
			}).fail(function() {
				appendMessage("Hmmm... Something appears to have gone wrong. For now, try just sending an e-mail to <a href='mailto:derrick@derrickshowers.com'>derrick@derrickshowers.com</a>. Oh, and let me know there's something broke! :)");
			});
		}
		return false;
	});
	
	// **************** SOCIAL NETWORKING DROPDOWN PLUGIN ****************
	$("#socialDropdown").socialDropdown({
		gutter : 5,
		delay : 100,
		random : true,
		stack : false
	});
	$(".cd-dropdown ul li span").click(function() {
		var network = $(this).attr("class");
		if (network == "fb") window.open("http://www.facebook.com/derrickshowersweb/","Facebook");
		if (network == "twitter") window.open("http://twitter.com/DerrickShowers","Twitter");
		if (network == "li") window.open("http://www.linkedin.com/in/derrickshowers","LinkedIn");
	});

	function appendMessage(msgText) {
		var el = $('<div/>').attr('id', 'thankYouMsg');
		el.append(msgText);
		$("fieldset.right").remove();
		$("#contactInfo").after(el);
	}

	function runValidation() {
	
		// Rest Classes for Validation
		$('#email').removeClass('errorBorder');
		$('#name').removeClass('errorBorder');
		$('#subject').removeClass('errorBorder');
		$('#message').removeClass('errorBorder');
		
		// Get Form Fields
		var n=document.forms["contactForm"]["name"].value;
		var e=document.forms["contactForm"]["email"].value;
		var s=document.forms["contactForm"]["subject"].value;
		var m=document.forms["contactForm"]["message"].value;

		// Email Character Check
		var atpos=e.indexOf("@");
		var dotpos=e.lastIndexOf(".");
		
		// Run Validations
		v=0;
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=e.length || e=="Email Address"){
			$('#email').addClass('errorBorder');
			v=1;
		}
		if(!n || n=="Name"){
			$('#name').addClass('errorBorder');
			v=1;
		}
		if(s=='none'){
			$('#subject').addClass('errorBorder');
			v=1;
		}
		if(!m || m=="Message"){
			$('#message').addClass('errorBorder');
			v=1;
		}
		if(v==1){
			return false;
		}else{
			return true;
		}
	}
	
});
