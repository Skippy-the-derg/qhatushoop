function format(command, value) {
    document.execCommand(command, false, value);
 }
  function setUrl() {
    let url = document.getElementById('txtUrl').value;
    let sText = document.getSelection();

    document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank">' + sText + '</a>');
        //format('createlink', url);
 }
