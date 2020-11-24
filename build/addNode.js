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
	var elements = getElements();
	var i = 0;
	var locationName;
	var topValue;
	var leftValue;
	var number
	for(var j=0;j<elements.length;j++){
		i++;
		if(i==1){
			locationName = elements[j].value;
		}else if(i==2){
			number = elements[j].value.substring(1)*1;
			if(elements[j].value.substring(0,1)=="N"){
				topValue = (90-number)/180;
			}else if(elements[j].value.substring(0,1)=="S"){
				topValue = (90+number)/180;
			}
		}else if(i==3){
			i=0;
			number = elements[j].value.substring(1)*1;
			if(elements[j].value.substring(0,1)=="E"){
				leftValue = (180+number)/360;
			}else if(elements[j].value.substring(0,1)=="W"){
				leftValue = number/360;
			}
			leftValue = leftValue*100;
			topValue = topValue*100+5;
			console.log(locationName);
			console.log(leftValue);
			console.log(topValue);
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
			var labelNavigate = 4;
			var labelStyle;
			switch (labelNavigate) {
				case 1:
					labelStyle = 'label-top-right'; break;
				case 2:
					labelStyle = 'label-top-left'; break;
				case 3:
					labelStyle = 'label-bottom-left'; break;
				case 4:
					labelStyle = 'label-bottom-right'; break;
				default:
					labelStyle = 'label-top-right'; break;
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
	}
}
function getElements(){
		var form = document.getElementById("form");
		var elements = new Array();
		var tagElements = form.getElementsByTagName("input"); 
		for (var j = 0; j < tagElements.length; j++){  
			elements.push(tagElements[j]); 
			console.log(tagElements[j].value);
		}
		return elements;
	}