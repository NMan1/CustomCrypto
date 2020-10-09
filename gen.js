function checkString(string) {
  var format = /[Ol0I]/;
  if(format.test(string)){
    return true;
  } else {
    return false;
  }
}

function validateGiven(xxxxx) {
  if (checkString(xxxxx.value)) {
    document.getElementsByClassName('illegal-chars')[0].classList.remove("hidden")
    document.getElementsByClassName("intro")[0].style.minHeight = "69.60vh";
  } else {
    document.getElementsByClassName('illegal-chars')[0].classList.add("hidden")
    document.getElementsByClassName("intro")[0].style.minHeight = "60vh";
  }
}

function generateAddress() {
  var free = "0.0 BTC";
  const txt = document.getElementById('given-vanity').value;
  const genAdd = document.getElementById('gen-add');
  const genPriceBtc = document.getElementById('gen-price-btc');
  const genPriceUsd = document.getElementById('gen-price-usd');

  var ourBtcPrice = "";
  var isCaseSensitive = document.getElementById("option-one").checked;

  if (!isCaseSensitive) {
    if (txt.length == 0) {
      genAdd.value = "1" + txt + "zB5XMLmzFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = free;
      genPriceUsd.value = "$0"
      ourBtcPrice = "Free";
    } else if (txt.length == 1) {
      genAdd.value = "1" + txt + "B5XMLmzFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = free;
      genPriceUsd.value = "$0"
      ourBtcPrice = "Free";
    } else if (txt.length == 2) {
      genAdd.value = "1" + txt + "5XMLmzFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = free;
      genPriceUsd.value = "$0"
      ourBtcPrice = "Free";
    } else if (txt.length == 3) {
      genAdd.value = "1" + txt + "XMLmzFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = free;
      genPriceUsd.value = "$0"
      ourBtcPrice = "Free";
    } else if (txt.length == 4) {
      genAdd.value = "1" + txt + "MLmzFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = free;
      genPriceUsd.value = "$0"
      ourBtcPrice = "Free";
    } else if (txt.length == 5) {
      genAdd.value = "1" + txt + "LmzFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = free;
      genPriceUsd.value = "$0"
      ourBtcPrice = "Free";
    } else if (txt.length == 6) {
      genAdd.value = "1" + txt + "mzFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = free;
      genPriceUsd.value = "$0"
      ourBtcPrice = "Free";
    } else if (txt.length == 7) {
      genAdd.value = "1" + txt + "zFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = '0.0019 BTC';
      ourBtcPrice = "0.0019";
    } else if (txt.length == 8) {
      genAdd.value = "1" + txt + "FVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = '0.0150 BTC';
      ourBtcPrice = "0.0150";
    } else if (txt.length == 9) {
      genAdd.value = "1" + txt + "Vj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = '0.0350 BTC';
      ourBtcPrice = "0.0350";
      } else if (txt.length == 10) {
      genAdd.value = "1" + txt + "j8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = 'That length is impossible for now';
      genPriceUsd.value = "$Unknown"
      ourBtcPrice = "$Unknown";
    } else if (txt.length >= 11) {
      genAdd.value = "1" + txt + "8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = 'That length is impossible for now';
      genPriceUsd.value = "$Unknown"
      ourBtcPrice = "$Unknown";
    }
  } else {
    if (txt.length == 0) {
      genAdd.value = "1" + txt + "zB5XMLmzFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = free;
      genPriceUsd.value = "$0"
      ourBtcPrice = "Free";
    } else if (txt.length == 1) {
      genAdd.value = "1" + txt + "B5XMLmzFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = free;
      genPriceUsd.value = "$0"
      ourBtcPrice = "Free";
    } else if (txt.length == 2) {
      genAdd.value = "1" + txt + "5XMLmzFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = free;
      genPriceUsd.value = "$0"
      ourBtcPrice = "Free";
    } else if (txt.length == 3) {
      genAdd.value = "1" + txt + "XMLmzFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = free;
      genPriceUsd.value = "$0"
      ourBtcPrice = "Free";
    } else if (txt.length == 4) {
      genAdd.value = "1" + txt + "MLmzFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = free;
      genPriceUsd.value = "$0"
      ourBtcPrice = "Free";
    } else if (txt.length == 5) {
      genAdd.value = "1" + txt + "LmzFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = free;
      genPriceUsd.value = "$0"
      ourBtcPrice = "Free";
    } else if (txt.length == 6) {
      genAdd.value = "1" + txt + "mzFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = '0.0024 BTC';
      ourBtcPrice = "0.0024";
    } else if (txt.length == 7) {
      genAdd.value = "1" + txt + "zFVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = '0.0160 BTC';
      ourBtcPrice = "0.0160";
    } else if (txt.length == 8) {
      genAdd.value = "1" + txt + "FVj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = '0.0250 BTC';
      ourBtcPrice = "0.0250";
    } else if (txt.length == 9) {
      genAdd.value = "1" + txt + "Vj8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = '0.0500 BTC';
      ourBtcPrice = "0.0500";
      } else if (txt.length == 10) {
      genAdd.value = "1" + txt + "j8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = 'That length is impossible for now';
      genPriceUsd.value = "$Unknown"
      ourBtcPrice = "$Unknown";
    } else if (txt.length >= 11) {
      genAdd.value = "1" + txt + "8ALj6mfBsbifRoD4miY36v";
      genPriceBtc.value = 'That length is impossible for now';
      genPriceUsd.value = "$Unknown"
      ourBtcPrice = "$Unknown";
    }
  }

  var currentPrice = new XMLHttpRequest();
  var currentBtcPrice = 0;

  currentPrice.open('GET', 'https://api.gdax.com/products/BTC-USD/book', true);
  currentPrice.onreadystatechange = function(){
    if(currentPrice.readyState == 4){
      var ticker = JSON.parse(currentPrice.responseText);
      currentBtcPrice = ticker.bids[0][0];
      if (ourBtcPrice != "$Unknown" && ourBtcPrice != "Free") {
        genPriceUsd.value = "$" + Math.round(currentBtcPrice * parseFloat(ourBtcPrice, 10)).toString();
      }
    };
  };
  currentPrice.send();


};
