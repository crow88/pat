! function(a, b, c) {
    var d;
    (a.fadeinout = function(b, d, e) {
        this.initialize(b, d, e, {}), this.frame_0 = function() {
            this.stop()
        }, this.timeline.addTween(c.Tween.get(this).call(this.frame_0).wait(1));
        var f = (new c.Shape).setTransform(0, 0, 1, 1);
        f._off = !0, f.graphics.p("Egx/AujMAAAhdFMBj/AAAMAAABdFg"), f.setTransform(320, 298), this.fadeinout = new a.fadeinout_bg1, this.fadeinout.setTransform(350, 344, 1, 1, 0, 0, 0, 350, 344), this.fadeinout.mask = f, this.timeline.addTween(c.Tween.get({}).to({
            state: [{
                t: this.fadeinout
            }]
        }).wait(2))
    }).prototype = d = new c.MovieClip, d.nominalBounds = new c.Rectangle(0, 0, 0, 0), (a.fadeinout_slide = function() {
        this.initialize(b.fadeinout_slide)
    }).prototype = d = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 543, 594), (a.fadeinout_mask = function() {
        this.initialize(), this.shape = (new c.Shape).setTransform(0, 0, 1, 1), this.shape.graphics.f().s("#000000").ss(1, 1, 1).p("EAyEgusMAAABdZMhkHAAAMAAAhdZg"), this.shape.setTransform(321, 299), this.shape_1 = (new c.Shape).setTransform(0, 0, 1, 1), this.shape_1.graphics.f("#000000").s().p("EgyDAutMAAAhdZMBkHAAAMAAABdZg"), this.shape_1.setTransform(321, 299), this.addChild(this.shape_1, this.shape)
    }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 641, 598), (a.fadeinout_bg1 = function(b, d, e) {
        this.initialize(b, d, e, {
            fadein: 1,
            fadeout: 5
        }), this.frame_0 = function() {
            this.stop()
        }, this.frame_4 = function() {
            this.stop()
        }, this.frame_19 = function() {
            this.stop()
        }, this.frame_20 = function() {
            this.stop()
        }, this.timeline.addTween(c.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(15).call(this.frame_19).wait(1).call(this.frame_20)), this.fadeout_black = new a.fadeinout_mask, this.fadeout_black.setTransform(320, 298, .999, .997, 0, 0, 0, 320, 299), this.fadeout_black._off = !0, this.timeline.addTween(c.Tween.get(this.fadeout_black).wait(4).to({
            _off: !1
        }, 0).wait(1).to({
            _off: !0
        }, 12).wait(4)), this.instance = new a.fadeinout_slide, this.instance.setTransform(796, 0, .823, 1.003, 0, 0, 180), this.timeline.addTween(c.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance,
                p: {
                    scaleX: .823,
                    x: 796
                }
            }]
        }, 2).to({
            state: [{
                t: this.instance,
                p: {
                    scaleX: 1.799,
                    x: 686
                }
            }]
        }, 1).to({
            state: []
        }, 1).to({
            state: []
        }, 1).wait(16)), this.instance_1 = new a.fadeinout_slide, this.instance_1.setTransform(0, 0, 1.413, 1.003), this.timeline.addTween(c.Tween.get({}).to({
            state: []
        }).to({
            state: [{
                t: this.instance_1,
                p: {
                    scaleX: 1.413,
                    x: 0
                }
            }]
        }, 17).to({
            state: [{
                t: this.instance_1,
                p: {
                    scaleX: .904,
                    x: -166
                }
            }]
        }, 1).to({
            state: []
        }, 1).wait(2))
    }).prototype = d = new c.MovieClip, d.nominalBounds = new c.Rectangle(0, 0, 0, 0)
}(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;