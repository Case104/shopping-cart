![Splash](http://i.imgur.com/sAuwlzO.png)

##Shopping Cart

To view the app first clone it to your desktop. Assuming you have MongoDB installed, run `mongod`. While running the databse, seed it by running the product-seeder.js located in the seed directory. Start the server by running `npm start` in a second tab.

####Technologies Used:
 * Stripe
 * Passport
 * csurf
 * Handlebars
 * Express
 * Node
 * MongoDB
 * Bootstrap


####Features:
 * User sign up and login with validation.
 * Payment processing via Stripe.
 * Session usage and CSRF protection.
 * Orders, Users, and Products persisted in database.


##Explanation

On the home page of the app, you are shown the products available for purchase and can add them to the cart. Choosing to add an item to the cart will create a cart object in your current session. If you were to attept to purchase the item, you would first have to sign in or sign up for the app using your email and password.

The password itself is salted using bcrypt and authenticated using a local strategy with passport. CSRF protection is provided by using the csurf library.

When you check out, your information is sent directly through to stripe, with your credit card information protected and not stored on the database. Your history of orders is then viewable in your user profile.


##Design Thoughts

I built this app to experiment with using Stripe and to think about the workflow of a shopping cart. As such, I decided to use Handlebars for simple templating and focused more on the functionality than on the clenliness of the code. In general, I would break up the routes much more, as well as make it more DRY.



##Closing

I feel like building this app was a great stepping stone for a production app that I am working on. I think that Stripe is an awesome, easy to use tool.
