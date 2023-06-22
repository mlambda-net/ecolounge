import { Parallax } from "@lambda/ts/components/parallax";

export class PageLanding {
    private parallax: Parallax;

    constructor() {
        this.parallax = new Parallax("hero-landing", "trigger")
    }

    load() {
        this.parallax.load();
    }

    reload() {
        this.parallax.reload();
    }
}



