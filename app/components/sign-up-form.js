import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(){
      this.get('onSubmit')(this.username, this.password, this.password_confirmation);
    }
  }
});
