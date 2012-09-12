// Generated by CoffeeScript 1.3.3
(function() {
  var timedPersist;

  timedPersist = function(url, parameter, interval) {
    var changed, oldValue, persist, toPersist;
    if (interval == null) {
      interval = 120000;
    }
    toPersist = this;
    oldValue = toPersist.val();
    changed = function(newValue) {
      return !(oldValue === newValue);
    };
    persist = function() {
      var data, value;
      value = toPersist.val();
      if (changed(value)) {
        oldValue = value;
        data = {};
        data[parameter] = encodeURIComponent(value);
        return $.post(url, data);
      }
    };
    setInterval(persist, interval);
    return this;
  };

  (function($) {
    return $.fn.timedPersist = timedPersist;
  })(jQuery);

}).call(this);