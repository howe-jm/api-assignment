'use strict';

function getDogImage(num) {
  fetch(`https://api.thecatapi.com/v1/images/search?limit=${num}`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  $('#cat-container').html(createKittyString(responseJson));
  $('.results').removeClass('hidden');
}

function createKittyString(responseJson) {
  let imgArray = [];
  for (let i = 0; i < responseJson.length; i++) {
    imgArray.push(`
    <div class="cat-pic"><img src="${responseJson[i].url}"></div>
    `);
  }
  return imgArray.join(``);
}

function watchForm() {
  $('form').submit((event) => {
    event.preventDefault();
    let num = $('#number').val();
    getDogImage(num);
  });
}

function formControl() {
  $('#number').change(function () {
    var n = $('#number').val();
    if (n < 1) $('#number').val(1);
    if (n > 50) $('#number').val(50);
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  formControl();
});
