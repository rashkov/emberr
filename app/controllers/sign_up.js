import Ember from 'ember';
import ENV from 'emberr/config/environment';

export default Ember.Controller.extend({
  oauth_base_url: ENV.APP.oauth_base_url,
  actions: {
    signupSubmit(username, password, password_confirmation) {
      Ember.$.ajax({
        url: this.oauth_base_url + '/users',
        type: 'POST',
        dataType: 'json',
        data: {
          user:{
            username: username,
            password: password,
            password_confirmation: password_confirmation
          }
        },
        success: function(){
          console.log('success',arguments);
        },
        error: function(){
          console.log('error',arguments);
        }
      });
    }
  }
});
