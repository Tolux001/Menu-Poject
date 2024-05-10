// Article menu item Array
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Night Stake",
    category: "dinner",
    price: 29.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb crucifix microdosing.`,
  },
];

// Container for Menu content
const sectionContainer = document.querySelector(".section-center");

// Container for Button content
const buttonContainer = document.querySelector(".btn-container");

// Filter Btn
// selecting btn in the html to filter content according to category
// Filter button needs to be selected now after the dynamic buttons has been added 
// const filterBtn = document.querySelectorAll('.filter-btn')


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

			const targetCategory = menu.filter((filterElement) => {
				// console.log(filterElement)

				// PS: The category in the array menu
				// console.log(filterElement.category)

				// filtering condition
				if (filterElement.category == target) {
					return filterElement;
				}
			});
			// console.log(targetCategory);

			// Conditional statement for the target 'ALL'
			if (target == "all") {
				menuItemFunction(menu);
			} else {
				menuItemFunction(targetCategory);
			}
		});
	});
}

// Content loaded on page load
window.addEventListener("DOMContentLoaded", () => {
  // menu item function 
  menuItemFunction(menu);
  
  // menu item function 
  buttonItemFunction(menu);
  
});