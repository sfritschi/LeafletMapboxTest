var loadGeojson = function(mapObject, path) {	
	var geoJson = new L.geoJson();
		geoJson.addTo(mapObject);
	
	$.ajax({
		dataType: "json",
		url: path,
		success: function(data) {
			$(data.features).each(function(key, data) {
				geoJson.addData(data);
			});
		}
	}).error(function() {});
}

var getGeojson = function(path) {
	var geoJson = new L.geoJson();
	
	$.ajax({
		dataType: "json",
		url: path,
		success: function(data) {
			$(data.features).each(function(key, data) {
				geoJson.addData(data);
			});
		}
	}).error(function() {});
	return geoJson;
}