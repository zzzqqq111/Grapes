"use strict";
var BirdWhisperer = /** @class */ (function () {
    function BirdWhisperer(chirping) {
        this.chirping = chirping;
    }
    BirdWhisperer.prototype.chirp = function () {
        return 'Ah~ oh~ ' + this.chirping;
    };
    return BirdWhisperer;
}());
var birdWhisperer = new BirdWhisperer('coo-coo-coo...HTML');
document.body.innerHTML = birdWhisperer.chirp();
