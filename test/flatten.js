'use strict';

QUnit.module('Тестируем функцию flatten', function() {
  QUnit.test('Работает правильно с плоским массивом', function(assert) {
    const result = flatten([1, 2, 3]);

    assert.deepEqual(result, [1, 2, 3]);
  });

  QUnit.test(
      'Работает правильно с вложенным массивом с несколькими уровнями',
      function(assert) {
        const result = flatten([1, [2, [3, 4], 5], 6]);
        assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
      });

  QUnit.test('Работает правильно с пустым массивом', function(assert) {
    const result = flatten([]);
    assert.deepEqual(result, []);
  });

/**
 *  НОВЫЕ ТЕСТЫ
 */

QUnit.test('Работает с разными типами данных', function(assert) {
  const result =
      flatten([1, 'hello', [true, [null, undefined], {name: 'John'}], 42]);
  assert.deepEqual(
      result, [1, 'hello', true, null, undefined, {name: 'John'}, 42]);
});

QUnit.test('Работает с очень глубокой вложенностью', function(assert) {
  const result = flatten([1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]]);
  assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

QUnit.test('Работает с пустыми вложенными массивами', function(assert) {
  const result = flatten([1, [], 2, [3, [], 4], [[]], 5]);
  assert.deepEqual(result, [1, 2, 3, 4, 5]);
});
});
