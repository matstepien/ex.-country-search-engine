var url = 'https://restcountries.eu/rest/v2/name/';
	countriesList = $('#countries');

$('#search').click(searchCountries);


function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}
function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		$('<li>').text(item.name + ' capital: ' + item.capital + ' population: ' + item.population + ' area: ' + item.area +'km2' + ' currency: ' + item.currencies[0].name).appendTo(countriesList);
});
}