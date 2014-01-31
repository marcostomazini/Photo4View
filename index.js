
function getPhoto() {
	var getphoto = new MozActivity({
	  name: "pick",
	  data: {
		type: ["image/png", "image/jpg", "image/jpeg"]
	  }
	});

	getphoto.onsuccess = function () {
	  qrcode.callback = read;
	  var img = document.createElement("img");
	  if (this.result.blob.type.indexOf("image") != -1) {
		img.src = window.URL.createObjectURL(this.result.blob);
		qrcode.decode(img.src);
	  }
	};

	getphoto.onerror = function () { 
		alert("deu erro");
	};	
}	

function read(qr)
{
	if (qr.length == 6) {
		document.location = "https://photo4ffx.herokuapp.com/cliente/?" + qr;
	} else {
		alert("QR Code Inválido");
	}
}	
