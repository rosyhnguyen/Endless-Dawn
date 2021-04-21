

function copyToClipboard(id) {
  var copyText = document.querySelector(id)
  var textArea = document.createElement('textarea')
  textArea.value = copyText.textContent
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('Copy')
  textArea.remove()
  setTooltip('Copied Successfully!',id)
  hideTooltip(1000,id)
}

function setTooltip(message,id) {
  $(id).tooltip('hide').attr('data-original-title', message).tooltip('show')
}

function hideTooltip(timeOut = 1000,id) {
  setTimeout(function () {
    $(id).tooltip('hide')
  }, timeOut)
}
