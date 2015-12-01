export default Ember.Component.extend({
  commentsUpdate: Ember.observer('comments', function(){
    console.log('comments updated!');
  })

});
