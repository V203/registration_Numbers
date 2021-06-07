function RgNm() {

    var plateAll = {
        plateCA: {},
        plateCY: {},
        plateCW: {},
        ObjGetCA: function () { return this.plateCA },
        ObjGetCW: function () { return this.plateCW },
        ObjGetCY: function () { return this.plateCY }


    }
    function getAll() {

        for (const key in plateAll) {
            return key
        }

    }



    function getCA() {
        var ca = []

        ca.push(Object.keys(plateAll.ObjGetCA()));
        return ca.toString()

    }
    function getCY() {
        var cy_ = []
        var cy = []
        
        cy = Object.keys(plateAll.plateCY)
        for (var i = 0; i < cy.length; i++) {
            if(cy.includes(cy_[i])){
                return "sdsd"
            }
        
                cy_ = cy[i]
            
          
        }
        var div_ = document.createElement("div")
            
           div_.appendChild(document.createTextNode(cy_))
            div_.className = "thePlates"
            document.body.insertBefore(div_, show_nowBtn)
        return cy_
    }
    function getCW() {
        var cw = []


        for (const i of Object.keys(plateAll.plateCW)) {
             cw.push(i)
        }
        return cw



    }
    function setPlates(par) {
        par.replace(/ /g, "").trim()
        if (par.length !== 8) {

            return "You have entered an invalid length of character's"
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


    return {
        getAll,
        getCA,
        getCY,
        getCW,
        setPlates,
        clearError
    }
}