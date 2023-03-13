
class Hotel {

    constructor (nom, habitacions, plantes, area) {

    this.nom = nom;
    this.habitacions = habitacions;
    this.plantes = plantes;
    this.area = area;
      
    }   

    //Getters
    getNom() { return this.nom; }
    getHabitacions() { return this.habitacions; }
    getPlantes() { return this.plantes; }
    getArea() { return this.area; }
    

    //Setters
    setNom(nom) {this.nom = nom; }
    setHabitacions(habitacions) {this.habitacions = habitacions; }
    setPlantes(plantes) {this.plantes = plantes; }
    setArea(area) { this.area = area; }
    

    //Mètode
    calcularManteniment (hotel) {
    let cost = (hotel.getHabitacions() / 20) * 1500;
    return cost;
    }   


}