import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';
import 'can-debug#?./is-dev';

const AppViewModel = DefineMap.extend({
  page: 'string',
  slug: 'string',
  action: 'action',

  env: {
    default: () => ({NODE_ENV:'development'}),
    serialize: false
  },
  message: {
    default: 'Hi There!!',
    serialize: false
  },
  title: {
    default: 'place-my-order',
    serialize: false
  }
});

// default page
route.register('{page}', {page: 'home'});
route.register('{page}/{slug}', {slug: null});
route.register('{page}/{slug}/{action}', {slug: null, action: null});

export default AppViewModel;
