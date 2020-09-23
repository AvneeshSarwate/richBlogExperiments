//render markdown and put it in blog

//extract music nodes and generate players from them


function renderBlog() {
    let generated_html = parseWithFootnotes(editor.getValue());
    document.getElementById('rendered-content-container').innerHTML = generated_html;
}

function setUpPlayers(){
    
}