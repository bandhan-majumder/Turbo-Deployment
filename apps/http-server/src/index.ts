import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
    res.send("Hi there")
})

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    // do database operations
    try {
        const user = await client.user.create({
            data: {
                username,
                password
            }
        })

        res.json({
            success: "true",
            message: "User created successfully",
            userId: user.id
        })
    } catch (e) {
        res.json({
            success: "false",
            message: "Could not create user",
        })
    }
})
app.listen(3002);