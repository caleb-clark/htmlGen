function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
function fileGen(){
	var telem = document.getElementById('title');
	var celem = document.getElementById('content');
	download(telem.value + ".txt",celem.value);
	
}