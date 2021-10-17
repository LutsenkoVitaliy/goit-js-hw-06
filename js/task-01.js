//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const generalEl = document.querySelector('#categories')
console.log("Number of categories:", generalEl.children.length);

//Для каждого элемента li.item в списке ul#categories, 
//найдет и выведет в консоль текст заголовка элемента(тега < h2 >) 
//и количество элементов в категории(всех вложенных в него < li >).

const navEl = generalEl.querySelectorAll('.item').forEach(elements => {
    console.log("Category:", elements.querySelector('h2').textContent);
    console.log("Elements:", elements.querySelectorAll("li").length);  
})


