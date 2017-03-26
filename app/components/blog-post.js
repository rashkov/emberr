import Ember from 'ember';

export default Ember.Component.extend({
  showReplyBtn: true,
  actions: {
    replyClicked(){
      this.get('showCommentBox')();
    }
  }
});
