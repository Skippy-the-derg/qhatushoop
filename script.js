function format(command, value) {
    document.execCommand(command, false, value);
 }
  function setUrl() {
    let url = document.getElementById('txtUrl').value;
    let sText = document.getSelection();

    document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank">' + sText + '</a>');
        //format('createlink', url);
 }
<div class="sample-toolbar">
<span class="fa fa-bold fa-fw" aria-hidden="true"></span>
<span class="fa fa-italic fa-fw" aria-hidden="true"></span>
<span class="fa fa-list fa-fw" aria-hidden="true"></span>
<span class="fa fa-link fa-fw" aria-hidden="true"></span>
<span class="fa fa-bold fa-fw" onclick="format('bold')"></span>
<span class="fa fa-italic fa-fw" onclick="format('italic')"></span>
<span class="fa fa-list fa-fw" onclick="format('insertunorderedlist')"></span>
</div>
