function copyHtml() {
    var code = document.getElementsByClassName('network-map')
    copyToClip(code, 'html代码复制成功')
}

function copyToClip(content, message) {
    var aux = document.createElement('input')
    aux.setAttribute('value', content)
    document.body.appendChild(aux)
    aux.select()
    document.execCommand('copy')
    document.body.removeChild(aux)
    if (message == null) {
        alert('复制成功')
    } else {
        alert(message)
    }
}