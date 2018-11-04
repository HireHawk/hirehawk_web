
import Config from './cfg.json'

class UserAPI{
  // here all the functions for data retrieval should be.
  static tryRegister(fields){
    const userAction = async () => {
        const response = await fetch(Config.userapi.uri+'/'+Config.userapi.endPoints.register, {
            method: 'POST',
            body: fields, // all the fields I pass
            headers:{
              'Content-Type': 'application/json'
            }
          });
        const myJson = await response.json(); //extract JSON from the http response
        alert(JSON.stringify(myJson))// do something with myJson
        }
      }
}

export default UserAPI;
