import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const editor = document.getElementById("editor");
const output = document.getElementById("preview");

update();

function update() {
  output.innerHTML = marked.parse(
    editor.value.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""),
    {
      pedantic: false,
      gfm: true,
      breaks: true,
    }
  );
}

editor.addEventListener("input", () => {
  update();
});
