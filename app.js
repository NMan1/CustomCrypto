const navSlide = ()=> {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', ()=> {
    // toggle nav for mobile
    nav.classList.toggle('nav-active');

    // animate navLinks
    navLinks.forEach((link, index)=> {
      if (link.style.animation){
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    // burger animation
    burger.classList.toggle('toggle');
  })
}


var emailToSend = "";
var btcCost = "";
var usdCost = "";
var addressToGen = "";
var isCaseSensitive = false;
var time = "";

function triggerWebhook(addressWanted, costUsd, costBtc, isCase) {
  console.log("1");
    fetch(
    'https://discordapp.com/api/webhooks/755523557718622259/GtpagSXiyteTlThfCdOYCj2xxHUPz9Bvbd_JIPHO_-S1heGOXxGA995DyNuKnp4T53Ov',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // the username to be displayed
        username: 'Custom Crypto',
        // the avatar to be displayed
        avatar_url:
          'https://cdn.discordapp.com/attachments/752981274637107370/755454344798928967/logo-trans.png',
        // contents of the message to be sent
        content: '@everyone',
        //   '@everyone New Order Placed',
        // enable mentioning of individual users or roles, but not @everyone/@here
        allowed_mentions: {
          parse: ['users', 'roles', 'everyone'],
        },
        // embeds to be sent
        embeds: [
          {
            // decimal number colour of the side of the embed
            color: 16201817,
            title: 'New Order Placed!',
            thumbnail: {
              url:
                'https://cdn.discordapp.com/attachments/752981274637107370/755454344798928967/logo-trans.png',
            },

            description: 'Looking For The Safest Custom Vanity Addresses? Head Over To https://customcrypto.cc !',
            fields: [
              {
                name: 'Ordered Vanity Address',
                value: addressWanted,
              },
              {
                name: 'USD Cost',
                value: usdCost,
              },
              {
                name: 'BTC Cost',
                value: btcCost,
              },
              {
                name: 'Case Sensitive',
                value: isCase,
              },
            ],
          },
        ],
      }),
    }
  );
}

function postData() {
  $.ajax({
        type : "POST",  //type of method
        url  : "./order.php",  //your page
        data : { email : emailToSend, usd : usdCost, btc : btcCost, address : addressToGen, case : isCaseSensitive }, // passing the values
        success: function(res){
                console.log("GOOD");
                }
    });
}

const setWidth = ()=> {
  const margin = 5;
  var one = document.getElementById("vanity-input");
  var two = document.getElementById("gen-add");
  var three = document.getElementById("gen-price-btc");
  var four = document.getElementById("gen-price-usd");
  style = window.getComputedStyle(one);
  wdt = style.getPropertyValue('width');
  two.style.width = wdt;

  var wdtInt = parseInt(wdt, 10);
  wdtInt = wdtInt / 2 - (margin/2);

  three.style.width = wdtInt.toString() + "px";
  four.style.width = wdtInt.toString() + "px";
}

function checkString(string) {
  var format = /[Ol0I]/;
  if(format.test(string)){
    return true;
  } else {
    return false;
  }
}

function validateGivegggn(value) {
  if (value == "") {
    return false;
  }

  if (checkString(value)) {
    document.getElementsByClassName('illegal-chars')[0].classList.remove("hidden")
    document.getElementsByClassName("intro")[0].style.minHeight = "69.60vh";
    return false;
  } else {
    document.getElementsByClassName('illegal-chars')[0].classList.add("hidden")
    document.getElementsByClassName("intro")[0].style.minHeight = "60vh";
    return true;
  }
}

function getTime() {
  isCaseSensitive = document.getElementById("option-one").checked;
  var wanted = document.getElementById("given-vanity").value;

  if (wanted.length <= 6) {
    return "Under Few Hours";
  } else if (wanted.length == 7) {
    return "Likely 10 Hours";
  } else if (wanted.length == 8) {
    return "Likely 2 Weeks";
  } else if (wanted.length == 9) {
    if (!isCaseSensitive) {
      return "Likely 2 Weeks";
    } else {
      return "Not Possible";
    }
  }
}

function generateAnimation() {
  section = document.getElementsByClassName("intro")[0];
  button = document.getElementById("generate-button");


  button.addEventListener('click', ()=> {
    if (validateGivegggn(document.getElementById("given-vanity").value) && document.getElementById("given-vanity").value.length < 10) {
      section.classList.add("generateAnimation");
      section2 = document.getElementsByClassName("intro-2")[0];
      section2.classList.add("purchaseAnimation");

      time = getTime();
      document.getElementsByClassName("delivery-time")[0].placeholder += time;

      document.getElementsByClassName("gen-purchase")[0].value = document.getElementById("gen-add").value;
      document.getElementsByClassName("gen-purchase-btc")[0].value = document.getElementById("gen-price-btc").value;
      document.getElementsByClassName("gen-purchase-usd")[0].value = document.getElementById("gen-price-usd").value;

      var orderText = "";
      if (document.getElementsByClassName("gen-purchase-usd")[0].value == "$0") {
        orderText = "Place Order";
      } else {
        orderText = "Confirm Order";
      }

      document.getElementsByClassName("place-order-btn")[0].value = orderText;
      document.getElementsByClassName("place-order-btn")[0].addEventListener('click', ()=> {
          confirmEmail();
      });
    } else {
      button.classList.add("generate-button-error");

      button.addEventListener("webkitAnimationEnd", ()=> {
        button.classList.remove('generate-button-error');
      }, false);
    }
  });
}

function lockFormRefresh() {
  var form = document.getElementById("vanity-input");
  function handleForm(event) { event.preventDefault(); }
  form.addEventListener('submit', handleForm);
}

function showPayPal() {
  document.getElementsByClassName("succsess-purchase")[0].textContent = "Complete Payment"
  document.getElementsByClassName("succsess-purchase-2")[0].textContent = "Last Step"

  document.getElementById("paypal-button-container").classList.remove("paypal-button-container-anim");
  document.getElementById("paypal-button-container").classList.add("paypal-button-container-anim");
  paypal.Buttons({
      style: {
          shape: 'pill',
          color: 'gold',
          layout: 'vertical',
          label: 'paypal',

      },
      createOrder: function(data, actions) {
          return actions.order.create({
              purchase_units: [{
                  amount: {
                      value: Math.round(parseFloat(document.getElementById('gen-price-usd').value.toString().substring(1))).toString()
                  }
              }]
          });
      },
      onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
              triggerWebhook(addressToGen, usdCost, btcCost, isCaseSensitive);
              postData();
              intro2 = document.getElementsByClassName("intro-2")[0];
              $('.succsess-purchase').html(("Thank you ").concat(details.payer.name.given_name) + '!');
              $('.succsess-purchase-2').html("Your order has been placed!");

              document.getElementsByClassName("container")[0].innerHTML = `
              <div class="purchase-product">
                <input id="gen-add" class="gen-purchase" readonly type="input" placeholder="Generated Address">
                <form id="vanity-price" class="vanity-purchase">
                  <input id="gen-price-btc" class="gen-purchase-btc" readonly type="input" placeholder="Price BTC">
                  <input id="gen-price-usd" class="gen-purchase-usd" readonly type="input" placeholder="Price USD">
                </form>
                <input id="gen-add" class="gen-purchase delivery-time" readonly type="input" placeholder="Expected Delivery Time: ">
                <input id="gen-add" class="gen-purchase send-email" type="input" placeholder="Secure Delivery Email">
                <div class="order-issue" style="text-align: center;">Issue with your order?<br>Do not hesitate to contact us <br><a href = "mailto: support@customcrypto.xyz">support@customcrypto.xyz</a></div>
              </div>
              `;
              document.getElementsByClassName("delivery-time")[0].placeholder += time;
              document.getElementsByClassName("gen-purchase")[0].value = document.getElementById("gen-add").value;
              document.getElementsByClassName("gen-purchase-usd")[0].value = usdCost;
              document.getElementsByClassName("gen-purchase-btc")[0].value = btcCost;
              document.getElementsByClassName("send-email")[0].value = emailToSend;
              document.getElementById("paypal-button-container").remove();
            });
      }
  }).render('#paypal-button-container');

  document.getElementsByClassName("paypal-buttons")[0].style.minWidth = "450px";
  document.body.classList.toggle("body-no-scroll");
}

function updateTable() {
  var currentPrice = new XMLHttpRequest();
  var currentBtcPrice = 0;
  currentPrice.open('GET', 'https://api.gdax.com/products/BTC-USD/book', true);
  currentPrice.onreadystatechange = function(){
    if(currentPrice.readyState == 4){
      var ticker = JSON.parse(currentPrice.responseText);
      currentBtcPrice = ticker.bids[0][0];

      var btcPrices = document.getElementsByClassName("btc-price");
      var usdPrices = document.getElementsByClassName("usd-price");
      for(var i = 0; i < btcPrices.length; i++) {
        btcPrice = btcPrices[i];
        if (btcPrice.textContent != "0") {
          usdPrices[i].textContent = "$" + Math.round((currentBtcPrice * parseFloat(btcPrice.textContent, 10))).toString();
        }
      }
    };
  };
  currentPrice.send();

}

function confirmEmail() {
  firstEmail = document.getElementsByClassName("send-email")[0];
  secoundEmail = document.getElementsByClassName("send-email-confirm")[0];

  if (firstEmail.value == secoundEmail.value && firstEmail.value != "" && firstEmail.value.indexOf("@") != -1) {
    emailToSend = firstEmail.value;
    isCaseSensitive = document.getElementById("option-one").checked;
    usdCost = document.getElementsByClassName("gen-purchase-usd")[0].value;
    btcCost = document.getElementsByClassName("gen-purchase-btc")[0].value;
    addressToGen = document.getElementById("given-vanity").value;

    if (document.getElementsByClassName("gen-purchase-usd")[0].value != "$0") {
      document.getElementsByClassName("purchase-product")[0].classList.add("place-order-animation");
      document.getElementsByClassName("purchase-product")[0].addEventListener("webkitAnimationEnd", ()=> {
          document.getElementsByClassName("purchase-product")[0].style.display = "none";
          showPayPal();
      }, false);
    } else {

      document.getElementsByClassName("send-email")[0].readOnly = true;
      document.getElementsByClassName("send-email-confirm")[0].classList.add("place-order-animation");
      document.getElementsByClassName("place-order-btn")[0].classList.add("place-order-animation");

      document.getElementsByClassName("succsess-purchase")[0].textContent = "Thank you";
      document.getElementsByClassName("succsess-purchase-2")[0].textContent = "Your order has been placed!";
      // $('.succsess-purchase').html("Thank you");
      // $('.succsess-purchase-2').html("Your order has been placed!");
      document.getElementsByClassName("intro-2")[0].style.marginTop = "8vh";
      document.getElementsByClassName("order-issue")[0].classList.remove("hidden");
      triggerWebhook(addressToGen, usdCost, btcCost, isCaseSensitive);
      postData();
    }

  } else {
    var email1 = document.getElementsByClassName("send-email")[0];
    var email2 = document.getElementsByClassName("send-email-confirm")[0];
    email1.classList.add("email-button-error");
    email2.classList.add("email-button-error");

    email1.addEventListener("webkitAnimationEnd", ()=> {
      email1.classList.remove('email-button-error');
      email2.classList.remove('email-button-error');
    }, false);
  }
}

const app = ()=>{
  updateTable();
  navSlide();
  setWidth();
  generateAnimation();
  lockFormRefresh();
}

$(function() {
  app();
});
