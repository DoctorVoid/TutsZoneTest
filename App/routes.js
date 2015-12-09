(function () {
    angular.module("tutsapp").config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: "/App/main.template.html",
        })
        .when('/register',{
            templateUrl: "/App/register/register.template.html"
        })
        .otherwise({
            templateUrl: "/App/main.template.html"
        });
    });
})();
