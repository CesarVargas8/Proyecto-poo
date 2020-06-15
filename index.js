const app=express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


const router = require("./routes");
app.use('/api',router);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
       next();
  });

app.listen(3005,()=>{
    console.log("Escuchando en el puerto 3005");
});