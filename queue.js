var Queue = function () {
  this.count = 0;
  this.deCount = 0;
  this.storage = {};
};

Queue.prototype.add = function (val) {
  this.storage[this.count] = value;
  this.count++;
};
Queue.prototype.remove = function () {
  var temp = this.storage[this.deCount];
  delete this.storage[this.deCount];
  this.deCount++;
  return temp;
};
Queue.prototype.peak = function () {
  return this.storage[this.deCount];
};
Queue.prototype.isEmpty = function () {
  if(this.count - this.deCount === 0) {
    return true;
  }else {
    return false;
  }
};
