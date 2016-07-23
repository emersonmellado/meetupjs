var app = require('express')();
var request = require('request');

app.use('/cidade/:cep', function(req, res){
	var cep = req.params.cep;	
	request('http://viacep.com.br/ws/'+cep+'/json/', function(erro, resposta, json){
		if (!erro && resposta.statusCode == 200){
			json = JSON.parse(json);
			
			var html = '<h1>'+json.logradouro+'</h1><br/>' + json.bairro;
			
			res.send(html);
		}else{
			res.send('<h1>CEP Não encontrado</h1>');
		}		
	});
});

app.listen(3000);
console.log('Meu app na porta 3000.');