import React from "react";

/**
 *  Retorna o tipo do dado: Array, String, Object, Number, Function, Null
 *  @param {Any} dado 
 *  @return {String}
 */
export const dataType = dado => Object.prototype.toString.call(dado).slice(8,-1);

/**
 *  Verifica se o dado é NULO
 *  @param {Any} dado 
 *  @return {Boolean}
 */
 export const isNull = data => (data === null || data === undefined);

/**
 *  Verifica se o dado é NULO caso SIM => retorna '' (String vazia) | caso NÃO => retorna dado
 *  @param {Any} dado 
 *  @return {Boolean}
 */
export const get = data => isNull(data) ? '' : data;

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

/**
 *  Cria Elemento React
 *  @param {String} tag div|h1|span|etc...
 *  @param {Object} props {className: '', id: '', etc...}
 *  @param {String|Array} content conteúdo filho do elemento, caso seja passado um array a posição content[1] é default
 *  @param {Boolean} markup caso o conteúdo filho seja uma marção HTML Exp.: "<h1>Hello, World!</h1>"
 *  @return {React.createElement}
 */
export const createElement = (tag, props, content = '', markup = false) => {
  if (dataType(content) === 'Array') {
    if (get(content[0]).trim()) content = get(content[0]);
    else content = get(content[1]);
  }
  const createMarkup = () => ({ __html: content });
  if (markup) props.dangerouslySetInnerHTML = createMarkup();
  const element = React.createElement(tag, props, markup ? null : content);
  return element;
};


