const crazyB = [
  {
    id: 1,
    name: "Wide Mouth",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    height: "5 foot 5",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfZLinbF6IqmoDLIkOc7zDIJ2V_Mk2e8r1g&usqp=CAU",
  },
  {
      id: 2,
    name: "Headphone Guy",
    color: "Brown",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_KCP1KBo_gOwm8nJKtQtbGkHkxIU72V49A&usqp=CAU",
  },
  {
    id: 3,
    name: "Soccer Ball",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQolLjG136gQQKIofEA2QqLsSlprJTttjzjgQ&usqp=CAU"
  },
  {
    id: 4,
    name: "Witch",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkA4FGHvHNzOLIJ7SmSBFjPgwU9x-hJFdoQ&usqp=CAU"
  },
  {
    id: 5,
    name: "Fat Ghost",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToF6uENlafRUAl-wkjSb9rKAsXy7IWx9q9Vw&usqp=CAU"
  }
]

const targetingApp = document.querySelector('#app');

const renderToDom = (divId, html) => {
const targetedDiv = document.querySelector(divId)
targetedDiv.innerHTML = html
};

const cardsOnDom = (array) => {
  let domString = "";

  for (const bones of array) {
    domString += 
    `<div class="card" style="width: 18rem;">
    <img src="${bones.imageUrl}" class="card-img-top" alt=${bones.name}>
    <div class="card-body">
      <h5 class="card-title">${bones.name}</h5>
      <p class="card-text">${bones.color}</p>
      <p class="card-text">${bones.specialSkill}</p>
      <p class="card-text">${bones.type}</p>
      <p class="card-text">${bones.id} </p>
      <button type="button" id="delete-btn-pet--${bones.id}">Delete</button>
    </div>
  </div>`

  }

  renderToDom('#app', domString);
};

cardsOnDom(crazyB);
