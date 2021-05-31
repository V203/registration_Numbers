describe("testing",function(){
    it("sample Test",function(){
        let RgNm_ = RgNm()
        RgNm_.setPlates("CA")
        assert.equal("CA",RgNm_.getAll())

    })
})