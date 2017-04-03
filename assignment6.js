document.addEventListener("DOMContentLoaded", init, false);
"use strict";
function init() {
	document.getElementById('cheese').style.visibility = 'hidden';
	document.getElementById('sauce').style.visibility = 'hidden';
	document.getElementById('billing_order').style.display = 'none';
	document.getElementById('inAddress').style.visibility = 'hidden';
	//document.getElementById('billing_inAddress').style.visibility = 'hidden';
	
    addressType.addEventListener("change", checkAddressType, false)
	function checkAddressType(){
	var getAddress = document.getElementById("addressType").value;
    if (getAddress === "Other") {
        document.getElementById("inAddress").style.visibility = "visible";
   	}else {
       document.getElementById("inAddress").style.visibility = "hidden";
   		  }
	}
	
	 addressType.addEventListener("change", checkbillingAddressType, false)
	function checkbillingAddressType(){
	var xgetAddress = document.getElementById("billing_addressType").value;
    if (xgetAddress === "Other") {
        document.getElementById("billing_inAddress").style.visibility = "visible";
   	}else {
       document.getElementById("billing_inAddress").style.visibility = "hidden";
   		  }
	}
		
        radioDough.addEventListener("click", choosePizza, false)
 function choosePizza(){
        var pizza = {
        handTossed: ["Small ($9.99)", "Medium ($12.99)", "Large ($14.99)"],
        thinCrust: ["Medium ($11.99)", "Large ($13.99)"],
        newYork: ["Large ($16.99)", "Extra Large ($19.99)"],
        glutenFree: ["Small ($10.99)"]
        };   
          
	   var select = document.getElementById("options");
		   
		    if (document.getElementById("tossed").checked){
			document.getElementById("options").options.length = 0;
            pizza.handTossed.forEach(function (element) {
            var opt = document.createElement("option");
            opt.innerHTML = element;
            select.appendChild(opt);
            })
			}else if
		    (document.getElementById("thin").checked){
			document.getElementById("options").options.length = 0;
            pizza.thinCrust.forEach(function (element) {
            var opt = document.createElement("option");
            opt.innerHTML = element;
            select.appendChild(opt);
            })
			}else if
		    (document.getElementById("york").checked) {
			document.getElementById("options").options.length = 0;
            pizza.newYork.forEach(function (element) {
            var opt = document.createElement("option");
            opt.innerHTML = element;
            select.appendChild(opt);
            })
			}else if
		   	(document.getElementById("glutenFree").checked){
			document.getElementById("options").options.length = 0;
            pizza.glutenFree.forEach(function (element) {
            var opt = document.createElement("option");
            opt.innerHTML = element;
            select.appendChild(opt);
            })
			
	   		}
 
			
			
 			
			select.addEventListener("click", sizePrice)
			function sizePrice(){
			document.getElementById('cheese').style.visibility = 'visible';
			document.getElementById('sauce').style.visibility = 'visible';
			var dough_prices=new Array();
			dough_prices["Small ($9.99)"]=9.99;
			dough_prices["Medium ($12.99)"]=12.99;
			dough_prices["Large ($14.99)"]=14.99;
			dough_prices["Medium ($11.99)"]=11.99;
			dough_prices["Large ($13.99)"]=13.99; 
			dough_prices["Large ($16.99)"]=16.99;
			dough_prices["Extra Large ($19.99)"]=19.99;
			dough_prices["Small ($10.99)"]=10.99;
			
			var basePrice=0;
			var theForm = document.forms["pizzaform"];
			var selectedSize = theForm.elements["options"]
    		basePrice = dough_prices[selectedSize.value];
	 		return basePrice;}
 	
			
	        document.getElementById("cheese").addEventListener("change", getcheesePrice)
			function getcheesePrice(){
			var cheese_prices= new Array();
			//cheese_prices["Select size"]=0;
			cheese_prices["Normal"]=0;
			cheese_prices["Light"]=0;
			cheese_prices["Extra"]=2.99;
			cheese_prices["Double"]=3.99;

			var cheesePrice=0;
			var theForm = document.forms["pizzaform"];
			var selectedCheese = theForm.elements["cheese"];
			cheesePrice = cheese_prices[selectedCheese.value];
			return cheesePrice;
	
			}
	 
	 		document.getElementById("sauce").addEventListener("change", getsaucePrice)
			function getsaucePrice(){
			var sauce_prices= new Array();
			sauce_prices["Regular Tomato: no charge"]=0;
			sauce_prices["Hearty Tomato: +$.99"]=.99;
			sauce_prices["BBQ Sauce: +$1.99"]=1.99;
				
			var saucePrice = 0;
			var theForm = document.forms["pizzaform"];
			var selectedSauce = theForm.elements["sauce"];
			saucePrice = sauce_prices[selectedSauce.value];
			return saucePrice;
			}
	 
	 		document.getElementById("checkbox_toppings").addEventListener("change", gettoppingPrice)
	 		function gettoppingPrice() {
			var x, i = 0;
			var toppingPrice = 0;
			while(x = document.getElementsByName("chk_group")[i++]) {
			if(x.checked) { toppingPrice = toppingPrice + Number(x.value);}
			}
			return toppingPrice;
			}

			
	 		document.getElementById("pizzaform").addEventListener("change", sum)
			function sum (){
			var PizzaPrice = getcheesePrice()+sizePrice()+getsaucePrice()+ gettoppingPrice();
			document.getElementById('totalPrice').innerHTML =
			"Total Price For pizza "+PizzaPrice.toFixed(2);}
		 	
   			
		}
	
		
		
		submitorder.addEventListener("click", validateForm, false);
	function validateForm() {
		var yourName = document.forms.pizzaform.name.value;
		var regexp1 = new RegExp("[0-9]");
		if (yourName === "" ||
				(regexp1.test(document.getElementById("name").value))) {		
			window.alert("Please fill out your Name in the correct format");
			return false;
		}
		
		var getAddress = document.getElementById("addressType").value;
		if (getAddress === "Please select Address Type")
		   {
			window.alert("Please select Address Type");
		
			return false;
		   }
		
		var getAddress = document.getElementById("addressType").value;
        var getBoxInfo = document.getElementById("otherAddress").value;
		if ((getAddress === "Other" )&&(getBoxInfo === ""))
		   {
			window.alert("Please enter Address Type");
		
			return false;
		   }
		
		
		var yourstreetAddress = document.forms.pizzaform.streetAddress.value;
		if (yourstreetAddress === "") {
			window.alert("Please fill out Street Address");
			return false;
		}
	
		var yourCity = document.forms.pizzaform.city.value;
		if (yourCity === "") {
			window.alert("Please fill out City");
			return false;
		}
		
		var yourState = document.forms.pizzaform.state.value;
		var regexp2 = new RegExp("[A-Za-z]{2}");
        if (yourState === "" ||
				(!regexp2.test(document.getElementById("state").value))) {
			window.alert("Please enter the two letter abbreviation name for your state");
			return false;
		}
		
		var yourzipCode = document.forms.pizzaform.zipCode.value;
		var regexp3 = new RegExp("/^\d{5}$$/g");
		if (yourzipCode === "" ||
				(regexp3.test(document.getElementById("zipCode").value))){
			window.alert("Please enter a valid Zip Code");
			return false;
		}
		
	
		var phone = document.forms.pizzaform.phoneNumber.value;
		var regexp4 = new RegExp("/^\d{3}-?\d{3}-?\d{4}$/g");
		if (phone === "" ||
				(regexp4.test(document.getElementById("phoneNumber").value))){
			window.alert("Please enter a valid Phone Number with area code first");
			return false;
		}
  	
		var YourEmail = document.forms.pizzaform.email.value;
		var regexp5=new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
		if (YourEmail === "" ||
		(!regexp5.test(document.getElementById("email").value)))
		{alert("Please enter a valid Email Address");
		return false;
		}
		
		
		var a = 0, radioButtons = document.getElementsByName("optradio")
		for (var i = 0; i < radioButtons.length;i++){
		if (radioButtons.item(i).checked == false){ 
		a++;
		} 
		}
		if(a == radioButtons.length) {
		window.alert("Please select dough");
		return false;
		}
			
		if(a < radioButtons.length){
		var confirmResult = confirm("Proceed to Checkout?");
		if (confirmResult == true){
			document.getElementById('billing_order').style.display = 'block';
			document.getElementById('pizza_order').style.display = 'none';
			
		}
		if (confirmResult == false){window.alert("The Order was cancelled");}
		return false;
		}
		
		
			return true;
		}
	
		document.getElementById("sameAddress").addEventListener("click", fillBilling, false)
		function fillBilling() {
		var x = document.getElementById("name");
		var y = document.getElementById("streetAddress");
		var z = document.getElementById("aptNumber");
		var c = document.getElementById("city");
		var a = document.getElementById("state");
		var l = document.getElementById("zipCode");
		var o = document.getElementById("addressType");
  		if(document.getElementById("sameAddress").checked == true) {
		document.getElementById("billing_name").value = x.value;
    	document.getElementById("billing_streetAddress").value = y.value;
		document.getElementById("billing_aptNumber").value = z.value;
		document.getElementById("billing_city").value = c.value;
		document.getElementById("billing_state").value = a.value;
		document.getElementById("billing_zipCode").value = l.value;
		document.getElementById("billing_addressType").value = o.value;
  		}
		}
	
     	document.getElementById("creditCard").addEventListener("change", creditcardcheck, false)
    	function creditcardcheck(){	 
    	var match = /^(?:4[0-9]{12}(?:[0-9]{3})?)|5[1-5][0-9]{14}|3[47][0-9]{13}$/;
		var types = ['Visa', 'MasterCard', 'American Express'];
		//var result = src.match(re);
	    for (var i = 0; i < match.length; i++) {
        if (document.getElementById("creditCard").value.match[i]) {
        document.getElementById('cardAlert').innerHTML = types[i];
		}
		}
		}

        
		
		
	submitpayment.addEventListener("click", validatepaymentForm, false);
	function validatepaymentForm() {
		var xname = document.forms.paymentform.billing_name.value;
		var regexp1 = new RegExp("[0-9]");
		if (xname === "" ||
				(regexp1.test(document.getElementById("billing_name").value))) {		
			window.alert("Please fill out your Name in the correct format");
			return false;
		}
		
		 var xgetAddress = document.getElementById("billing_addressType").value;
		 if (xgetAddress === "Please select Address Type")
		   {
			window.alert("Please select Address Type");
		
			return false;
		   }
	
		
		var xstreetAddress = document.forms.paymentform.billing_streetAddress.value;
		if (xstreetAddress === "") {
			window.alert("Please fill out Street Address");
			return false;
		}
	
		var xcity = document.forms.paymentform.billing_city.value;
		if (xcity === "") {
			window.alert("Please fill out City");
			return false;
		}
		
		var xstate = document.forms.paymentform.billing_state.value;
		var regexp2 = new RegExp("[A-Za-z]{2}");
        if (xstate === "" ||
				(!regexp2.test(document.getElementById("billing_state").value))) {
			window.alert("Please enter the two letter abbreviation name for your state");
			return false;
		}
		
		var xzipCode = document.forms.paymentform.billing_zipCode.value;
		var regexp3 = new RegExp("/^\d{5}$$/g");
		if (xzipCode === "" ||
				(regexp3.test(document.getElementById("billing_zipCode").value))){
			window.alert("Please enter a valid Zip Code");
			return false;
		}
		
		
		
		var xcreditCard = document.forms.paymentform.creditCard.value;
		var cardnumber = xcreditCard.replace(/[ -]/g, '');
		var regexp4 = new RegExp("[0-9]{13,16}");
		 if (cardnumber === "" ||
				(!regexp4.test(document.getElementById("creditCard").value))) {
			window.alert("Please enter your Credit Card Number");
			
			return false;
		}
			
		var xcreditCard = document.forms.paymentform.creditCard.value;
		var cardnumber = xcreditCard.replace(/[ -]/g, '');
		var regexp5 = new RegExp("/^(?:4[0-9]{12}(?:[0-9]{3})?)|5[1-5][0-9]{14}|3[47][0-9]{13}$/");
       if (regexp5.test(cardnumber.value)){
		   document.getElementById('cardAlert').innerHTML = "Enter a valid credit card number";
		   
		   return false;
		   
	   }
		   
		
		var yourcvc = document.forms.paymentform.cvc.value;
		var regexp5 = new RegExp("[0-9]{3}");
        if (yourcvc === "" ||
				(!regexp5.test(document.getElementById("cvc").value))) {
			window.alert("Please enter your Credit Card 3 digit CVC number.");
			return false;
		}
		var xmonth = document.getElementById("month").value;
		 if (xmonth === "Expiration Month")
		   {
			window.alert("Please select an Expiration Month");
		
			return false;
		   }
		
		var xyear = document.getElementById("year").value;
		 if (xyear === "Expiration Year")
		   {
			window.alert("Please select an Expiration Year");
		
			return false;
		   }
		
		return true;
		
		}
		
	
}
		
