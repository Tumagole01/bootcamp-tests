describe('testing my isFromBellville function', function(){
    it('ít should return true if the registration number trats with CY' , function(){
        assert.equal(true, isFromBellville('CY 123'));

});
    it('it should return false if the registration number does not start with CY' , function(){
        assert.equal(false, isFromBellville('CJ 123'));

})

});