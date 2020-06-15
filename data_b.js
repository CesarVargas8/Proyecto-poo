const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     password: '',
     database: 'ferreteria'
});


module.exports.func = function(){ 
     return{
     agregar: function(req,res)
     {
          pool.query("INSERT INTO productos VALUES('"+ req.body.codigo +"','"+req.body.nombre+"','"+req.body.descripcion+"','"+req.body.cantidad+"','"+req.body.precio+"')");
     },
     obtener: function(req)
     {
          return pool.query("SELECT * FROM productos WHERE NoCuenta = " + parseInt(req.query.nombre))
          .then(rows => {
               console.log(rows[0])
               return rows[0];
          })
          
     
         
    }}
}