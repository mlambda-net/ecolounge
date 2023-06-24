
import { PageLanding } from "@lambda/ts/pages/page_landing"
import "@lambda/css/app.scss"

export class App {
    constructor() {
    }
    CreateLanding() {
        return new PageLanding()
    }
}
window.addEventListener("load",()=> {
    let app = new App();
    const event = new CustomEvent("app.load", {detail: app });
    window.dispatchEvent(event)
})