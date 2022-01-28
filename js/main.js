
let searchInput = document.getElementById("search");
let findBtn = document.getElementById("findBtn");


//************** */

let finalWeather;
let locationName = {};
let forecast = [];
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// 




//****************/



async function getData(theCountry) {
    let myWeather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9d22c8c853524416bde223810222601&days=3&q=${theCountry}`);
    finalWeather = await myWeather.json();
    locationName = finalWeather.location.name
    forecast = finalWeather.forecast.forecastday


    display()


}









// ******************


window.addEventListener("load", function () {
    getData("paris");
    display();
});



searchInput.addEventListener('keyup', function () {

    if (searchInput.value.length > 2) {
        getData(searchInput.value)
        locationName = searchInput.value;
        searchLoaction(searchInput.value);
    }


})

searchInput.addEventListener('blur', function () {

    clearInput()

})



//*************/



function searchLoaction(term) {

    if (locationName.includes(term) == true) {
        // console.log(locationName)
        display()

    }
    // display()
}




// **********************




function display() {


    document.querySelector(".location").innerHTML = locationName;

    // date code
    let firstDay = finalWeather.forecast.forecastday[0].date;
    let firstIndex = new Date(firstDay).getDay();
    let today = new Date();
    let theMoth = finalWeather.forecast.forecastday[0].date;
    let monthIndex = new Date(theMoth).getMonth();

    //*********/

    let firstCard = `

   <div class="card-one pb-5 ">
       <div class="title  d-flex justify-content-between">
           <div class="day">${days[firstIndex]}</div>
           <div class="dat">${today.getDate()} ${monthNames[monthIndex]}</div>
       </div>
  
     <div class="card-content py-4">
         <div class="location">
         ${locationName}
         </div>
         <div class="degree">
          ${finalWeather.forecast.forecastday[0].day.maxtemp_c} <sup>o</sup>C
             <img src="https:${finalWeather.forecast.forecastday[0].day.condition.icon}" alt="" srcset="">
         </div>
       </div>  
         <div class="card-footer">
             <h3>${finalWeather.forecast.forecastday[0].day.condition.text}</h3>
           <span><img src="images/icon-umberella.png" alt="" srcset=""> 20% </span>
           <span class="ms-3"><img src="images/icon-wind.png" alt="" srcset=""> 18km/h </span>
           <span class="ms-3"><img src="images/icon-compass.png" alt="" srcset=""> East</span>
         </div>
        

    
   </div>

   `
    document.getElementById("firstCard").innerHTML = firstCard;



    let secondDay = finalWeather.forecast.forecastday[1].date;
    let secondIndex = new Date(secondDay).getDay()

    let secondCard = `

<div class="card-two pb-5">
    <div class="title text-center">
        <div class="day">${days[secondIndex]}</div>
       
    </div>
    <div class="card-content py-4 text-center">
        <div class="image pt-4">
           <img src="https:${finalWeather.forecast.forecastday[1].day.condition.icon}" alt="" srcset="">
        </div>
          <div class="weather1">
          <div> ${finalWeather.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div>
          <div> ${finalWeather.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></div> 
          </div>
          <div class="weatherDesc">${finalWeather.forecast.forecastday[1].day.condition.text}</div>
    </div>  
        
       
</div>


`
    document.getElementById("secondCard").innerHTML = secondCard;

    let thirdDay = finalWeather.forecast.forecastday[2].date;
    let thirdIndex = new Date(thirdDay).getDay()
    let thirdCard = `

<div class="card-three pb-5">
    <div class="title  text-center">
        <div class="day">${days[thirdIndex]}</div>
        
    </div>
    <div class="card-content py-4 text-center">
        <div class="image pt-4">
           <img src="https:${finalWeather.forecast.forecastday[2].day.condition.icon}" alt="" srcset="">
        </div>
        <div class="weather2">
          <div> ${finalWeather.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div>
          <div> ${finalWeather.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></div> 
        </div>
        <div class="weatherDesc">${finalWeather.forecast.forecastday[2].day.condition.text}</div>
      </div>  
       
</div>

`
    document.getElementById("thirdCard").innerHTML = thirdCard;
}





//**************** */


function clearInput() {
    searchInput.value = "";

}


//************/





