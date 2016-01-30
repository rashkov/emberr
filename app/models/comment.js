import DS from 'ember-data';
export default DS.Model.extend({
  body: DS.attr(),
  name: DS.attr(),
  post: DS.belongsTo('post'),
  username: DS.attr(),
  created: DS.attr('date'),
  updated: DS.attr('date')
});
