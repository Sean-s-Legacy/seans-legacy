import * as express from "express";
const helmet = require("helmet");
import * as bodyParser from "body-parser";
import * as cors from "cors";
// const admin = require("firebase-admin");
import { routesConfig } from "./routes";
// const serviceAccount = require("../serviceAccountKey.json");

// @ts-ignore
const app: express.Application = express();


// app.use(express.json())
// app.use(express.urlencoded({extended: true}));


// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

  app.use(helmet());

  const corsOptions = {
    origin: ['http://localhost:3000'], // Replace with deployed frontend's URL
  };

  app.use(cors(corsOptions));
  app.use(bodyParser.json());

  routesConfig(app);

  app.use(
    helmet.referrerPolicy({
      policy: ["strict-origin-when-cross-origin"],
    })
  );
  
  // app.use(bodyParser.json());


//route from all users API endpoints


app.get("/", (req, res) => {
  res.send("Hello, bye Express!");
});

app.listen(3006, () => console.log('Server started'));

// exports.api = functions.https.onRequest(app)

// // To handle "Function Timeout" exception
// exports.functionsTimeOut = functions.runWith({
//     timeoutSeconds: 300
// })

// app.post('/signup', async (req:any, res:any) => {
//     const user = {
//         email: req.body.email,
//         password: req.body.password
//     }

//   const userResponse = await admin.auth().createUser({
//       email: user.email,
//       password: user.password,
//       emailVerified:false,
//       disabled: false,

//   });
//   res.json(userResponse); 
// })

// // listen for request
//  const PORT =  8080;

//  app.listen(PORT, () => {

//     try {
//      console.log(`server running on ${PORT}`)
        
//     } catch (error) {
//         console.log(error, 'error')
//     }

//     console.log(`server running ondd ${PORT}`)

//  })
 

 export default app;
