const XLSX = require('xlsx');

const file = readFile('../../členové.xlsx')
const db = file.Sheets['Sheet1'];

const members = utils.sheet_to_json(db);
const fullName = {};

const firstName = members['Jméno'];
const lastName = members['Příjmení'];
fullName = firstName + lastName;

console.log(fullName);


let memberName = document.getElementById('name');
let nickname = document.getElementById('nickname');
let age = document.getElementById('age');
let fromYear = document.getElementById('memberFromYear');
let unit = document.getElementById('unit');
let rank = document.getElementById('rank');

memberName.innerText = 'Jan Kocanda';
nickname.innerText = 'Krtek';
age.innerText = '16';
fromYear.innerText = '2013';
unit.innerText = 'Ostříži';
rank.innerText = 'Rádce'