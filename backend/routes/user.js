import { Router } from 'express';

const router = Router();

router.post('/signup', (req, res) => {
    console.log("Sign up");
    // Add your sign-up logic here
    res.send("Sign up successful"); // Example response
});

router.post('/signin', (req, res) => {
    console.log("Sign in");
    // Add your sign-in logic here
    res.send("Sign in successful"); // Example response
});

export default router;
