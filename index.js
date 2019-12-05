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
},

readAndSaveData: (path, modelKey) => {
  lineReader.eachLine(path, 'utf-8', function(line) {
    var recordFromTxt = JSON.parse(line);
    var mongoObj={};
    mongoObj.name = recordFromTxt.name;
    mongoObj.user_id = recordFromTxt.user_id;
    mongoObj.location = {};
    mongoObj.location.type = "Point";
    mongoObj.location.coordinates = [recordFromTxt.latitude, recordFromTxt.longitude];
    return modelKey.save(mongoObj);
    });
  } 
}
