//AddContact()
const name = []
const number = []


function AddContact() {
	getName = document.getElementById("name").value;
	getNum = document.getElementById("number").value;
	if(getName == ""){
		console.log("Fill out the prompt.")
		document.getElementById("error").innerHTML = "Fill out the prompt."
	}
	if(getNum == ""){
		console.log("Fill out the prompt.")
		document.getElementById("error").innerHTML = "Fill out the prompt."
	}
	
	else if(number.includes(getNum) == true){
		document.getElementById("error").innerHTML = "Sorry, the phone number you inputed has already been taken."
	}

	else if(name.includes(getName) == true){
		document.getElementById("error").innerHTML = "Sorry, the name you inputed has already been taken."
	
	}	
	else{
		name.push(getName)
		number.push(getNum)
		console.log(name)
		console.log(number)
		document.getElementById("error").innerHTML = getName + "'s number has successfully been uploaded as: " + getNum;
	}

}

//Search()

function Search() {
	search = document.getElementById("nameToSearch").value;
	if(name.includes(search) == true){
		store = name.indexOf(search)
		console.log(search + "'s number is:" + number[store])
		document.getElementById("searchResult").innerHTML = search + "'s number is: " + number[store]
	}
	else{
		document.getElementById("searchResult").innerHTML = "N/A"
}
}