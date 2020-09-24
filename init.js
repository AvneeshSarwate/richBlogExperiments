let editor = ace.edit('editor');
editor.session.setMode("ace/mode/markdown");
editor.setTheme("ace/theme/twilight");
editor.setDisplayIndentGuides(false);
editor.setShowPrintMargin(false);

// Enable navigation prompt
window.onbeforeunload = function() {
    return true;
};

const inlineHtml = `you can write <span style="font-size: 30px;"> custom html </span> inline if you really want`;

editor.session.insert({row: 1000, column: 1000}, inlineHtml);