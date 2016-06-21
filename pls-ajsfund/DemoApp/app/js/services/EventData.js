'use strict';

eventsApp.factory('eventData',
    function() {

        return{
            event: {
                name: 'Angular Boot Camp',
                date: '1/1/2017',
                time: '10:30 am',
                location: {
                    address: 'Google HQ',
                    city: 'Mountain View',
                    province: 'CA'
                },
                imageUrl: '/img/angularjs-logo.png',
                sessions:[
                    {
                        name: 'Directives MasterClass',
                        speaker: 'Matthew Bramer',
                        duration: '1 hour',
                        level: 'Advanced',
                        abstract: 'lorem ipsum ',
                        upVoteCount: 0
                    },
                    {
                        name: 'Scopes for Fun and Profit',
                        speaker: 'Fabian Williams',
                        duration: '2 hour',
                        level: 'Beginner',
                        abstract: 'lorem ipsum ',
                        upVoteCount: 0
                    },
                    {
                        name: 'Well Behaved Controllers',
                        speaker: 'Cathy Dew',
                        duration: '1 hour',
                        level: 'Intermediate',
                        abstract: 'lorem ipsum ',
                        upVoteCount: 0
                    }
                ]

            }

        };
    }
);

