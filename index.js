var kittens = ["Milo", "Otis", "Garfield"]
var moreKittens = ["Broom"]
var evenMoreKittens = ["Arnold"]

function destructivelyAppendKitten(Ralph) {
  return kittens.push(Ralph)
}
function destructivelyPrependKitten(Bob) {
  return kittens.unshift(Bob)
}
 function destructivelyRemoveLastKitten(Garfield) {
   return kittens.pop(Garfield)
 }
function destructivelyRemoveFirstKitten(Milo) {
  return kittens.shift(Milo)
}
function appendKitten(Broom) {
  return moreKittens = kittens.concat("Broom");

  console.log(moreKittens);
}
function prependKitten(Arnold) {
  var theCats = evenMoreKittens.concat(kittens);
  return theCats
}
function removeLastKitten(Garfield) {
  var lessKittens = kittens.splice(3, 1);
  return lessKittens
}
