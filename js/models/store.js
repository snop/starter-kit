/*global Todos DS */
'use strict';

App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'App.LSAdapter'
});

App.LSAdapter = DS.LSAdapter.extend({
    namespace: 'todos-emberjs'
});
