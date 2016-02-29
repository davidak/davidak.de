//
// binary clock
//
// I got a binary watch as birthday present. Why not show
// such a clock at my site?
//
// Sorry for the (maybe) bad javascript. I don't speak javascript,
// but i unittested all functions.
//
// Copyright Gerold Pummer, gpummer@ghp.at, January 2007
// 
// Use it, modify it, do as you please
//

// This is the path to the various images which represent the hours or minutes
var imagePath="http://davidak.de/binaeruhr" ;

// This is the default prefix for the image names used for hour digits 
// e.g. h10 represents the least significant hour digit cleared
// e.g. h11 represents the least significant hour digit set
var hourImagePrefix = "h" ;

// This is the default prefix for the image names used for minute digits
var minuteImagePrefix = "m" ;

// Set this to 0, 1 or 2 for the different view and image modes
var viewEffect = 0 ;

// Name of the png which fills the space for the hour images if viewEffect > 0
var fillerImage = "bcf" ;


function isValidHour(anHour) {
	if((typeof anHour != "number")  || (anHour < 0) || (anHour > 24)) {
		return false ;
	}

	return true ;
}


function isValidMinute(aMinute) {
	if((typeof aMinute != "number")  || (aMinute < 0) || (aMinute > 59)) {
		return false ;
	}

	return true ;
}


//
// Simple but specialized binary converter
//
// @returns a string of digits 0/1. The length of the string is aDigitCount.
//    if aDigitCount is < 1 then 1 is used.
function toBinaryString(aValue, aDigitCount) {
	if(aDigitCount < 1) {
		aDigitCount = 1 ;
	}
	var startValue = (1 << (aDigitCount - 1)) ;
	var hour = "" ;
	
	while(startValue > 0) {
		if(0 == (aValue & startValue)) {
			hour += "0" ;
		} else {
			hour += "1" ;
		}
		startValue >>>= 1 ;
	}

	return hour ;
}

//
// converting the hour to binary format
//
// this clock shows only the am/pm format, so 13 o'clock is 1h (or 1pm)
//
function convertHours(anHour) {
	if(!isValidHour(anHour)) {
		anHour = 0 ;
	}

	if(anHour > 12) {
		anHour -= 12 ;
	}
	
	return toBinaryString(anHour, 4) ;
}


function convertMinutes(aMinute) {
	if(!isValidMinute(aMinute)) {
		aMinute = 0 ;
	}

	return toBinaryString(aMinute, 6) ;
}


function buildBinaryPictureStringWithPrefix(aPrefix, aBinaryString) {
	var len = aBinaryString.length ;
	var result = "";
	for(var i = 0; i < len; i++) {
		if(i > 0) {
			result += " " ;
		}
		result += 
			aPrefix + 
			(2 == viewEffect ? '0' : (len - i)) +
		    aBinaryString.charAt(i) ;
	}
	return result ;
}

function buildBinaryPictureString(aBinaryString) {
	return buildBinaryPictureStringWithPrefix("", aBinaryString) ;
}



function buildHoursImageNames(anHour) {
	if(viewEffect > 0) {
		return fillerImage + " " + buildBinaryPictureString(convertHours(anHour)) + " " + fillerImage ;
	}
	
	return buildBinaryPictureStringWithPrefix(hourImagePrefix, convertHours(anHour)) ;
}

function buildMinutesImageNames(aMinute) {
	if(viewEffect > 0) {
		return buildBinaryPictureString(convertMinutes(aMinute)) ;
	}
	
	return buildBinaryPictureStringWithPrefix(minuteImagePrefix, convertMinutes(aMinute)) ;
}


function buildImageTag(anImageNameString) {
	var arrayOfImages = anImageNameString.split(" ") ;
	var result = "" ;
	
	for(var i = 0; i < arrayOfImages.length; i++) {
		result += '<img src="' + imagePath + '/' + arrayOfImages[i] + '.png">' ; 
	}

	return result ;
}

function writeBinaryClock() {
	var myDate = new Date() ;
	var s = buildImageTag(buildHoursImageNames(myDate.getHours()))  ;
	s += '<br />' ;
	s += buildImageTag(buildMinutesImageNames(myDate.getMinutes())) ;
	document.getElementById("clock").innerHTML=s ;
}


//
// Sets the new path for the images
//
// @param anImagePath is the path where the images ((h|m)*.png) are located 
//
function initBinaryClock(anImagePath) {
	imagePath = anImagePath ;
	viewEffect = 0 ;
}


//
// Sets the view Mode for the binary clock
//
// @param 0 ... default, show the samui moon images (h|m)nn.png
//        1 ... use the same images for hour&minutes nn.png (+ bcf.png)
//        2 ... use only images 00.png and 01.png (+ bcf.png)
//
function binaryClockSetViewMode(aMode) {
	if(typeof aMode != "number") {
		aMode = 0 ;
	}
	if(aMode < 0 || aMode > 2) {
		aMode = 0 ;
	}
	viewEffect = aMode ;
}
