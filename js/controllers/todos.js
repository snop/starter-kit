'use strict';

App.TodosIndexController = Ember.Controller.extend({
    createTodoAction: function () {
        var newTodoTitle = this.get('newTodoTitle');

        App.Todo.createRecord({
            title: newTodoTitle,
            isCompleted: false
        });

        this.get('store').commit();
    }
});
