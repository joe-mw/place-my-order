import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './list.less';
import view from './list.stache';

export const ViewModel = DefineMap.extend({
  message: {
    default: 'This is the pmo-restaurant-list component'
  }
});

export default Component.extend({
  tag: 'pmo-restaurant-list',
  ViewModel,
  view
});
