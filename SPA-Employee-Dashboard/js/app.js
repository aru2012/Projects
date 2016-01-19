//enclosing function inside a closure is a good habit
	(function(){
		var employeeModule = angular.module('employeeModule', ['ngRoute']);

		employeeModule.controller('EmployeeController', function(){
				
				this.contacts = employeeData[0].contacts; 	
				this.messages = employeeData[0].messages;
				this.events = employeeData[0].events;
		});
		/*Routing*/
		employeeModule.config(function ($routeProvider) {

            $routeProvider
            .when('/dashboard',{
            	templateUrl: 'partial/dashboard.html'
            })
            .when('/contacts', {
                templateUrl: 'partial/contacts.html'
            })
            .when('/events', {
                templateUrl: 'partial/events.html'
            })
            .when('/messages', {
                templateUrl: 'partial/messages.html'
            })
            .when('/notifications', {
                templateUrl: 'partial/notifications.html'
            })
            .otherwise({ redirectTo: 'dashboard' });

        });
		/*Modal*/
		employeeModule.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

			  $scope.items = ['item1', 'item2', 'item3'];

			  $scope.animationsEnabled = true;

			  $scope.open = function (size) {

			    var modalInstance = $modal.open({
			      animation: $scope.animationsEnabled,
			      templateUrl: 'myModalContent.html',
			      controller: 'ModalInstanceCtrl',
			      size: size,
			      resolve: {
			        items: function () {
			          return $scope.items;
			        }
			      }
			    });
			  };			
			});

			// Please note that $modalInstance represents a modal window (instance) dependency.
			// It is not the same as the $modal service used above.

			employeeModule.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

			  $scope.items = items;
			  $scope.selected = {
			    item: $scope.items[0]
			  };

			  $scope.ok = function () {
			    $modalInstance.close($scope.selected.item);
			  };

			  $scope.cancel = function () {
			    $modalInstance.dismiss('cancel');
			  };
			});
				
		})();