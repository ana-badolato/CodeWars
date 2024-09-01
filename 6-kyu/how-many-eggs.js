function egged(year,span) { 
  if (year === 0){
    return "No chickens yet!";
  }
  let numChickens = year * 3;
  let thisChicken = [];
  let allChickens = [];
  let yearProduction = 300;
  
  for (let i = 1; i <= year; i++){
    for (let j = 0; j < numChickens; j++){
      
      //forma de calcular los huevos que da una gallina en su periodo de vida
      for (let k = 0; k < span; k++){
        if(j>=5){
          thisChicken[j] = 0;
          yearProduction = thisChicken[j];
          break
        }
        thisChicken[j] = Math.floor(yearProduction * (1-0.2));
        yearProduction = thisChicken[j];
      }
    }
  //----------------------------------------------------------------------
  }
  allChickens.push(thisChicken);
  console.log(allChickens);
}

egged(3,6);
 /* for (let i = 1; i <= year; i++){
      
  //forma de calcular los huevos que da una gallina en su periodo de vida
  for (let j = 0; j < span; j++){
    if(j>=5){
      production[j] = 0;
      yearProduction = production[j];
      break
    }
    for (let k = 0; k < 3; k++){
    production[j] = Math.floor(yearProduction * (1-0.2));
    yearProduction = production[j];
      }
  }
  //----------------------------------------------------------------------
  

}
}
//año 1 - 3
//año 2 - año 1 + 3
//año 3 - año 2 + 3

egged(3,6);
*/