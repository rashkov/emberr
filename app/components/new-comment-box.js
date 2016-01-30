import Ember from 'ember';

export default Ember.Component.extend({
  commentClose: function(){
    this.set('showCommentBox', false);
    this.set('comment', '');
  },
  actions: {
    submit(){
      this.get('onSubmit')(this.postid, this.name, this.comment);
      this.commentClose();
    },
    replyClicked(){
      this.set('showCommentBox', true);
    },
    commentClose(){
      this.commentClose();
    }
  }
});
