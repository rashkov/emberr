import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    signupSuccess: function(){
      this.transitionToRoute('login', {queryParams: {newUser: true}});
    }
  }
});
