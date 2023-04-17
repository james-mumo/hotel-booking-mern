import express from "express"
import jwt from "jsonwebtoken"

const app = express()

app.use(express.json())

const users = [
  {
    id: 1,
    username: "james",
    password: "james",
    isAdmin: true,
  },
  {
    id: 2,
    username: "jane",
    password: "jane",
    isAdmin: false,
  },
]

app.post("/api/login", (req, res) => {
  const { username, password } = req.body

  const user = users.find((u) => {
    return u.username === username && u.password === password
  })
  if (user) {
    //generate access token
    const accessToken = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      "mySecretKey"
    )

    res.json({ username: user.username, isAdmin: user.isAdmin, accessToken })
  } else {
    res.status(400).json("not found")
  }
})

const verifyUser = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (authHeader) {
    const token = authHeader.split(" ")[1]

    jwt.verify(token, "mySecretKey", (err, user) => {
      if (err) {
        return res.status(403).json("Not valid")
      }

      req.user = user
      next()
    })
  } else {
    res.status(401).json("not authenticated!!")
  }
}

app.delete("/api/users/:userId", verifyUser, (req, res) => {
  if (req.user.id === req.params.userId) {
    res.json("user deleted")
  } else {
    res.json("not allowed")
  }
})

app.listen(5555, () => {
  console.log("first")
})
