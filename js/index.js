const mainList = document.querySelector('ul');
mainList.classList.add("list");
mainList.classList.add("main_list");

const mainItems = mainList.querySelectorAll('ul > li');

mainItems.forEach(mainItem => mainItem.classList.add("main_item"))

