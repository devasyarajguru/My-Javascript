// Our text Input and submit properties will be stored
const addItems = document.querySelector('.add-items');
// Our items will be stored
const plates = document.querySelector('.plates'); 

// Retrieve our items stored in LocalStorage or if none then fallback empty array
const itemsArr = JSON.parse(localStorage.getItem('loglevel')) || [];

// For handling items
function itemshandle(e)
{
    e.preventDefault(); // Prevent Reloading
    // Stores our text input value
    const item = (this.querySelector('[name=item]')).value

    // Putting the stored value in the object
    const itemsObject = 
    {
        item,
        done:false
    }
    itemsArr.push(itemsObject); // Pushing object in the Array
    displayList(itemsArr,plates);
    // Setting the items in LocalStorage    
    localStorage.setItem('loglevel' , JSON.stringify(itemsArr));    
    this.reset(); // Resets the displayed value
}

// For Dispplaying Items    
function displayList(UniArr = [] , Uniplates)
{
    Uniplates.innerHTML = UniArr.map((plate,i) =>
    {
        // for input line - ${plate.done ? 'checked' : ''} - If our done is false then it is checked and if done is true then it is not checked    
        return `
            <li>
            <input type='checkbox' data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}> 
                <label for='item${i}'>${plate.item}</label>
            </li>`;
    }).join('');   
}
function toggleDone(e)
{   
    if(!e.target.matches('input')){
        return; // skip it if anything else than input
    }
    const el = e.target.dataset.index
    console.log(el);
    console.log(itemsArr[el].done);
    itemsArr[el].done = !itemsArr[el].done;
    localStorage.setItem('loglevel' , JSON.stringify(itemsArr));
    displayList(itemsArr,plates);

}   

// EventListener  - Submit for Text input and submit properties 
addItems.addEventListener('submit', itemshandle);
plates.addEventListener('click' , toggleDone);
// This call is likely intended to ensure that the UI representation of the list of items reflects the latest data when the page loads
displayList(itemsArr,plates);