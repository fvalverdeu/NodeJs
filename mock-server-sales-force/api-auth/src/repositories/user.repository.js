import { resolve } from 'dns';

const data = require('./data.json');
const request = require('../models/request.model');

export default class {
  async login(request) {
    return new Promise(resolve => {
      resolve(data.filter(obj => {
        obj.username
      }))
    })
  }
}
