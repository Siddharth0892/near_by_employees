module.exports = {
getEmployees: (modelKey, sortKey, lattitude, longitude) => {
  return modelKey.find({
      location: {
       $near: {
        $maxDistance: 100000,
        $geometry: {
         type: "Point",
         coordinates: [lattitude, longitude]
        }
       }
      }
     }).sort(sortKey);
}
}
