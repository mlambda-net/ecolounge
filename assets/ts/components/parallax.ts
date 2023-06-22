import * as ScrollMagic from "scrollmagic";

 export class Parallax {

    scenes: ScrollMagic.Scene[];
    selector: string;
    trigger: string;

    constructor(selector: string , trigger: string ) {
        this.selector = selector;
        this.trigger = trigger;
        this.scenes = [] ;
    }

    getOffset() {
        let trigger = document.getElementsByClassName(this.trigger)[0] as HTMLElement;
        return trigger.offsetTop;
    }

    getScenes() : ScrollMagic.Scene[] {
        //@ts-ignore
        let collection = Array.from(document.getElementsByClassName(this.selector));
        return collection.map((e: any) => {
            return new ScrollMagic.Scene({
                triggerElement: e,
                offset: this.getOffset()
            }).setPin(e);
        });
    }

    load() {

        let controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: "onCenter",
                duration: "80%"
            }
        });

        this.scenes = this.getScenes().map(s => {
            // @ts-ignore
            return s.addTo(controller);
        });
    }

    reload() {
        this.scenes.forEach(s => {
            s.offset(this.getOffset()).refresh()
        });
    }
}