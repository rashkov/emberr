export default DS.Model.extend({
  body: DS.attr(),
  name: DS.attr(),
  post: DS.belongsTo('post')
});
