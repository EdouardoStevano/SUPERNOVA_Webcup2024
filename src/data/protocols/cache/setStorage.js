const SetStorage = {
    set: function(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };
  