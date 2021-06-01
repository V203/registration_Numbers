function RgNm() {
    let plateAll={}
     
    let plateCA={};
    let plateCY={};
    let plateCW={};

    function getAll() {
        return Object.keys(plateAll);
    }

    

    function getCA() {
        return Object.keys(plateCA)
    }
    function getCY() {
        return Object.keys(plateCY)
    }
    function getCW() {
        return Object.keys(plateCW)
    }
    function setPlates(par) {

        var par_ = par.toUpperCase()
        if( (par_.startsWith("CA") || par_.startsWith("CY")) || par_.startsWith("CW")){
         

       
      
       if (plateCA[par_]===undefined && par_.startsWith("CA")) {
        plateCA[par_]=0
        }
        else if(plateCY[par_]===undefined && par_.startsWith("CY")) {
            plateCY[par_]=0
        }
        else if (plateCW[par_]===undefined && par_.startsWith("CW")) {
            plateCW[par_]=0
        }

    }
    else{
        return "This is an error message"
    }
        

    }
    function clearError(par){
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