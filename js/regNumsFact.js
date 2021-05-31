function RgNm(){
    let plateAll = {};
    let plateCA = {};
    let plateCY = {};
    let plateCW = {};

    function getAll(){
        return Object.keys(plateAll);
    }

    function getCA(){
        return Object.keys(plateCA)
    }
    function getCY(){
        return Object.keys(plateCY)
    }
    function getCW(){
        return Object.keys(plateCW)
    }
    function setPlates(par_){
        if(par_ === undefined){
            plateAll[par_]=0
        }

    }


    return{
        getAll,
        getCA,
        getCY,
        getCW,
        setPlates
    }
}