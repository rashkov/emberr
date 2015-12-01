export default Ember.Controller.extend({
  actions: {
    submitComment(userName, commentBody) {
      let post = this.store.peekRecord('post', 1);
      let comment = this.store.createRecord('comment', {
        post: post,
        name: userName,
        body: commentBody
      });
      post.get('comments').pushObject(comment);
      comment.save();
    }
  }
});
