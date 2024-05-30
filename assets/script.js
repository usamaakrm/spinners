function leads() {
	let spinlead = document.getElementById("spinlead")
	let spinlead2 = document.getElementById("spinlead2")
	let userLead = document.getElementById("user-hide")
    let userLead2 = document.getElementById("user-hide2")
	setTimeout(() => {
		spinlead.style.display = "block";
		spinlead2.style.display = "none";

		
            setTimeout(() => {
            	userLead.style.display = "block";
            	userLead2.style.display = "none";
            }, 3000);
	}, 6000);
}
			
			
			function als() {

            	setTimeout(() => {
            		window.location.replace('walmart.html')
            	}, 7000);

            }

            

            function sum() {

            	var num1 = document.myform.number1.value;
            	var num2 = document.myform.number2.value;
            	var sum = parseInt(num1) + parseInt(num2);
            	document.getElementById('add').value = sum;
            }


            //set default degree (360*5)
            var degree = 1800;
            //number of clicks = 0
            var clicks = 0;

            $(document).ready(function () {

            	/*WHEEL SPIN FUNCTION*/
            	$('#spin').click(function () {

            		//add 1 every click
            		clicks++;

            		/*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
            		var newDegree = degree * clicks;
            		var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
            		totalDegree = 3650

            		/*let's make the spin btn to tilt every
            		time the edge of the section hits 
            		the indicator*/
            		$('#wheel .sec').each(function () {
            			var t = $(this);
            			var noY = 0;

            			var c = 0;
            			var n = 700;
            			var interval = setInterval(function () {
            				c++;
            				if (c === n) {
            					clearInterval(interval);
            				}

            				var aoY = t.offset().top;
            				$("#txt").html(aoY);

            				/*23.7 is the minumum offset number that 
            				each section can get, in a 30 angle degree.
            				So, if the offset reaches 23.7, then we know
            				that it has a 30 degree angle and therefore, 
            				exactly aligned with the spin btn*/
            				if (aoY < 23.89) {
            					console.log('<<<<<<<<');
            					$('#spin').addClass('spin');
            					setTimeout(function () {
            						$('#spin').removeClass('spin');
            					}, 100);
            				}
            			}, 10);

            			$('#inner-wheel').css({
            				'transform': 'rotate(' + totalDegree + 'deg)'
            			})

            			noY = t.offset().top;

            		});
            	});




            });


            const tl = gsap.timeline()
            tl.to("#fb-like", .3, {
            	rotate: 25,
            	scale: .8,
            	ease: Power1.easeOut
            })
            tl.to("#hand-wrapper", .3, {
            	delay: -.3,
            	rotate: 5,
            	y: 10,
            	x: 5,
            	ease: Back.easeOut
            })
            tl.to("#thumb", .6, {
            	delay: -.3,
            	morphSVG: "#thumb-morph",
            	ease: Power3.easeOut
            })
            tl.to("#fb-like", .6, {
            	delay: -.15,
            	rotate: -25,
            	scale: 1.2,
            	ease: Back.easeOut
            })
            tl.to("#hand-wrapper", .3, {
            	delay: -.6,
            	rotate: -10,
            	y: -5,
            	x: -15,
            	ease: Back.easeOut
            })
            tl.to("#thumb", .3, {
            	delay: -.6,
            	morphSVG: {
            		shape: "#thumb",
            		shapeIndex: 8
            	},
            	ease: Power1.easeOut
            })
            tl.to("#fb-like", .6, {
            	delay: -.15,
            	rotate: 0,
            	scale: 1,
            	ease: Back.easeOut
            })
            tl.to("#hand-wrapper", .3, {
            	delay: -.6,
            	rotate: 0,
            	y: 0,
            	x: 0
            })
            tl.pause()

            $("#btnOff").on("click", () => {
            	tl.play()
            	$("#btnOff").css({
            		opacity: 0,
            		"pointer-events": "none"
            	})
            	$("#btnOn1").css({
            		opacity: 1
            	})
            	//   $("body").css({background: "#9bd1fd"})

            	setTimeout(function () {
            		tl.progress(0)
            		tl.pause();
            		$("#btnOff").css({
            			"pointer-events": "none"
            		})
            		$("#btnOn1").css({
            			"pointer-events": "all"
            		})
            	}, 1500)
            })
            $("#btnOff2").on("click", () => {
            	tl.play()
            	$("#btnOff2").css({
            		opacity: 0,
            		"pointer-events": "none"
            	})
            	$("#btnOn2").css({
            		opacity: 1
            	})

            	$("#btnOff3").on("click", () => {
            		tl.play()
            		$("#btnOff3").css({
            			opacity: 0,
            			"pointer-events": "none"
            		})
            		$("#btnOn3").css({
            			opacity: 1
            		})
            	})

            	setTimeout(function () {
            		tl.progress(0)
            		tl.pause();
            		$("#btnOff2").css({
            			"pointer-events": "none"
            		})
            		$("#btnOn2").css({
            			"pointer-events": "all"
            		})
            	}, 1500)
            })

            $("#btnOn").on("click", () => {
            	$("#btnOff").css({
            		opacity: 1,
            		"pointer-events": "all"
            	})
            	$("#btnOn1").css({
            		opacity: 0,
            		"pointer-events": "none"
            	})
            	//   $("body").css({background: "#f0f3fb"})
            })
            $("#btnOn2").on("click", () => {
            	$("#btnOff2").css({
            		opacity: 1,
            		"pointer-events": "all"
            	})
            	$("#btnOn2").css({
            		opacity: 0,
            		"pointer-events": "none"
            	})
            	//   $("body").css({background: "#f0f3fb"})
            })
            $("#btnOn3").on("click", () => {
            	$("#btnOff3").css({
            		opacity: 1,
            		"pointer-events": "all"
            	})
            	$("#btnOn3").css({
            		opacity: 0,
            		"pointer-events": "none"
            	})
            	//   $("body").css({background: "#f0f3fb"})
            })

            $("#wrapper1").on("mouseenter", () => {
            	$("#wrapper1").css({
            		transform: "scale(1.2)"
            	})
            })
            $("#wrapper2").on("mouseenter", () => {
            	$("#wrapper2").css({
            		transform: "scale(1.2)"
            	})
            })
            $("#wrapper3").on("mouseenter", () => {
            	$("#wrapper3").css({
            		transform: "scale(1.2)"
            	})
            })

            $("#wrapper1").on("mouseleave", () => {
            	$("#wrapper1").css({
            		transform: "scale(1)"
            	})
            })

            $("#wrapper2").on("mouseleave", () => {
            	$("#wrapper2").css({
            		transform: "scale(1)"
            	})
            })
            $("#wrapper3").on("mouseleave", () => {
            	$("#wrapper3").css({
            		transform: "scale(1)"
            	})
            })

            $(function () {
            	var inDexValue;

            	$('button').click(function () {
            		if ($('#userCmnt').val().length == '') {
            			alert('Please Enter Your Comment');
            			return true;
            		}
            		var userCmnt = $('#userCmnt').val();
            		if ($('#submit').hasClass('editNow')) {

            			$('#cmntContr>div.viewCmnt').eq(inDexValue).children('p').html(userCmnt);

            		} else {

            			//   $('#cmntContr').append("<div class='viewCmnt'><p>"+ userCmnt + "</p><span class='edit'></span><span class='delete'></span></div>");
            			$('#cmntContr').append(`<div class='commet flex'>
	  <div><img src='./assets/icons/dpps.png' alt='' width='40' class='dp'></div>
	  <div class='comment-item'>
		  <div>
			  <div class='brand-name2'>
				  <h4>Aaron Diego</h4>
			  </div>
			   <p class='mess'> ${userCmnt} </p> 
		  </div>
		  <div class='comment-react2'>
			  <div>
				  <p><span>Like - Reply</span> 1 min ago</p>
			  </div>
		  </div>
	  </div>
  </div>`);
            		}
            		$('#userCmnt').val('');
            		$(this).removeClass('editNow');
            	});

            	// Delete 
            	$('#cmntContr').on('click', '.delete', function () {
            		confirm("Delete Coformation");
            		$(this).parent().remove();
            	});
            	// Edit
            	$('#cmntContr').on('click', '.edit', function () {

            		var toEdit = $(this).prev('p').html();
            		//alert(toEdit);
            		$('#userCmnt').val(toEdit);
            		$('button').addClass('editNow');
            		inDexValue = $(this).parent('div.viewCmnt').index();

            	});
            });