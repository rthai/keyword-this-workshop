describe('\'this\' Keyword Workshop', function() {
  describe('Shoe Assignment', function() {
    it('should return the right answer for shoeFunc', function() {
      expect(shoeFunc1).to.equal('object');
    });

    it('should return the right answer for shoeFunc2', function() {
      expect(shoeFunc2).to.equal('object');
    });

    it('should return the right answer for shoeFunc3', function() {
      expect(shoeFunc3).to.equal('window');
    });

    it('should return the right answer for shoeFunc4', function() {
      expect(shoeFunc4).to.equal('object');
    });
  });

  describe('Fruit Assignment', function() {
    it('should return the right answer for fruitFunc', function() {
      expect(fruitFunc1).to.equal('apple');
    });

    it('should return the right answer for fruitFunc2', function() {
      expect(fruitFunc2).to.equal('window');
    });

    it('should return the right answer for fruitFunc3', function() {
      expect(fruitFunc3).to.equal('apple');
    });

    it('should return the right answer for fruitFunc4', function() {
      expect(fruitFunc4).to.equal('mango');
    });

    it('should return the right answer for fruitFunc5', function() {
      expect(fruitFunc5).to.equal('window');
    });

    it('should return the right answer for fruitFunc6', function() {
      expect(fruitFunc6).to.equal('window');
    });

    it('should return the right answer for fruitFunc7', function() {
      expect(fruitFunc7).to.equal('apple');
    });
  });
});