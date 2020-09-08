function areThereDuplicates() {
  let collection ={}
  for (let val in arguments) {
    collection[arguments[val]]= (collection[arguments[val]])
  }
  for (let key in collection) {
    if (collection[key] >1) return true
  }
  return false;
}