import {useAuth} from '../AuthContext.js';
import pkg from 'pg';
const {Client} = pkg;


const client = new Client({
    host: "kashin.db.elephantsql.com",
    user: "prvhztbg",
    post: 5433,
    password: "eRSTmCc_lmjknyk4-nso7Hp2TtDZlx42",
    database: 'prvhztbg'
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


const { currentUser } = useAuth()

// client.query(
//     `Insert into user_table (userID, Username, Email)`,
//     `Values(`+test+`)`, [currentUser.uid]
// ), (err, res) =>{
//     if(!err){
//           console.log("Added", currentUser.uid)
//       }
//       else{
//           console.log(err.message);
//       }
//       client.end;
// }
    



