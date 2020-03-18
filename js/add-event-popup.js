// JavaScript Document

document.getElementById('.event-button').addEventListener('click', function(){
	document.querySelector('.popup-content').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
	document.querySelector('.popup-content').style.display = 'none';
});