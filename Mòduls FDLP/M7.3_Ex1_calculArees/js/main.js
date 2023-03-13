

function main(){

    
    let seleccio = document.querySelector("input[name='poligons']:checked").value;

    switch (seleccio) {

        case "quadrat" : replegarEsbDivs();
        desplegarDiv("areaQuadrat");
        break;

        case "triangle" : replegarEsbDivs();
        desplegarDiv("areaTriangle");
        break;

        case "rectangle" : replegarEsbDivs();
        desplegarDiv("areaRectangle");
        break;

        case "cercle" : replegarEsbDivs();
        desplegarDiv("areaCercle");
        break;
    }
}