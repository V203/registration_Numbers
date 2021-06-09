function RgNm(stored) {

    var plateAll = stored ||{
        plateCA: {},
        plateCY: {},
        plateCW: {}
     


    }
    function getAll() {

        return Object.keys(plateAll.plateCA)

    }



    function getCA() {


        var ca_ = []
        var ca = []

        ca = Object.keys(plateAll.plateCA)
        for (var i = 0; i < ca.length; i++) {

            ca_ = ca[i]
        }
        return ca_

    }
    function getCY() {
        var cy_ = []
        var cy = []

        cy = Object.keys(plateAll.plateCY)
        for (var i = 0; i < cy.length; i++) {

            cy_ = cy[i]
        }
        return cy_

    }
    function getCW() {
        var cw_ = []
        var cw = []

        cw = Object.keys(plateAll.plateCW)
        for (var i = 0; i < cw.length; i++) {
            if (cw ) {
                cw_ = cw[i]
        
            }
        }
        return cw_
    }
    function setPlates(par) {
        
        par.replace(/ /g,"").trim()
        if (par.length !== 8) {

            return "You have entered an invalid length of characters."
        }

        var par_ = par.toUpperCase().replace(/([A-Z])(\d)/g, "$1 $2").trim()

        if ((par_.startsWith("CA") || par_.startsWith("CY")) || par_.startsWith("CW")) {

            if (plateAll.plateCA[par_] === undefined && par_.startsWith("CA")) {

                plateAll.plateCA[par_] = 0

            }
            else if (plateAll.plateCY[par_] === undefined && par_.startsWith("CY")) {
                plateAll.plateCY[par_] = 0
            }
            else if (plateAll.plateCW[par_] === undefined && par_.startsWith("CW")) {
                plateAll.plateCW[par_] = 0
            }

        }
        else {
            return "You have entered an invalid reg number, enter eg: CA 127-323 or CY 127-323."
        }


    }
    function clearError(par) {
        par = ""
    }
    function makePlate (par1){
        let div_ = document.createElement("div")
    
        div_.appendChild(document.createTextNode(par1))
        div_.className = "thePlates"
        
        document.body.insertBefore(div_, show_nowBtn)
    
    }


    return {
        getAll,
        getCA,
        getCY,
        getCW,
        setPlates,
        clearError,
        makePlate
    }
}