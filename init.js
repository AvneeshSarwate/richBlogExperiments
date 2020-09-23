let editor = ace.edit('editor');
editor.session.setMode("ace/mode/markdown");
editor.setTheme("ace/theme/twilight");
editor.setDisplayIndentGuides(false);
editor.setShowPrintMargin(false);

// Enable navigation prompt
window.onbeforeunload = function() {
    return true;
};