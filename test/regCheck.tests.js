describe('testing my regCheck function', function(){
    it('ít should return true if the registration number starts with GP' , function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));

});
    it('ít should return false if the registration number does not start with GP' , function(){
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'));

})

});