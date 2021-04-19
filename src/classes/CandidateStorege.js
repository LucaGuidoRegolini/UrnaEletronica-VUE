export default class CandidateStorege {
  constructor(key) {
    if (!localStorage[key])
      localStorage.setItem(key, JSON.stringify({}));
  }
  getAll(key) {
    const objs = JSON.parse(localStorage[key]);
    let array = [];
    for (let props in objs) array.push(objs[props]);
    return array;
  }
  set(key, name, data) {
    const obj = JSON.parse(localStorage[key]);
    if (obj[name]) {
      throw new URIError("propriedade ja existente");
    } else {
      obj[name] = data;
      localStorage.setItem(key, JSON.stringify(obj));
    }
  }
  delete(key, prop) {
    const objs = JSON.parse(localStorage[key]);
    let resp = delete objs[prop];
    localStorage.setItem(key, JSON.stringify(objs));
    return resp;
  }
  vote(key, prop) {
    const obj = JSON.parse(localStorage[key]);
    if (obj[prop]) {
      obj[prop].votos += 1;
      localStorage.setItem(key, JSON.stringify(obj));
      return true;
    } else return false;
  }
}
