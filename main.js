
let allCitys = {

    الخرطوم:"KH",
    سنار:"SI",
    بورتسودان:"RS",
    مدني:"GZ",
    نهرالنيل:"NR",
    كسلا:"NB",
  }

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let city = document.getElementById("city");
let btn = document.getElementById("btn");
let citys =  document.getElementById("citys");
let cityParams = allCitys[citys.value];
let status;
city.innerHTML = citys.value;

// this function select city 
function selectedCity(){
    citys.onclick = (event) => {

     event.preventDefault();

       city.innerHTML = citys.value;
       cityParams = allCitys[citys.value];
    };

   location.reload();
    
};


  

  let params = {
    country:"SD",
    city:`${cityParams}`,
  }


function getRequst(){
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params: params
  })
  .then(function (response) {

    console.log(response.data.data.timings);

    day.innerHTML =  response.data.data.date.hijri.day + " "+ response.data.data.date.hijri.weekday.ar;
    month.innerHTML =  response.data.data.date.hijri.month.ar
    year.innerHTML = response.data.data.date.hijri.year + " هجري "

     document.getElementById("fj").innerHTML = response.data.data.timings.Fajr;
     document.getElementById("sh").innerHTML = response.data.data.timings.Sunrise;
     document.getElementById("her").innerHTML = response.data.data.timings.Dhuhr;
     document.getElementById("asr").innerHTML = response.data.data.timings.Asr;
     document.getElementById("mag").innerHTML = response.data.data.timings.Maghrib;
     document.getElementById("esh").innerHTML = response.data.data.timings.Isha;

  })
  .catch(function (error) {
    console.log(error);
  })
  
}
getRequst();