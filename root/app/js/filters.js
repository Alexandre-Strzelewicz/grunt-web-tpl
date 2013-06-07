
var Filters = angular.module('Filters', []);

Filters.filter('fromNow', function() {
  return function(dateString) {
    return moment(new Date(dateString)).fromNow();
  };
});

Filters.filter('simpleDate', function() {
  return function(dateString) {
    return moment(new Date(dateString));
  };
});

Filters.filter('beautifyJson', function() {
  return function(json) {
    var str = angular.copy(json);    
    return JSON.stringify(str, null, 4);
  };
});

Filters.filter('capitalize', function() {
  return function(dateString) {
    if (dateString !== undefined)
      return dateString.charAt(0).toUpperCase() + dateString.slice(1);
    return '';
  };
});

Filters.filter('highlight', function() {
  return function(string, param) {
    if (!param.term || param.term.length < 3) return string;
    return string.replace(new RegExp(param.term, 'gi'), '<span class="match">$&</span>');
  };
});
