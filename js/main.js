var createChessTable = function(rows,cols){
	var table = '<table>';
	var bn = true;//para saber si es blanco o negro

	for(var i = 0; i < rows; i++){
		console.log(i);
		table+='<tr>';
		if (i%2==0){
			bn = true;//empieza en blanco
		}
		else{
			bn = false;//empieza en negro
		}
		for(var j = 0; j < cols; j++){
			if (bn){
				classBn = 'white';
			}
			else{
				classBn = 'black';
			}
			table+='<td class="'+classBn+'">';
			table+=i +'-'+j;
			table+='</td>';
			bn = !bn;
		}
		table+='</tr>';
	}
	table+='</table>';
	return table;

}

chessTable = createChessTable(9,9);//(rows,cols)

document.getElementById('container').innerHTML = chessTable;

/*
if((i%2==0 && !bn) || (i%2!=0 && bn))classBn = 'black';
			else classBn = 'white';
			table+='<td class="'+classBn+'">';
			table+=i +'-'+j;
			table+='</td>';
			bn = !bn;

*/