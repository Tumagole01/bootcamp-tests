describe('testing my isWeekday function', function(){
    it('ít should return true if the day is Monday, Tuesday, Wednesday, Thursday, Friday' , function(){
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
});
it('ít should return false if the day is not Monday, Tuesday, Wednesday, Thursday, Friday' , function(){
    assert.equal(isWeekday('Saturday'), false);
    assert.equal(isWeekday('Sunday'), false);
})

});