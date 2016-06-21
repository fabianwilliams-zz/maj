'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {
        $scope.sortorder = '-upVoteCount';

        $scope.event = eventData.event;

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };

    }
);