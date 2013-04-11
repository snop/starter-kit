'use strict';

App.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean'),
    completedO: function() {
        // TODO Ember.run.once otázka na ember discus Zachara
        this.get('store').commit();
    }.observes('isCompleted')
});
