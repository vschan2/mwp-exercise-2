$(document).ready(function() {
	$.ajax({
		type: 'GET',
		url: 'car_list.xml',
		dataType: 'xml',
		success: function(xml) {
			var textToInsert = "";

			$(xml).find('car').each(function() {
				$("#div_carList").append(
					"<div class='container_car_list row'>" +
						"<div class='col-4 col-m-4'>" +
							"<img src='" + $(this).find("image").text() + "' class='img_car_big' alt='" + "'>" +
						"</div>" + 
						"<div class='col-8 col-m-8'>" +
							"<div class='row'>" +
								"<div class='col-12'>" +
									"<span class='font_title'>" + $(this).find("name").text() + "</span>" +
								"</div>" + 
							"</div>" +
							"<div class='container_car_spec row'>" +
								"<div class='col-3 col-m-3'>" +
									"<span>" + $(this).find("mileage").text() + "km </span>" +
								"</div>" +

								"<div class='col-2 col-m-1'>" +
									"<span>" + $(this).find("cc").text() + "L </span>" +
								"</div>" +

								"<div class='col-2 col-m-3'>" +
									"<span>" + $(this).find("transmission").text() + "</span>" +
								"</div>" +

								"<div class='col-2 col-m-2'>" +
									"<span>" + $(this).find("type").text() + "</span>" +
								"</div>" +

								"<div class='col-3 col-m-3'>" +
									"<span>" + $(this).find("location").text() + "</span>" +
								"</div>" +
							"</div>" +
							"<div class='row'>" +
								"<div class='col-12'>" +
									"<span class='font_price'>RM " + $(this).find("price").text() + "</span>" +
								"</div>" + 
							"</div>" +
							"<div class='row'>" + 
								"<div class='col-6 col-m-6'>" +
									"<i class='fa fa-user fa-fw'></i><span>" + $(this).find("dealer").text() + " </span><span class='font_dealer'> | DEALER</span>" +
								"</div>" +
								"<div class='col-6 col-m-6' style='text-align:right; '>" +
									"<button class='btn-border-round btn-border-black'>Compare</button>" +
								"</div>" +
							"</div>" +
						"</div>" +
					"</div>"
				);
			});
		},
		error: function() {
			// Error handling function.
			alert("The XML File could not be processed correctly.");
		}
	});
});