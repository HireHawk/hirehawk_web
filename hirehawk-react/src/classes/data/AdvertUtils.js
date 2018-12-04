
class AdvertUtils {
  static toAdvert(someClass){
    //to be implemented
    return undefined;
  }
  static horribleUserToAdvertConvert(user, additionalUser){
    if(additionalUser!=undefined)
      user={...user,...additionalUser};
    let frank = {
      id:user.id,
      name: user.firstName +' '+ user.lastName,
      category: 'user',
      info: user.email,
      photo: user.photo,
    }
    return frank;
  }
}
export default AdvertUtils;
