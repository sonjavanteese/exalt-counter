import { Component, html } from "@exalt/core";
import { preRenderObj, createTempl, serializeForm } from "./app";
import "./index.css";
import styles from './app.css';

export class App extends Component {
    form = super.createRef();
    submit = super.createRef();
    reset = super.createRef();
    out1 = super.createRef();
    eventF = (str) => new CustomEvent("template-render", {detail: str})
    eventR = () => new CustomEvent("template-reset", {detail: null})
    dispatch(str) {
        window.dispatchEvent(this.eventF(str));
    }
    resetForm() {
        window.dispatchEvent(this.eventR());
        this.form.reset();
        this.out1.value = '';
    }
    subform() {
        let data = serializeForm(this.form)
        let d1 = preRenderObj(data)
        let d2 = createTempl(d1)
        this.out1.value = d2
        this.dispatch(d2)
    }
    mount() {
        console.log(this.form)
    }
    render() {
        return html `
        <section class="section border rounded-3">
        <form role="form" onsubmit=${(e) => e.preventDefault()} id="form1" ref="form">
                <div class="grid-row-1">
                <label for="p_count">How Many Fucking
                Paragraphs?</label>
                <div class="">
                <input type="number" ref="p_count" class="form-control" id="p_count" placeholder="How Many Fucking Paragraphs?" min="1" max="12" name="p_count" value="1" data-pg-name="Count">
                </div>
                </div>
                <div class="grid-row-1">
                <label for="h_tag">Want a Motherfucking Header tag?</label>
                <select id="h_tag" aria-label="Default select example" name="h_tag"
                    data-pg-name="Heading">
                    <option value="none" selected>none</option>
                    <option value="h1">h1</option>
                    <option value="h2">h2</option>
                    <option value="h3">h3</option>
                    <option value="h4">h4</option>
                    <option value="h5">h5</option>
                    <option value="h6">h6</option>
                </select>
                </div>
                <div class="mb-3">
                </div>
                <label class="grid-row-2" for="p_tag" data-pg-name="Checkbox">
                <input type="checkbox" class="form-check-input" ref="p_tag" id="p_tag" name="p_tag" data-pg-name="P Tag">
                    <span class="form-check-label" for="p_tag">Add Some Fucking Bitchass <code>&lt;p&gt;</code>
                        Tags.</span>
                </label>
                <label class="grid-row-2" for="img_tag" data-pg-name="Checkbox">
                    <input type="checkbox" class="form-check-input me-4" id="img_tag" name="img_tag" data-pg-name="Img Tag">
                        <span class="form-check-label" for="img_tag">Add a Fucking <code>&lt;img&gt;</code> Tag.</span>
                    </label>
                    <div class="mb-3">
                    </div>
                    <button type="button" onclick=${() => this.subform()} ref="submit" class="submit">Generate it Bitch</button>
                    <button type="reset" onclick=${() => this.resetForm()} ref="reset" class="muted-button reset">Clean That Shit</button>
            </form>
            <div class="mb-3"></div>
            <div class="mb-3">
                <label for="out1">Copy The Motherfucking Code Below and Paste it Where the Fucking you want.</label>
                <textarea class="form-control" ref="out1" id="out1" rows="3" onfocus="this.select()"></textarea>
            </div>
        </section>
        `;
    }
}

Component.create({
    name: "app-root",
    styles: [styles]
}, App);



window.addEventListener("template-render", function(e) {
    console.log("event", e.detail) 
    document.getElementById("out2").innerHTML = e.detail;
});
window.addEventListener("template-reset", function(e) {
    console.log("event reset") 
    document.getElementById("out2").innerHTML = "";
});