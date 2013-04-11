'use strict';

App.TodoController = Ember.ObjectController.extend({
    deleteAction: function() {
        var todo = this.get('model');

        todo.deleteRecord();
        this.get('store').commit();
    }
});