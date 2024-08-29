async function getWeather(){
    var resposta = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Mogi%20das%20Cruzes&units=metric&appid=64ed82577ced7f69cb1687f0ce536131')

    //Variavel para consumir o JSON do item temperatura
    var tempCelsious = resposta.data.main.temp;

    //Imprime valor no front End com concatenar Jquery e duas casas decimais
    document.getElementById('temperatura').innerHTML =  
    `A temperatura atual de Mogi das Cruzes é: ${tempCelsious.toFixed(2)} °C`
}

  //Chamar função
  getWeather()  