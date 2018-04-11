var request = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
    APPID: "8f32c0149a278cdb5f995fbb3d98eba5",
    q:     "San Antonio",
    units: "imperial",
    cnt: 3
});
request.done(function (response) {
    console.log(response);
    $("#cityname").text(response.city.name);
    $("#card1").append(
        "<div class='card-body'><h4>" +
        response.list[0].temp.min + "\xB0" +
        "/" + response.list[0].temp.max + "\xB0" +
        "<img src='http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png'>" +
        "</h4><br><p><strong>" + response.list[0].weather[0].main +
        ": </strong>" + response.list[0].weather[0].description +
        "</p>" + "<p><strong>Humidity: </strong>" + response.list[0].humidity +
        "</p><p><strong>Wind: </strong>" + response.list[0].speed +
        "</p><p><strong>Pressure: </strong>" + response.list[0].pressure
    );
    $("#card2").append(
        "<div class='card-body'><h4>" +
        response.list[1].temp.min + "\xB0" +
        "/" + response.list[1].temp.max + "\xB0" +
        "<img src='http://openweathermap.org/img/w/" + response.list[1].weather[0].icon + ".png'>" +
        "</h4><br><p><strong>" + response.list[1].weather[0].main +
        ": </strong>" + response.list[1].weather[0].description +
        "</p>" + "<p><strong>Humidity: </strong>" + response.list[1].humidity +
        "</p><p><strong>Wind: </strong>" + response.list[1].speed +
        "</p><p><strong>Pressure: </strong>" + response.list[1].pressure
    );
    $("#card3").append(
        "<div class='card-body'><h4>" +
        response.list[2].temp.min + "\xB0" +
        "/" + response.list[2].temp.max + "\xB0" +
        "<img src='http://openweathermap.org/img/w/" + response.list[2].weather[0].icon + ".png'>" +
        "</h4><br><p><strong>" + response.list[2].weather[0].main +
        ": </strong>" + response.list[2].weather[0].description +
        "</p>" + "<p><strong>Humidity: </strong>" + response.list[2].humidity +
        "</p><p><strong>Wind: </strong>" + response.list[2].speed +
        "</p><p><strong>Pressure: </strong>" + response.list[2].pressure
    )
});
