// Data Object to hold form data
class DataObject{
    constructor(){
        this.type = "";
        this.quantity = 0;
        this.element = "";
        this.elementQuantity = 0;
        this.elementTotal = 0;
    }
}

// Item Classes
class Plate{
    constructor(){
        console.log("Plate Created");
    }
    displayData = (itemObj) =>{
        let content = `<div class="outputCard">
                <img class="cardImg" src="images/plate.png" alt="plate">
                <div class="cardContent">
                    <h4>Crafted: ${itemObj.type} (# to craft: ${itemObj.quantity})</h4>
                    <h2>necessary ingredients: </h2>
                    <ul>
                        <li>[${itemObj.elementQuantity}] ${itemObj.element}</li>
                    </ul>
                    <p>total ${itemObj.element} needed: ${itemObj.elementTotal}</p>
                </div>
            </div>`;
            Singleton.display.innerHTML = content;
    }
}
class Rod {
    constructor() {
        console.log("Rod Created");
    }
    displayData = (itemObj) => {
        let content = `<div class="outputCard">
                <img class="cardImg" src="images/rod.png" alt="rods">
                <div class="cardContent">
                    <h4>Crafted: ${itemObj.type} (# to craft: ${itemObj.quantity})</h4>
                    <h2>necessary ingredients: </h2>
                    <ul>
                        <li>[${itemObj.elementQuantity}] ${itemObj.element}</li>
                    </ul>
                    <p>total ${itemObj.element} needed: ${itemObj.elementTotal}</p>
                </div>
            </div>`;
        Singleton.display.innerHTML = content;
    }
}
class Screws {
    constructor() {
        console.log("Screws Created");
    }
    displayData = (itemObj) => {
        let content = `<div class="outputCard">
                <img class="cardImg" src="images/screws.png" alt="screws">
                <div class="cardContent">
                    <h4>Crafted: ${itemObj.type} (# to craft: ${itemObj.quantity})</h4>
                    <h2>necessary ingredients: </h2>
                    <ul>
                        <li>[${itemObj.elementQuantity}] ${itemObj.element}</li>
                    </ul>
                    <p>total ${itemObj.element} needed: ${itemObj.elementTotal}</p>
                </div>
            </div>`;
        Singleton.display.innerHTML = content;
    }
}