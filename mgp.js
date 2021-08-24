let mgp = {};



mgp.generate = function () {
  
  //randomize staff

  //take data from somewhere with this random thing

  //present result as String
  console.log("Random generated String from somewhere ");
  return "";
};

mgp.randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};


module.exports = mgp;