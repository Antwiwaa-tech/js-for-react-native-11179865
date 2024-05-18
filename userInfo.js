import { word, formattedStrings } from "./ex.js";

  function createUserProfiles (origionalName, _modifiedName){
   origionalName.map((_name, index ) =>{
    return {
        originalName: word,                                                                                                                             
        modifiedName: formattedStrings[index],
        id: index + 1
    }
   });
}
 export default createUserProfiles;