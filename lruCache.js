var LFUCache = function (capacity) {
  this.cache = {};
  this.capacity = capacity;
}

lruCache.prototype.get = function (val) {
  if( this.cache[val] === undefined){
    return -1;
  } else {
    this.cache[val].count++;
  }

  return this.cache[val];
};


lruCache.prototype.put = function (key, value) {
  // var count = 0;
  var lowestCount;
  for(var key in this.cache){
    this.cache[key].latestAdded = false;
  }

  this.cache[key] = {
    value : value,
    count : 0,
    latestAdded : true
  }
  if (Object.keys(this.cache).length > this.capacity) {
    for(var key in this.cache){
      this.cache[key].
    }
  }
}


var cache = new LFUCache(3);

  _.delay = function(func, wait) {
    setTimeout(...arguments);
    
    // var args = Array.prototype.slice.call(arguments, 2);
    // setTimeout(function() {
    //   func.apply(this, args)
    // }, wait);
    
    
  };