import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  postsSorting: ['created:desc'],
  sortedPosts: Ember.computed.sort('model', 'postsSorting'),

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
    },
    showCommentBox() {
      this.set('commentBoxVisible', true);
    },
    hideCommentBox() {
      this.set('commentBoxVisible', false);
    }
  }
});
