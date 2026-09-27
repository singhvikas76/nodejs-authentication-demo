const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.use(express.json());

const JWT_SECRET = "my-super-secret-key";

let users = [
    // {
    //     id: 1,
    //     name: "Vikas",
    //     email: "vikas@gmail.com",
    //     password: "123456"
    // }
];

const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            message : "Access denied! No token provided"
        });
    }
    
    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();

    }catch(error){
        return res.status(401).json({
            message : "Invalid Token"
        });
    }

};

app.get("/api/profile",authMiddleware, (req,res)=>{
    res.json({
        message : "This is protected api",
        user : req.user
    });
});

app.get("/",(req,res)=>{
    res.send("Authentication server is running...");
});

app.get("/api/users",(req,res)=>{
    res.json(users);
});

app.post("/api/register", async (req,res)=>{
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        // password: req.body.password
        password : hashedPassword
    }

    users.push(newUser);

    res.status(201).json({
        message : "User registered successfully",
        user : newUser
    });
});

app.post("/api/login",async (req,res)=>{
    const {email, password} = req.body;

    const user = users.find(user => user.email === email);

    if(!user){
        return status(401).json({
            message : "Invalid Email or password"
        });
    }

    const isPasswordCorrect = await bcrypt.compare(
        password, user.password
    );

    if(!isPasswordCorrect){
        return res.status(401).json({
            message : "Invalid Email or password"
        });
    }

    const token = jwt.sign(
        {
            userId: user.id,
            email: user.email
        },
        JWT_SECRET,
        {
            expiresIn : "30s"
        }
    );

    res.json({
        message : "Login in success",
        token : token,
        user : {
            id: user.id,
            name: user.name,
            email: user.email
        }
    });
});

app.post("/api/logout", (req,res)=>{
    res.json({
        message : "Logout successful. Please remove the token from client"
    });
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});