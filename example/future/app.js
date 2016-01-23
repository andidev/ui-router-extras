define(['angular', 'angular-ui-router', 'ui-router-extras-future', 'ui-router-extras-statevis'],
    function (angular) {

        var app = angular.module("app", ['ct.ui.router.extras.future', 'ct.ui.router.extras.statevis']);

        app.config(['$futureStateProvider',
            function ($futureStateProvider) {
                // Register a resolve function that loads and registers the future states defined in futureState.json file
                var loadAndRegisterFutureStates = function ($http) {
                    return $http.get('futureStates.json').then(function (resp) {
                        angular.forEach(resp.data, function (fstate) {
                            $futureStateProvider.futureState(fstate);
                        });
                    });
                };
                $futureStateProvider.addResolve(loadAndRegisterFutureStates);

                // Register a state factory that loads the final ui router state with RequireJS
                var requireStateFactory = function ($q, futureState) {
                    var d = $q.defer();
                    require([futureState.src], function (state) {
                        d.resolve(state);
                    });
                    return d.promise;
                };
                $futureStateProvider.stateFactory('requireCtrl', requireStateFactory);
            }]);

        angular.bootstrap(document, ['app']);

        return app;

    });