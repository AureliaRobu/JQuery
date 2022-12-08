"use strict";

$(function () {
  const $countriesContainer = $("div.countries");
  $.get("https://restcountries.com/v2/all", function (data) {
    console.log(data);
    const dataSliced = data.slice(0, 10);
    console.log(dataSliced);
    $.each(dataSliced, function (index, data) {
      console.log(data);
      $countriesContainer.append(`
     <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
     </article>`);
      $countriesContainer.css("opacity", 1);
    });
  });
});
