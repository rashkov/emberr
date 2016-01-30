import DS from 'ember-data';
export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  comments: DS.hasMany('comment'),
  username: DS.attr(),
  created: DS.attr('date'),
  updated: DS.attr('date')
});
