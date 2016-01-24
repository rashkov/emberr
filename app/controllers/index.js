export default Ember.Controller.extend({
  actions: {
    submitComment(postId, userName, commentBody) {
      let post = this.store.peekRecord('post', postId);
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
