//function to get age in days
function getAgeInDays(){
	let birthYear = prompt('What year you were born?');
	let ageInDays = (2018 -birthYear)*365;
	let h1 = document.createElement('h1');
	let text = document.createTextNode(`You are ${ageInDays} days old.`);
	h1.setAttribute('id','ageInDays');
	h1.appendChild(text);
	document.getElementById('result').appendChild(h1);
	console.log(ageInDays);
}

//function to remove the result 
function reset(){
	document.getElementById('result').remove();
}

//Rock Scissors Paper game
function game(yourChoice){
	// console.log(yourChoice.src);
	let humanChoice,botChoice,results;
	humanChoice = yourChoice.id;
	console.log('Mychoice',humanChoice);
	botChoice =getChoice(getRand());
	console.log('Bot choice',botChoice)
	results = decideWinner(humanChoice,botChoice)//[1,0]
	console.log(results)
	message = winnerLoserMsg(results)
	console.log(message.message)
	WinnerFinalUi(humanChoice,botChoice,message);

}
function getRand()//get random number
{
	return Math.floor(Math.random()*3);
}
function getChoice(index)//get choice based on random number fom array 
{
	return ['rock','paper','scissors'][index];
}
function decideWinner(humanChoice,botChoice){
	let data ={
		'rock':{'rock':0.5,'paper':0,'scissors':1},
		'paper':{'paper':0.5,'scissors':0,'rock':1},
		'scissors':{'scissors':0.5,'rock':0,'paper':1}
	}
	let myScore =data[humanChoice][botChoice];
	let botScore= data[botChoice][humanChoice];
	return [myScore,botScore];
}

function winnerLoserMsg([myScore,botScore])
{
	if (myScore === 0) {
		return {'message':'You Lost','color':'red'};
	} else if(myScore === 0.5){
		return {'message':'Draw','color':'yellow'};
	}else{
		return {'message':'You Won','color':'green'};
	}
}
function WinnerFinalUi(humanChoice,botChoice,message){
	let imageData={
		'rock':document.getElementById('rock').src,
		'paper':document.getElementById('paper').src,
		'scissors':document.getElementById('scissors').src,
	}
	document.getElementById('rock').remove();
	document.getElementById('scissors').remove();
	document.getElementById('paper').remove();
	let humanDiv = document.createElement('div');
	let botDiv = document.createElement('div');
	let msgDiv =document.createElement('div');
	humanDiv.innerHTML = `<img id="rock" src="${imageData[humanChoice]}" height=150 width = 150 style='box-shadow: 0px 0px 20px 10px rgba(37,50,233,1)'>`;
	msgDiv.innerHTML = `<h1 style='color:${message.color};padding:30px;font-size:60px'>${message.message}</h1>`
	botDiv.innerHTML = `<img id="rock" src="${imageData[botChoice]}">`;
	document.getElementById('flex-box-rps-div').appendChild(humanDiv);
	document.getElementById('flex-box-rps-div').appendChild(msgDiv);
	document.getElementById('flex-box-rps-div').appendChild(botDiv);
}