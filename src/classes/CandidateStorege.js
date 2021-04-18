/* eslint-disable no-unused-vars */
export default class CandidateStorege {
  constructor(key) {
    if (!localStorage[key])
      localStorage.setItem(key, JSON.stringify({}));
  }
  getAll(key) {
    console.log(JSON.parse(localStorage.getItem(key)));
  }
  set(key, name, data) {
    const obj = JSON.parse(localStorage[key]);
    if (obj[name]) {
      throw new URIError("propriedade ja existente");
    }
    obj[name] = data;
    localStorage.setItem(key, JSON.stringify(obj));
  }
}
