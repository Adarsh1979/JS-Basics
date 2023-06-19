// 2622. Cache With Time Limit

var TimeLimitedCache = function() {
    this.obj = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {

    function attachTimer(object, key, value, duration) {
        const timer = setTimeout(() => {
            console.log("timer expired");
            delete object[key];
        }, duration);
        object[key] = [value, timer];
    }

    if(key in this.obj) {
        clearTimeout(this.obj[key][1]);
        attachTimer(this.obj, key, value, duration);
        return true;
    }

    attachTimer(this.obj, key, value, duration);
    return false;

};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(key in this.obj) {
        return this.obj[key][0];
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.obj).length;
};


var obj = new TimeLimitedCache()
obj.set(5, 233, 3000);
console.log(obj.get(5));
obj.set(5, 42, 6000);
console.log(obj.get(5));
 