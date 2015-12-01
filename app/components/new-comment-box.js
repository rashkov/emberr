export default Ember.Component.extend({
  actions: {
    submit(){
      let userName = $(this.element).find('#inputName').val();
      let commentBody = $(this.element).find('textarea').val();
      this.get('onSubmit')(userName, commentBody);
    }
  }
});
