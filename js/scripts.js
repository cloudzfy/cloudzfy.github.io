$(function () {
	
	$("#cover").css("height", $(window).height());
	
	$(window).resize(function() {
		$("#cover").css("height", $(window).height());
		$("body").scrollspy("refresh");
	});
	
	$('.flexslider').flexslider({
		animation: "slide",
		slideshow: true,
		slideshowSpeed: 3000,
		animationSpeed: 600,
		pauseOnHover: true
	});
	
	var project_preview = $("#project-preview .container");
	
	$("a.project-info").click(function () {
		
		$("#project-preview").css("height", "auto");
		$("#progress-bar").show();
		progress(100, $("#progress-bar"));
		
		var url = "projects/" + $(this).attr("name") + ".html?" + getRandom(10000);
		$("#project-preview").css("height", "auto");
		$.get(url, function(data) {
			project_preview.html(data);
			$("html, body").animate({scrollTop: $("#project-preview").offset().top - 60}, 500, function() {
				$("body").scrollspy("refresh");
			});
			$(".preview-close").click(function() {
                $("#project-preview").animate({height: "0"}, 800);
				$("body").animate({scrollTop: $("#projects").offset().top - 60}, 800, function() {
					$("body").scrollspy("refresh");
				});
            });
			$("#progress-bar").fadeOut("slow");
			$(".flexslider").flexslider();
		});
	});
	
	var publication_preview = $("#publication-preview .container");
	
	$("a.publication-info").click(function () {
		
		$("#publication-preview").css("height", "auto");
		$("#progress-bar").show();
		progress(100, $("#progress-bar"));
		
		var url = "publications/" + $(this).attr("name") + ".html?" + getRandom(10000);
		$("#publication-preview").css("height", "auto");
		$.get(url, function(data) {
			publication_preview.html(data);
			$("html, body").animate({scrollTop: $("#publication-preview").offset().top - 60}, 500, function() {
				$("body").scrollspy("refresh");
			});
			$(".preview-close").click(function() {
                $("#publication-preview").animate({height: "0"}, 800);
				$("body").animate({scrollTop: $("#publications").offset().top - 60}, 800, function() {
					$("body").scrollspy("refresh");
				});
            });
			$("#progress-bar").fadeOut("slow");
		});
	});
	
	function progress(percent, $element) {
        var progressBarWidth = percent * $element.width() / 100;
        $element.find('div').animate({ width: progressBarWidth }, 1200);
	}
	
	$('.navbar a[href^="#"]').bind('click', function (event) {
    	event.preventDefault();
		isTop = false;
    	var target = this.hash;
        var anchor = $(this);

        $("html, body").stop().animate({
            "scrollTop" : $(anchor.attr('href')).offset().top - 60
        }, 500, "swing");
    });
	
	$(window).bind("scroll", function(event) {
		event.preventDefault();
		$("html, body").stop().animate({
			"scrollTop": $("#projects").offset().top - 60
		}, 400, "swing");
		$(window).unbind("scroll");
	});
	
	function getRandom(n) {
		return Math.floor(Math.random() * n + 1)
	}
	
});