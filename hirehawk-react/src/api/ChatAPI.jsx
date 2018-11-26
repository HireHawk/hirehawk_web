import Config from 'config/api.json'
import request from 'superagent'

/*"chatapi":{
    "uri":"",
        "endPoints":{
        "update":{
            "getAllUnreadMessages": "updateChat/getAllUnreadMessages",
                "getAllUserConversations": "updateChat/getAllUserConversations",
                "getAllUserConversationMessages": "updateChat/getAllUserConversationMessages",
        },
        "admin": {
            "addChat": "adminChat/addChat",
                "setDialog": "adminChat/setDialog",
                "addChatUser": "adminChat/addChatUser",
                "removeChatUser": "adminChat/removeChatUser",
                "deleteChat": "adminChat/deleteChat"
        },
        "chat": {
            "addMessage": "addMessage",
                "getChatById": "getChatById",
                "getMessageById": "getMessageById",
                "setMessagesAsReaded": "setMessagesAsReaded"
        }
    }
}*/

class ChatAPI {
    static createStartURL(fnPath) {
        return 'http://' + Config.chatapi.uri + '/' + fnPath;
    }

    static getAllUnreadMessages(userId) {
      return  request
            .get(createStartURL(Config.chatapi.endPoints.getAllUnreadMessages) + '/' + userId)
            .on('error', err => {
                alert('error');
            })
            .then((res) => {
              console.log('got JSON advert: ' + JSON.stringify(res.body));
              return res.body;
            })
    };

    static getAllUserConversations(userId) {
        request
            .post('http://' + Config.advertapi.uri + '/' + Config.advertapi.endPoints.getAllUserConversations)
            .set('Authorization', 'Bearer '+token)
            .send(advert)
            .set('Content-Type', 'application/json')
            .on('error', err => {
                alert('error');
            })
            .then((res) => {
                alert('got JSON advert: ' + JSON.stringify(res.body));
            })
    };
}


export default ChatAPI;
