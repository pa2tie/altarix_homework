// принимает функцию и контекст вызова, возвращает функцию, 
// которая всегда будет иметь корректный контекст вызова 

function bind(func, context) { 
	return function () { 
  	func.apply(context, arguments);
  } 
} 

function func() {
	console.log(this);
}

var g = bind(func, "THIS");
g(); // "THIS"


// не принимает аргументов, возвращает функцию, 
// которая возвращает результат parseInt, если вызвана с таким аргументом впервые, 
// иначе не вычисляет заново, а возвращает сохранённое значение 

function parseIntWithCache() { 
	var cache;
	return function () {
  	
  } 
} 


// принимает любое количество аргументов, 
// возвращает их сумму, без for

function getTotalSum() { 
  return [].reduce.call(arguments, (acc, el) => acc += el);
} 

console.log(getTotalSum(1, 2, 3)); // 6


// * универсальный кэширующий декоратор
