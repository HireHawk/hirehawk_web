
class AdvertUtils {
  static toAdvert(someClass){
    //to be implemented
    return undefined;
  }
  static horribleUserToAdvertConvert(user){
    let frank = {
      id:user.id,
      name: user.firstName + user.lastName,
      category: 'user',
      info: 'this is a user',
      photo: user.photo,
    }
    return frank;
  }
}
