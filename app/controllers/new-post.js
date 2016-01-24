import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    submitPost(title, body) {
      Ember.Logger.log('submitPost!');
      let post = this.store.createRecord('post', {title, body});
      post.save();
      this.transitionToRoute('index');
    }
  }
});
