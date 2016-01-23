define(['angular', 'angular-ui-router', 'ui-router-extras-future', 'ui-router-extras-statevis'],
    function (angular) {

        var app = angular.module("app", ['ct.ui.router.extras.future', 'ct.ui.router.extras.statevis']);

        app.config(['$futureStateProvider',
            function ($futureStateProvider) {
                // Register a resolve function that loads and registers the states defined in states.json file
                var loadAndRegisterFutureStates = function ($http) {
                    return $http.get('states.json').then(function (resp) {
                        angular.forEach(resp.data, function (fstate) {
                            $futureStateProvider.futureState(fstate);
                        });
                    });
                };
                $futureStateProvider.addResolve(loadAndRegisterFutureStates);

                // Register a state factory that loads the final ui router state and requires the view module
                var requireCtrlStateFactory = function ($q, futureState) {
                    var d = $q.defer();
                    console.log("futureState = ", futureState);
                    require([futureState.src], function (lazyController) {
                        var fullstate = {
                            controller: lazyController,
                            name: futureState.stateName,
                            url: futureState.url,
                            templateUrl: futureState.templateUrl
                        };
                        d.resolve(fullstate);
                    });
                    return d.promise;
                };
                $futureStateProvider.stateFactory('requireCtrl', requireCtrlStateFactory);
            }]);

        angular.bootstrap(document, ['app']);

        return app;

    });