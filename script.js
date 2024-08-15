const button = document.getElementById(`button`)
const typeBox = document.getElementById(`typeBox`)
const list = document.getElementById(`list`)

button.addEventListener("click", () => {
    const listItem = document.createElement(`li`)
    listItem.textContent = typeBox.value
    list.appendChild(listItem)
})
//All shown above will add a new item to box when typed and submitted.


const removeButton = document.getElementById(`removeButton`);

removeButton.addEventListener(`click`, () => {
    const lastLiItem = document.querySelector(`li:last-child`)
    list.removeChild(lastLiItem)
})
//This will remove last item from the list


const surpriseButton = document.getElementById(`surpriseButton`);
const heading3 = document.getElementById(`heading3`);

surpriseButton.addEventListener(`click`, () => {
    heading3.textContent = `SURPRISE!`
    setTimeout(() => {
        heading3.textContent = ``
    }, 5000);
})
//Changes Title and display new title and remove title with timer


// const list = document.getElementById(`list`);
const allListItems = document.querySelectorAll(`li`);

allListItems.forEach((listItem) => {
    listItem.addEventListener(`click`, (event) => {
        list.removeChild(event.target)
    })
});
//This removes item of list when you click the item yourself to select to remove from the list


//const list = document.getElementById(`list`);
list.addEventListener(`mouseover`, (event) => {
    event.target.textContent = event.target.textContent.toUpperCase()
})
//Changes words in list to all capital letters when hovering over with mouse


const closePopUpBox = document.getElementById(`closePopUpBox`);

closePopUpBox.addEventListener(`click`, () => {
    closePopUpBox.parentNode.style.display = "none"
})
//Closes of and hides everything in this section using parent/sibling methods


const openPopUpBox = document.getElementById(`openPopUpBox`);

openPopUpBox.addEventListener(`click`, () => {
    openPopUpBox.previousElementSibling.style.display = "block"
})
//Displays/Opens up the boxes what had been previously closed/hidden

