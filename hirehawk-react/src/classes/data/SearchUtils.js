


class SearchUtils {
  static toSearchParams(someClass){
    if(!someClass)someClass = {};
    let converted =
     {

       query:someClass.query,
       category:someClass.category?someClass.category:[],
       location:someClass.location,
       fullText:someClass.fullText?true:false,
       minPrice:{
         price:someClass.minPrice?Number(someClass.minPrice.price):undefined,
         period:someClass.minPrice?(someClass.minPrice.period?someClass.minPrice.period:'day'):'day',
         currency:someClass.minPrice?(someClass.minPrice.currency?someClass.minPrice.currency:'uah'):'uah',
       },
       maxPrice:{
         price:someClass.maxPrice?Number(someClass.maxPrice.price):undefined,
         period:someClass.maxPrice?(someClass.maxPrice.period?someClass.maxPrice.period:'day'):'day',
         currency:someClass.maxPrice?(someClass.maxPrice.currency?someClass.maxPrice.currency:'uah'):'uah',
       },
       minDuration:{
         weeks:someClass.minDuration?Number(someClass.minDuration.weeks):undefined,
         days:someClass.minDuration?Number(someClass.minDuration.days):undefined,
         hours:someClass.minDuration?Number(someClass.minDuration.hours):undefined,
       }
    };
    return converted;
  }

}
export default SearchUtils;
