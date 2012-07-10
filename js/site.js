$("#itemList").empty();
for (var i = 0; i < localStorage.length; i++){
	var key				= localStorage.key(i);
	var value 			= localStorage.getItem(key);
	var Object			= JSON.parse(localStorage.getItem(key));
	console.log(obj);
	var makeSubList		= $("li></li>");
	var makeSubLi		= $( "<h3>"+obj.group[1]+"</h3>"+
		'<p>' + obj.songsInfo[1]	+ '</p>' +
		'<p>' + obj.sname[1] + '</p>' +
		'<p>' + obj.aname[1] + '</p>' +
		'<p>' + obj.arname[1] + '</p>' +
		'<p>' + obj.url[1] + '</p>' +
		'<img src=\"images/icons/' + obj.group[1] + '.png\" />')
	;
	var makeLink = $("<a href= '#' id=' " + key + "'>Edit</a>");
	makeLink.on('click', function(){
		console.log("This is my key: "+this.id);
	});
	makeLink.html(makeSubLi);
	makeSubList.append(makeLink).appendTo("#itemList");
};	
$('#itemList').listview('refresh');







