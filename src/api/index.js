import axios from 'axios';

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

const getPlacesData  = async (sw,ne)=> {
try { 
    const {data:{data}}= await axios.get(url,{

      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': 'ecfb8607d7msh561792eb12a4e3ap12bd7bjsnff5c15aff577'
      }
    });
    return data;
}
catch (error){
console.log(error)
}

} 
export default getPlacesData