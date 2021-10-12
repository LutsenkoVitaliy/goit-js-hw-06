//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const generslEl = document.querySelector('#categories')
console.log("Number of categories:", generslEl.children.length);

//Для каждого элемента li.item в списке ul#categories, 
//найдет и выведет в консоль текст заголовка элемента(тега < h2 >) 
//и количество элементов в категории(всех вложенных в него < li >).

const navEl = generslEl.querySelectorAll('.item')
const headEl = navEl.forEach(function (header) {
    console.log("Category:", header.querySelector('h2').textContent);
    console.log("Elements:", header.querySelectorAll("li").length);
    
})
