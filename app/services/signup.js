import Ember from 'ember';
import ENV from 'emberr/config/environment';

export default Ember.Service.extend({
  oauth_base_url: ENV.APP.oauth_base_url,
  submit: function(email, password, password_confirmation){
    return Ember.RSVP.Promise.cast(Ember.$.ajax({
      url: this.oauth_base_url + '/users.json',
      type: 'POST',
      dataType: 'json',
      data: {
        user:{email, password, password_confirmation}
      }
    }));
  }
});
