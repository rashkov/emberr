import Ember from 'ember';

export default Ember.Component.extend({
  commentClose: function(){
    this.get('hideCommentBox')();
    this.set('comment', '');
  },
  actions: {
    submit(){
      this.get('onSubmit')(this.postid, this.name, this.comment);
      this.commentClose();
    },
    replyClicked(){
      this.get('hideCommentBox')();
    },
    commentClose(){
      this.commentClose();
    }
  }
});
