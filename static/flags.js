$(function(){
	var br=$('<div/>');
	br.append($('<div/>',{text:'Brazil'}));
	br.append($('<img/>',{src:'D:/3rd Year/Web/Tutorial/static/Flags/br.gif'}));
	$('body').append(br);

	var fr=$('<div/>');
	fr.append($('<div/>',{text:'France'}));
	fr.append($('<img/>',{src:'D:/3rd Year/Web/Tutorial/static/Flags/fr.gif'}));
	$('body').append(fr);

	var gr=$('<div/>');
	gr.append($('<div/>',{text:'Greece'}));
	gr.append($('<img/>',{src:'D:/3rd Year/Web/Tutorial/static/Flags/gr.gif'}));
	$('body').append(gr);

	$('img').css('border','solid 2px black');
	$('img').css('width',200);
	$('div div').css('text-align','center');
	$('body').css('font-family','arial');
	$('body').css('font-size','x-large');

	$('body>div').css('width',206);
	$('body>div').css('border','2px solid black');
	$('body>div').css('padding','24px');
	$('body>div').css('display','inline-block');
	$('body>div').css('margin','1ex');
	
});
var clist=[
	["br","Brazil"],
	["fr","France"],
	["gr","Greece"],
	["za","South Africa"]
];
$(function(){
	createOne();
})
function createOne(){
	var i=Math.floor(clist.length*Math.random());
	var code=clist[i][0];
	var name=clist[i][1];
	var qu=$('<div id="qu"/>');
	qu.append($('<div/>',{text:name,id:'ans'}).hide());
	qu.append($('<img/>',{src:'D:/3rd Year/Web/Tutorial/static/Flags/'+code+'.gif'}));
	qu.append($('<input/>',{id:'response'}));
	$('body').append(qu);

	$('#response').keyup(function(){
		if($('#response').val()==$('#ans').text()){
			alert("Well Done");
		}
	
	});
	$('img').css('border','solid 2px black');
	$('img').css('width',200);
	$('div div').css('text-align','center');
	$('body').css('font-family','arial');
	$('body').css('font-size','x-large');

	$('body>div').css('width',206);
	$('body>div').css('border','2px solid black');
	$('body>div').css('padding','24px');
	$('body>div').css('display','inline-block');
	$('body>div').css('margin','1ex');
}
	

