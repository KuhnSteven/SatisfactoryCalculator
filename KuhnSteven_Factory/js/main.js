window.addEventListener("DOMContentLoaded", ()=>{
    let mySingleton = Singleton.getInstance();
});

class Singleton {
    constructor(){
        this.dataObject = new DataObject();
        let submitBtn = document.getElementById("submit").addEventListener("click", this.pullData.bind(this));
    }

    pullData(e){
        e.preventDefault();
        Singleton.display = document.getElementById("outputData");

        let craftItem = document.querySelector("#craftedItems").value;
        let numItems = document.querySelector("#craftQuantity").value;
        let element = document.querySelector("#element").value;

        this.dataObject.type = craftItem;
        this.dataObject.quantity = numItems;
        this.dataObject.element = element;
        //Static variable

        //Factory Time!
        this.dataObject.elementTotal = Utils.processTotal(this.dataObject.element, this.dataObject.quantity);
        this.dataObject.elementQuantity = Utils.elementDensity(this.dataObject.element);
        let newItem = SatisFactory.craftItem(this.dataObject.type);
        newItem.displayData(this.dataObject);
    }
    static toggleHiddenDesc = () => {
        var x = document.getElementById("hiddenDesc");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    static getInstance() {
        if(!Singleton._instance) {
            Singleton._instance = new Singleton();
            return Singleton._instance;
        }
        else {
            return "Singleton already called."; 
        }
    }
    
}

