function validateUsr(username) {
  res =  RegExp(/^\d\w\_{4,16}$/).test(username) 
  return res
}
