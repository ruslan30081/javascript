let names = prompt('Название');

function nameStr(str) {
  while (!isNaN(str)) {
    alert('Вы ввели не строку');
    str = prompt('Введите строку');
  }
  str = str.trim().replace(/\s+/g, ' ');
  
  if (str.length >= 30) {
    str = str.slice(0, 30) + "...";
  }
  return str;
}

console.log(nameStr(names));
