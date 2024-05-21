//  import("./array.js").then((m) => {
// 	const menu = m.default; // Access the default export
//  console.log(menu);
// });

// //Import File
import menu from "./array.js";
let menus = menu();
// console.log(menus);

// Container for Menu content
const sectionContainer = document.querySelector(".section-center");

// Container for Button content
const buttonContainer = document.querySelector(".btn-container");

// Filter Btn
// selecting btn in the html to filter content according to category from the button in the HTML
// const filterBtn = document.querySelectorAll('.filter-btn');

// Filter button needs to be selected now after the dynamic buttons has been added
// So it would be moved downwards after the inside the function box of dynamic  buttons

//Writing a function for easy selection of the menu items in all event
const menuItemFunction = (menuPar) => {
	let menuItem = menuPar.map((item) => {
		// console.log(item);

		return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <!-- Article Information -->
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
	});
	menuItem = menuItem.join("");
	sectionContainer.innerHTML = menuItem;
	// console.log(menuItem);
};

//Writing a function for easy selection of the Button items in all event
// dynamic button
const buttonItemFunction = (buttonPar) => {
	let buttonValues = buttonPar.reduce(
		(values, value) => {
			if (!values.includes(value.category)) {
				values.push(value.category);
			}
			return values;
		},
		["all"]
	);
	// console.log(buttonValues)
	let dynamicButton = buttonValues.map((value) => {
		return `
	      <button class="filter-btn" type="button" data-class="${value}">${value}</button>
	  `;
	});
	dynamicButton = dynamicButton.join("");
	// console.log(dynamicButton)
	buttonContainer.innerHTML = dynamicButton;

	// filter btn
	// calling filter btn after it has been dynamically added by js
	const filterBtn = document.querySelectorAll(".filter-btn");

	// Btn to filter by category
	filterBtn.forEach((element) => {
		element.addEventListener("click", (e) => {
			// On clicking a particular btn
			const target = e.currentTarget.dataset.class;
			// console.log(target)

			const targetCategory = menus.filter((filterElement) => {
				// console.log(filterElement)

				// PS: The category in the imported array menu
				// console.log(filterElement.category)

				// filtering condition
				if (filterElement.category == target) {
					return filterElement;
				}
			});
			// console.log(targetCategory);

			// Conditional statement for the target 'ALL'
			if (target == "all") {
				menuItemFunction(menus);
			} else {
				menuItemFunction(targetCategory);
			}
		});
	});
};

// Content loaded on page load
window.addEventListener("DOMContentLoaded", () => {
	// menu item function
	menuItemFunction(menus);

	// menu item function
	buttonItemFunction(menus);
});
