import Config from 'config/api.json'
import request from 'superagent'

class OrderAPI{
      static getGiveOrders(userID, ordersAmount) {
        return  request
              .get('http://' + Config.orderapi.uri + '/' + Config.orderapi.endPoints.getAllGiveOrders + '/' + userID)
              .query({ 'OrdersAmount': ordersAmount })
              .on('error', err => {
                  console.log('getGiveOrders encountered error');
              })
              .then((res) => {
                console.log('got JSON orders: ' + JSON.stringify(res.body));
                return res.body;
              })
      };

      static getRetrieveOrders(userID, ordersAmount) {
        return  request
              .get('http://' + Config.orderapi.uri + '/' + Config.orderapi.endPoints.getRetrieveOrders + '/' + userID)
              .query({ 'OrdersAmount': ordersAmount })
              .on('error', err => {
                  console.log('getRetrieveOrders encountered error');
              })
              .then((res) => {
                console.log('got JSON orders: ' + JSON.stringify(res.body));
                return res.body;
              })
      };

      static getGiveOrdersUntill(userID, mdate) {
        return  request
              .get('http://' + Config.orderapi.uri + '/' + Config.orderapi.endPoints.getGiveOrdersUntill + '/' + userID)
              .query({ 'Date': mdate})
              .on('error', err => {
                  console.log('getGiveOrdersUntill encountered error');
              })
              .then((res) => {
                console.log('got JSON orders: ' + JSON.stringify(res.body));
                return res.body;
              })
      };

      static getRetrieveOrdersUntill(userID, mdate) {
        return  request
              .get('http://' + Config.orderapi.uri + '/' + Config.orderapi.endPoints.getRetrieveOrdersUntill + '/' + userID)
              .query({ 'Date': mdate})
              .on('error', err => {
                  console.log('getRetrieveOrdersUntill encountered error');
              })
              .then((res) => {
                console.log('got JSON orders: ' + JSON.stringify(res.body));
                return res.body;
              })
      };


      static getReturnable(userGiverID){
        return  request
              .get('http://' + Config.orderapi.uri + '/' + Config.orderapi.endPoints.getNotReturnedOrders + '/' + userGiverID)
              .on('error', err => {
                  console.log('getReturnable encountered error');
              })
              .then((res) => {
                console.log('got JSON orders: ' + JSON.stringify(res.body));
                return res.body;
              })
      }

      static getPrice(itemID){
        return  request
              .get('http://' + Config.orderapi.uri + '/' + Config.orderapi.endPoints.getPrice + '/' + itemID)
              .on('error', err => {
                  console.log('getPrice encountered error');
              })
              .then((res) => {
                console.log('got JSON orders: ' + JSON.stringify(res.body));
                return res.body;
              })
      }

      /* POST */
      static updatePayment(itemID, newPayFlag){
        return  request
              .post('http://' + Config.orderapi.uri + '/' + Config.orderapi.endPoints.updatePayment + '/' + itemID)
              .query({'newPayFlag': newPayFlag})
              .on('error', err => {
                  console.log('updatePayment encountered error');
              })
              .then((res) => {
                console.log('got JSON orders: ' + JSON.stringify(res.body));
                return res.body;
              })
      }
}

export default OrderAPI;