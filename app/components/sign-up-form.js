import Ember from 'ember';
import ENV from 'emberr/config/environment';

export default Ember.Component.extend({
  signup: Ember.inject.service(),
  actions: {
    submit(){
      let foo = this.get('signup').submit(this.username, this.password, this.password_confirmation);
      foo.then(()=>{
        this.get('onSignup')();
      }, (response)=>{
        this.set('errors', response.responseJSON.errors);
      });
    }
  }
});
