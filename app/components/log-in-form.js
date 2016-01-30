import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password).then(
        function() {
          // ember-simple-auth takes care of routing to the index route on success
        },
        () => {
          this.set('errorMessage', true);
        }
      );
    }
  }
});
