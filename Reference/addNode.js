function addNode() {
    /*
            1. locationName
            2. topValue
            3. leftValue
            4. labelStyle
            */
    // variable
    // var locationName = 'UnknownLocation';
    // var topValue = 45;
    // var leftValue = 20;
    // var labelNavigate = 0;
    var locationName = document.getElementById('locationName').value
    var topValue = document.getElementById('topValue').value
    var leftValue = document.getElementById('leftValue').value
    var labelNavigate = document.getElementById('labelNavigate').value
    var labelStyle = 'label-bottom-left'

    if (topValue > 100) {
        topValue = 100
    } else if (topValue < 0) {
        topValue = 0
    }

    if (leftValue > 100) {
        leftValue = 100
    } else if (leftValue < 0) {
        leftValue = 0
    }

    if (locationName.length > 30) {
        locationName = '城市名字太长'
    }

    switch (labelNavigate) {
        case 1:
            labelStyle = 'label-top-right'
        case 2:
            labelStyle = 'label-top-left'

        case 3:
            labelStyle = 'label-bottom-left'
        case 4:
            labelStyle = 'label-bottom-right'
        default:
            labelStyle = 'label-top-right'
    }
    // Set <li>
    var styleValue = 'top:' + topValue + '%; left:' + leftValue + '%;'
    var liNode = document.createElement('LI')
    liNode.setAttribute('id', locationName)
    liNode.setAttribute('style', styleValue)
        // Set <span>
    var spanNode = document.createElement('SPAN')
    spanNode.setAttribute('class', labelStyle)
    liNode.appendChild(spanNode)
        // text node
    var textNode = document.createTextNode(locationName)
    spanNode.appendChild(textNode)
    document.getElementById('locationList').appendChild(liNode)
}