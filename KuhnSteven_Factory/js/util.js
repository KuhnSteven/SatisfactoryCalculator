class Utils {
    constructor() {}
    //process form data to calculate raw resources needed
    static processTotal(i, q) {
        // quantity == # of desired selected items to craft
        let quantity = q;

        //material density formula
        let strength = 0;
        if(i == "iron"){
            strength = 2;
        }else if(i == "copper"){
            strength = 1;
        }else if(i =="steel"){
            strength = 4;
        }else{
            strength = 100000;
        }

        return strength * quantity;
    }

    static elementDensity(i){
        if (i == "iron") {
            return 2;
        } else if (i == "copper") {
            return 1;
        } else if (i == "steel") {
            return 4;
        } else {
            return 100000;
        }
    }
}