const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    post: 5432,
    password: "JyXptnt6bJlrLfO5KlaE_SyvmMScsSs6",
    database: 'Crewasis Demo'
})

client.connect();

client.query(`Select * from question`, (err, res) => {
     if(!err){
         console.log(res.rows)
     }
     else{
         console.log(err.message);
     }
     client.end;
})



