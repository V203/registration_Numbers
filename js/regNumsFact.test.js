describe("Setting and getting the values",function(){
    it("The Test take in a number plate in small letters and it should capitalize the first two characters",function(){
        let RgNm_ = RgNm()
        RgNm_.setPlates("ca 345-345")
        assert.equal("CA 345-345", RgNm_.getCA())
        

    })
    it("The test should check if whether the ",function(){
        let RgNm_ = RgNm()
        RgNm_.setPlates("CA 345-345")
        assert.equal("CA 345-345", RgNm_.getCA())
    })
    it("The test should check if the getCW would return ",function(){
        let RgNm_ = RgNm()
        RgNm_.setPlates("CY 321-323")
        assert.equal("CY 321-323",RgNm_.getCY())

    })

    it("The test should return an error message if user inputs invalid characters",function(){
        let RgNm_ = RgNm()
       
        assert.equal("You have entered an invalid reg number, enter eg: CA 127-323 or CY 127-323.", RgNm_.setPlates("!@ 321-323"))

    })
    it("The test should clear the ",function(){

        let RgNm_ = RgNm()
        RgNm_.setPlates("ca 123")
        RgNm_.setPlates("ca 321")
        assert.equal("CA 123",RgNm_.getCA())
    })


})