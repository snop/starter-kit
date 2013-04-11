'use strict';

App.Router.map(function () {
    this.resource('todos', {path: '/'}, function() {
        this.route('completed');
    });
});

App.TodosIndexRoute = Ember.Route.extend({
    model: function() {
        return App.Todo.find();
    }
});