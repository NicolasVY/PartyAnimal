// JavaScript Document



document.getElementById('event-button').addEventListener('click', function(){
	document.querySelector('.bg-popup').style.display = 'flex';
});

document.getElementById('close').addEventListener('click', function(){
	document.querySelector('.bg-popup').style.display = 'none';
});