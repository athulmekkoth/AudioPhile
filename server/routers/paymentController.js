import express from "express"
import dotenv from "dotenv";
const Stripe = require('stripe')
const app = express();

const stripe=process.env.STRIPE_SECRET_KEY
const router=express.Router();
router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });
  
    res.send({url:session.url });
  });
  module.exports=router;