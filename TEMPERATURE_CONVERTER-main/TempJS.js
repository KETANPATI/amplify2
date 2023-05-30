console.log('Welcome to 🌡️ Temperature Converter');

const tempLoad = () => {
    let fa = document.getElementById('fa');
    fa.innerHTML = "&#xf2cb";
    fa.style.color = "#58fa43";

    setTimeout(() => {
        fa.innerHTML = "&#xf2ca;";
        fa.style.color = "#26ff0a";
    }, 1000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c9;";
        fa.style.color = "#ffbb45";
    }, 2000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c8;";
        fa.style.color = "#fca308";
    }, 3000)

    setTimeout(() => {
        fa.innerHTML = "&#xf2c7;";
        fa.style.color = "#ff5151";
    }, 4000)
}

setInterval(() => {
    fa.style.color = "#51ff1c";
    tempLoad();
}, 5000);


tempLoad();

const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;    // console.log(numberTemp);

    const tempSelected = document.querySelector('#temp_diff');
    const valeTemp = temp_diff.options[tempSelected.selectedIndex].value;   // console.log(valeTemp);

    // ********Convert temperature from Celcius to Fahrenheit********
    const celTOfah = (cel) => {
        let fahrenheit = (cel * (9 / 5) + 32);
        return fahrenheit;
    }

    // ********Convert temperature from Fahrenheit to Celsius********
    const fahTOcel = (fehr) => {
        let celsius = ((fehr - 32) * 5 / 9);
        return celsius;
    }

    let result;
    if (valeTemp == "cel") {
        result = celTOfah(numberTemp);
        document.getElementById('resultContainer').innerHTML = ` ${result}°F͢`;
    } else {
        result = fahTOcel(numberTemp);
        document.getElementById('resultContainer').innerHTML = ` ${result}°C`;
    }

    setTimeout(() => {
        window.location.reload();
    }, 2500);
}

