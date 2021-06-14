function RgNm() {

    var plateAll = []
    var regHolder = []







    function getHolder() {
        return regHolder
    }


    function testLength(par_) {
        if (par_.length !== 7) {
          return    "You have entered an invalid length of characters."
        }
    }
    function regCheck(par_) {
        // testLength(par_)
    
         par = par_.toUpperCase().replace(/ /g,"")
        if (par.length !== 7) {
            return    "You have entered an invalid length of characters."
          }
         else if (!plateAll.includes(par)) {
          return  plateAll.push(par)
        }
        
    }

    function getRegCheck() {

        return plateAll;


    }

    function setPlates(par) {


        if ((par.startsWith("CA") || par.startsWith("CY")) || par.startsWith("CW")) {
            plateAll.push(par)
        }
        return plateAll

    }








    // function setPlates(par) {
    //     par.replace(/ /g,"")
    //     if (par.length !== 8) {return "You have entered an invalid length of characters."
    //     }
    //      par_ = par.toUpperCase().replace(/([A-Z])(\d)/g, "$1 $2").trim()

    //     if ((par_.startsWith("CA") || par_.startsWith("CY")) || par_.startsWith("CW")) {

    //         if (par_ === undefined && par_.startsWith("CA")) {



    //              regHolder.push(par_)

    // else if (plateAll.plateCA[par_] !== undefined || plateAll.plateCW[par_] !== undefined || plateAll.plateCY[par_] !== undefined) {
    //     setTimeout(() => { error_out.innerHTML = "" }, 3000) + " " + (error_out.innerHTML = "Reg entered already exist's")
    // }



    // }
    // else {
    //     return "You have entered an invalid reg number, enter eg: CA 127-323 or CY 127-323."
    // }


    // }
    function clearError(par) {
        par = ""
    }





    return {


        setPlates,
        clearError,
        getRegCheck,
        getHolder,
        regCheck,
        testLength


    }

}
