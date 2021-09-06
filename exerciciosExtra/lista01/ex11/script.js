/*
Jeremias possui um cronômetro que consegue marcar o tempo apenas em segundos. 
Sabendo disso, desenvolva um algoritmo que receba o tempo cronometrado, em 
segundos, e diga quantas horas, minutos e segundos se passaram a partir do tempo 
cronometrado.
*/

var segundos = prompt("Digite o tempo em segundos.:");
console.log("Tempo inserido: " + segundos);
var horas = segundos / 3600;
var segundos = segundos % 3600;
var minutos = segundos / 60;
var segundos = segundos % 60;

console.log("Hora: " + horas.toFixed(0));
console.log("Minutos: " + minutos.toFixed(0));
console.log("Segundos: " + segundos.toFixed(0));