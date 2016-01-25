import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  isNotAuthenticated: Ember.computed('session.isAuthenticated', function(){
    return !this.get('session.isAuthenticated');
  })
});
