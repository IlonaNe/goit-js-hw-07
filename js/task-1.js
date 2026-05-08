const categoriesList = document.getElementById("categories");
const listItems = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${listItems.length}`);

listItems.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const subItems = item.querySelectorAll("ul li");

    console.log(`Category: ${title}`);
    console.log(`Elements: ${subItems.length}`);
});