function getOffsetSum(elem) {
    var top=0, left=0
    while(elem) {
        top = top + parseFloat(elem.offsetTop)
        left = left + parseFloat(elem.offsetLeft)
        elem = elem.offsetParent        
	}
    
    return {top: Math.round(top), left: Math.round(left)}
}

function getCoordinates (elem) {
	var coord = getOffsetSum(elem);
	console.log(coord.top, coord.left);
}