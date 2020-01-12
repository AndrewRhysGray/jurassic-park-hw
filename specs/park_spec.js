const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dino1;
  let dino2;
  let dino3;
  let dino4;
  let dino5;
  let dino6;
  let dino7;

  beforeEach(function () {
    dino1 = new Dinosaur('dino1', 'carnivore', 100);
    dino2 = new Dinosaur('dino2', 'carnivore', 150);
    dino3 = new Dinosaur('dino3', 'carnivore', 200,);
    dino4 = new Dinosaur('dino4', 'carnivore', 180);
    dino5 = new Dinosaur(' dino5', 'carinivore', 190);

    dinosaurs = [dino1 , dino2, dino3, dino4, dino5];
    park = new Park(dinosaurs);

  });



  it('should have a name', function () {
  const actual = park.name;
    assert.strictEqual(actual, park.name);
  });

  it('should have a ticket price');

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});


