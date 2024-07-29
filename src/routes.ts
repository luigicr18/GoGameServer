import express from "express";
import pool from "./db";
import { comparePassword } from "./middleware";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT id, name, email, password FROM users WHERE email = $1",
      [email.toLowerCase()]
    );
    const user = result.rows[0];
    if (user && (await comparePassword(password, user.password))) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message });
  }
});

export default router;
