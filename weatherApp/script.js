const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();

document.getElementById("date").innerHTML=months[d.getMonth()]+" "+d.getDate()+", "+days[d.getDay()];

let time=d.getHours()>12?(d.getHours()-12)+" :"+d.getMinutes()+" PM":d.getHours()+" :"+d.getMinutes()+" AM";
document.getElementById("time").innerHTML=time;

let loc="";
const search=document.getElementById("search-box");
search.addEventListener("keydown",(e)=>{
	if(e.code=="Enter"){
		loc=e.target.value;
		displayData();
		search.value="";
	}
});
const btn=document.getElementById("search_button");
btn.addEventListener("click",()=>{
	loc=search.value;
	displayData();
	search.value="";
});

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '325b6355ebmshe986b8b69d0e53cp19c057jsnea35daf68dff',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const baseUrl="https://weatherapi-com.p.rapidapi.com/current.json";
async function fetchData(loc){
	try{
		const response=await fetch(`${baseUrl}?q=${loc}`,options);
		const data=await response.json();
		return data;
	}
	catch(err){
		console.log(err);
	}
};

async function displayData(){
	document.querySelector(".card").classList.remove('hide');
	const data=await fetchData(loc);

	document.getElementById("place").innerHTML=data.location.name;
	document.getElementById("temp").innerHTML=data.current.temp_c+" °C";
	document.getElementById("humidity").innerHTML="Humidity: "+data.current.humidity+"%";
	document.getElementById("wind").innerHTML="Wind Speed: "+data.current.wind_mph+"mph";
	// console.log(data);
}


// fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=london", options)
// 	.then(response => response.json())
// 	.then(response => {
// 		// console.log(response);
// 		document.getElementById("temp").innerHTML="Temperature: "+response.current.temp_c+" °C";
// 		document.getElementById("humidity").innerHTML="Humidity: "+response.current.humidity+"%";
// 		document.getElementById("wind").innerHTML="Wind Speed: "+response.current.wind_mph+"mph";
// 	})
// 	.catch(err => console.error(err));

