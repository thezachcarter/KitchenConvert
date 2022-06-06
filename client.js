let ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }

ready(() => {

    console.log('JS ready');

    //one fl oz baseline
    // const ts = 0.17;
    // const tb = 0.5;
    // const oz = 1;
    // const cu = 8;
    // const pi = 16;
    // const qu = 32;
    // const ga = 128;

    //input * input variable / by output variable = output
    document.getElementById("convertBtn").onclick =
    
    function inputToOz(){
        //inputs, quantity and unit of measure 
        let qty = document.getElementById("inputQty").value;
        let uom;
        
        switch (document.getElementById("inputUom").value) {
            case 'tsp':
                uom = 0.17;
                break;
            case 'tbsp':
                uom = 0.5;
                break;
            case 'oz':
                uom = 1;
                break;
            case 'c':
                uom = 8;
                break;
            case 'pt':
                uom = 16;
                break;
            case 'qt':
                uom = 32;
                break;
            case 'gal':
                uom = 128;
                break;
            default:
                break;
        }

        console.log('clicked convertBtn');
        console.log('qty =', qty, 'uom =', uom);
        let inputInOz = qty * uom;
        console.log(inputInOz);
    }

});
