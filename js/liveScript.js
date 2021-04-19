var submit = document.getElementById("button");

submit.addEventListener("click", function() {
    var name = document.getElementById("name");

    if (name.value == "") {
        alert("Inserisci il nome del panino!");
    } else {
        var sum = 50;

        var listIngredient = document.querySelectorAll(".ingredient-checkbox");

        for (var i = 0; i < listIngredient.length; i++) {
            var ingredient = listIngredient[i];

            if (ingredient.checked) {
                sum += parseInt(ingredient.value);
            }
        }
        
        var coupon = document.getElementById("coupon");
        if (coupon.value == "98765QWERTY" || coupon.value == "00000AAAAAA" || coupon.value == "99999ZZZZZZ") {
            sum = sum * 0.8;
        }

        document.getElementById("price").innerHTML = sum;
    }
    
})