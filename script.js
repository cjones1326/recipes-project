let converterForm = document.querySelector("#converter-form");
let converterResults = document.querySelector("#conversion-results");

converterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let amount = Number(document.querySelector("#amount").value);
    let unit = document.querySelector('input[name="unit"]:checked');

    let amountAsMilliliters;

    switch (unit.value) {
        case "cups":
            amountAsMilliliters = amount * 240;
            break;

        case "tablespoons":
            amountAsMilliliters = amount * 15;
            break;

        case "teaspoons":
            amountAsMilliliters = amount * 5;
            break;

        case "milliliters":
            amountAsMilliliters = amount;
            break;

        case "liters":
            amountAsMilliliters = amount * 1000;
            break;
    }

    let convertedToCups = (amountAsMilliliters / 240).toFixed(3);
    let convertedToTablespoons = (amountAsMilliliters / 15).toFixed(3);
    let convertedToTeaspoons = (amountAsMilliliters / 5).toFixed(3);
    let convertedToMilliliters = (amountAsMilliliters).toFixed(3);
    let convertedToLiters = (amountAsMilliliters / 1000).toFixed(3);

    converterResults.innerHTML = `
        <tr>
            <td>Cups</td>
            <td>${convertedToCups}</td>
        </tr>
        <tr>
            <td>Tablespoons</td>
            <td>${convertedToTablespoons}</td>
        </tr>
        <tr>
            <td>Teaspoons</td>
            <td>${convertedToTeaspoons}</td>
        </tr>
        <tr>
            <td>Milliliters</td>
            <td>${convertedToMilliliters}</td>
        </tr>
        <tr>
            <td>Liters</td>
            <td>${convertedToLiters}</td>
        </tr>
    `;
});