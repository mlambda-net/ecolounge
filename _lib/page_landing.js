import { TweenMax, TimelineMax } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"

let setParallax = () => {

    let trigger = document.getElementsByClassName("trigger")[0]
    let collection = document.getElementsByClassName("hero")
    let items = Array.from(collection);

    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onCenter",
            duration: "60%",
            offset: trigger.offsetTop
        }
    });

    items.map((e) => {
        let scene = new ScrollMagic.Scene({triggerElement: e});
        scene.setPin(e)
            .addIndicators({colorStart: "black"})
            .addTo(controller);
    });
}

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
window.addEventListener("load", setParallax);

//window.addEventListener("resize", setParallax);