import QUnit from 'steal-qunit';
import { ViewModel } from './list';

// ViewModel unit tests
QUnit.module('~/restaurant/list');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the pmo-restaurant-list component');
});
