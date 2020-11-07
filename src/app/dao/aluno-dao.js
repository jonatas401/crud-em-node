const mysql = require('mysql2');

class AlunoDao{
        constructor(){

        
            this._connection = mysql.createConnection({
                host : 'localhost',
                user : 'root',
                password : '85322487-+Jj',
                database : 'db_curso'
            });
            this._connection.connect();

            
        }
    
        find(id){
            
            return new Promise((resolve, reject)=>{
                this._connection.query(`select * from alunos where id=${id}`, 
                 function (err, results,fields){
                    if (err) {
                         reject (err)
                     }else{
                         resolve (results)//resolve(results)
                     }
                 });
             
            });
      
    }
        
        

        listar(){
            return new Promise((resolve, reject)=>{
               this._connection.query(`select * from alunos` , 
                function (err, results,fields){
                   if (err) {
                        reject (err)
                    }else{
                        resolve (results)//resolve(results)
                    }
                });
            
           });
           
        }
        inserir(aluno){

        
            
            return new Promise((resolve, reject)=>{
                this._connection.query(`insert into alunos (nome,email,curso) values (?,?,?)`,[aluno.nome,aluno.email, aluno.curso], 
                 function (err, results){
                    if (err) {
                         reject (err)
                     }else{
                         resolve (results)//resolve(results)
                     }
                 });
             
            });
            
        }
        deletar(id){ 
            return new Promise((resolve, reject)=>{
                this._connection.query(`delete from alunos where id=${id}`, 
                 function (err, results,fields){
                    if (err) {
                         reject (err)
                     }else{
                         resolve (results)//resolve(results)
                     }
                 });
             
            });
      
            
        
           
        }
        editar(aluno){
            //console.log(aluno.id - 1);
            //this._connection.query(`update alunos set nome=${aluno.nome} email=${aluno.email} curso=${aluno.curso}  where id=${aluno.id} `)
                
            return new Promise((resolve, reject)=>{
                this._connection.query(`update alunos set nome=?,curso=?,email=?  where id=${aluno.id} `,[aluno.nome, aluno.curso,aluno.email], 
                 function (err, results){
                    if (err) {
                         reject (err)
                     }else{
                         resolve (results)
                     }
                 });
             
            });
            
        }
    }
    

module.exports =  AlunoDao;