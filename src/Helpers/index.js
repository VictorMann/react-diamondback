/**
 *  Retorna o tipo do dado: Array, String, Object, Number, Function, Null
 *  @param {Any} dado 
 *  @return {String}
 */
export const dataType = dado => Object.prototype.toString.call(dado).slice(8,-1);

/**
 *  Verifica se o dado passado corresponde a um número
 *  @param {Any} dado 
 *  @return {Boolean}
 */
export const isNumber = dado => {
  if (dataType(dado) === 'Number') return true;
  if (dataType(dado) === 'String') return isNaN(dado) ? false : true;
  return false;
};