class SatisFactory {
    // The name makes sense in context of the videogame 'Satisfactory'
    constructor() {}
     static craftItem = (type) => {
        switch(type) {
            case "plate":
                return new Plate();
                break;
            case "rod":
                return new Rod();
                break;
            case "screws":
                return new Screws();
                break;
            default:
            console.log('Unfamiliar item ' + type + 'requested, please input a listed item.');
        }
    }
}