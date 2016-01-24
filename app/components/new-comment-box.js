import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  actions: {
    submit(){
      this.get('onSubmit')(this.name, this.comment);
    }
  }
});
