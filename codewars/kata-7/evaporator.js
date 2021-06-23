


function evaporator(content, evap_per_day, threshold){ 
   // content - total 
   // evap-per-day = percentage lost every day 
   // threshold = percentage which no longer useful 


   // a place to store the minimum threshold value 
   // a place to store the total number of days - initialized to 0 
   // loop untill the current is less than or equal to the stored minimum threshold value 
   // subtract the percentage evaporator from the current total 
   // increment total number of days 
   // return total number of days 

   const evaporationPercentage = (evap_per_day / 100)
   const thresholdPersentage = (threshold / 100); 
   const minumumThreasholdValue = content * thresholdPersentage
   
   console.log(minumumThreasholdValue)
   let totalDays = 0; 

   while (content >= minumumThreasholdValue) {
      content -= (content*evaporationPercentage)
      totalDays ++; 
   }
   return totalDays; 
 }
