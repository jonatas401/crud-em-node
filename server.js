//importando express
const express = require("express");
const app = express();
//importando o marko tamplate
require('marko/node-require').install();
const markoExpress = require('marko/express');
//importando o bodyparser
const bodyParser = require('body-parser');

//importando o objeto do aluno 
const AlunoDao = require('./src/app/dao/aluno-dao');
const aluno = new AlunoDao();
//importando o flash para mensagens de erro e de sucesso
const flash = require('connect-flash');
const session = require('express-session');
const { response } = require("express");
app.use(session({
    secret:'geeksforgeeks',
    saveUninitialized: true,
    resave:true
}));
app.use(flash());

app.use('/static', express.static('node_modules/bootstrap'));
app.use('/bootstrap', express.static('node_modules/bootstrap'));
app.use(markoExpress());
//para tratar o corpo das requisições
app.use(bodyParser.urlencoded({
    extended: true
}));



// implementando as rotas ------------- 
app.get('/', (req, res)=>{ 
    let response = {
        error_messages: req.flash('error'),
        success_messages: req.flash('success'),
        results:[]
    };
  
    aluno.listar().then((results) =>{
        response.results = results;
        res.marko(require('./src/app/views/alunos.marko'), response);

   }).catch(err => {
        req.flash(' erro inesperado')
        res.marko(require('./src/app/views/alunos.marko'), response );
        console.log(err)
   });

})

app.get('/form',(req, res)=>{
    res.marko(require('./src/app/views/form.marko'))
})

app.post('/alunos', function(req, res){
    
    if(req.body.id != 'undefined'){
        console.log(req.body.id)
        aluno.editar(req.body);

        req.flash('success','aluno editado com sucesso')
        res.redirect('/')
    }else{
        aluno.inserir(req.body).then((results)=>{

        req.flash('success','aluno salvo com sucesso')          
        res.redirect('/')
        }).catch(err =>{
            console.log(err)
            req.flash('error',' um erro inesperado')
            res.redirect('/')
        });
    }
    
    });

app.get('/alunos/delete/:id',(req, res)=>{
    aluno.deletar(req.params.id).then((results)=>{
     
        req.flash('success', 'deletado com sucesso!')
        res.redirect('/')
        }).catch(err =>{
            req.flash('error','erro ao tentar deletar')
            res.redirect('/')
        })
    })
   
app.get('/alunos/editar/:id', (req, res)=>{
    aluno.find(req.params.id).then((results)=>{
        if(results.length > 0 ){
        
        res.marko(require('./src/app/views/form.marko'), results[0])
        }else{
            console.log('houve um erro')
            req.flash('error', 'não conseguimos achar o aluno no id = '+req.params.id)
            res.redirect('/')
        }

    }).catch(err =>{
        //res.redirect('/erro')
        req.flash('houve um erro inesperado')
        res.marko(require('./src/app/views/alunos.marko'));
        console.log(err)

    });
     
});

app.listen(3001, '0.0.0.0',()=>{
    console.log('servidor rodando na porta 3000')
});

