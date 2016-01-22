// Require angularAMD, ui-router, and ui-router-extras
define(['angularAMD', 'angular-ui-router', 'ui-router-extras-future', 'ui-router-extras-statevis'],
    function (angularAMD) { // Only need to inject angularAMD for app config
        var app = angular.module("futureStates",
            ['ct.ui.router.extras.future', 'ct.ui.router.extras.statevis']);

        app.config(['$futureStateProvider', '$controllerProvider',
            function ($futureStateProvider, $controllerProvider) {
                // Loading states from .json file during runtime
                var loadAndRegisterFutureStates = function ($http) {
                    // $http.get().then() returns a promise
                    return $http.get('futureStates.json').then(function (resp) {
                        angular.forEach(resp.data, function (fstate) {
                            // Register each state returned from $http.get() with $futureStateProvider
                            $futureStateProvider.futureState(fstate);
                        });
                    });
                };

                $futureStateProvider.stateFactory('requireCtrl', requireCtrlStateFactory); // Register state factory that registers controller via eval.

                $futureStateProvider.addResolve(loadAndRegisterFutureStates);
            }]);


        // Tell angularAMD to tell angular to bootstrap our app
        angularAMD.bootstrap(app);
        // return app for requireJS registration
        return app;

        function requireCtrlStateFactory($q, futureState) {
            var d = $q.defer(); // make a deferred

            console.log("futureState = ", futureState);

            require([futureState.src], function (lazyController) {
                var fullstate = {
                    controller: lazyController,
                    name: futureState.stateName,
                    url: futureState.urlPrefix,
                    templateUrl: futureState.templateUrl
                };
                d.resolve(fullstate);
            });

            // The state factory returns the promise
            return d.promise;
        }

    });