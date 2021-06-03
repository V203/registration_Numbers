function RgNm() {
    let plateAll = {
        plateCA: {},
        plateCY: {},
        plateCW: {},
        ObjGetCA: function () { return this.plateCA },
        ObjGetCW: function () { return this.plateCW },
        ObjGetCY: function () { return this.plateCY }


    }
    function getAll() {
        return Object.keys(plateAll.all())

    }



    function getCA() {
        for (let i in plateAll.plateCA) {
            return i


        }
    }
    function getCY() {
        for (let i in plateAll.plateCY) {
            return i
        }
    }
    function getCW() {
        for (let i in plateAll.plateCW) {
            return i
        }
    }
    function setPlates(par) {

        var par_ = par.toUpperCase().trim()
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