import express from "express";

export const authRouter = express.Router();

authRouter.post("/login/google", (req, res) => {
  return res.json({ message: "Ready!" });
});

authRouter.get("/login/google/callback", (req, res) => {
  return res.json({ message: "Ready!" });
});
