function filter_list(l) {
  let filteredArray = array.filter(function(elem, index, array) {
    return l.indexOf(elem) === index;
  })
}