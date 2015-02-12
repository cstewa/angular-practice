'use strict';

angular.module('angularjsTutorial')

.value("AWESOME_THINGS", [
    {
      'title': 'AngularJS',
      'url': 'https://angularjs.org/',
      'description': 'HTML enhanced for web apps!',
      'logo': 'angular.png'
    },
    {
      'title': 'BrowserSync',
      'url': 'http://browsersync.io/',
      'description': 'Time-saving synchronised browser testing.',
      'logo': 'browsersync.png'
    },
    {
      'title': 'GulpJS',
      'url': 'http://gulpjs.com/',
      'description': 'The streaming build system.',
      'logo': 'gulp.png'
    },
    {
      'title': 'Jasmine',
      'url': 'http://jasmine.github.io/',
      'description': 'Behavior-Driven JavaScript.',
      'logo': 'jasmine.png'
    },
    {
      'title': 'Karma',
      'url': 'http://karma-runner.github.io/',
      'description': 'Spectacular Test Runner for JavaScript.',
      'logo': 'karma.png'
    },
    {
      'title': 'Protractor',
      'url': 'https://github.com/angular/protractor',
      'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
      'logo': 'protractor.png'
    },
    {
      'title': 'jQuery',
      'url': 'http://jquery.com/',
      'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
      'logo': 'jquery.jpg'
    },
    {
      'title': 'Bootstrap',
      'url': 'http://getbootstrap.com/',
      'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
      'logo': 'bootstrap.png'
    },
    {
      'title': 'Angular UI Bootstrap',
      'url': 'http://angular-ui.github.io/bootstrap/',
      'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
      'logo': 'ui-bootstrap.png'
    },
    {
      'title': 'Less',
      'url': 'http://lesscss.org/',
      'description': 'Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.',
      'logo': 'less.png'
    }
  ]
)

  .factory('Course', function() {
    function Course (title, url, description, logo) {
      this.title = title;
      this.url = url;
      this.description = description;
      this.logo = logo
    };

    return Course;
  })

  .directive('boxTemplateDirective', function() {
    return {
      templateUrl: 'app/main/box-template-directive.html',
      restrict: 'A',
      scope: {
        currentThing: '=',
      }
    }
  })

  .controller('MainCtrl', function ($scope, AWESOME_THINGS, Course) {
    $scope.awesomeThings = AWESOME_THINGS;

    var course1 = new Course("Math", "math.com", "Learn Math", "+-%");
    var course2 = new Course("English", "english.com", "Learn English", "Shakespeare");

    $scope.awesomeThings.push(course1, course2)

    $scope.submitCourse = function() {
      var course = new Course($scope.courseText, $scope.courseUrl, $scope.courseDescription, $scope.courseLogo);
      $scope.awesomeThings.push(course);
    }

    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
