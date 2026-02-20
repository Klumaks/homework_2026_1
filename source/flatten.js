'use strict';

/**
 * Рекурсивно "разворачивает" многомерный массив в одномерный
 * @param {Array} array - Входной массив с произвольным уровнем вложенности
 *
 * @example
 * // возвращает [1, 2, 3]
 * flatten([1, [2, [3]]]);
 *
 * @example
 * // возвращает []
 * flatten([]);
 *
 * @returns {Array} Новый одномерный массив, содержащий все элементы исходного
 *     массива
 */
function flatten(array) {
  let result = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      result = [...result, ...flatten(item)];
    } else {
      result.push(item);
    }
  }
  return result;
}
