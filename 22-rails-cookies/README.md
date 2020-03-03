# GOALS:

* Describe a cookie.

A: An HTTP cookie (web cookie, browser cookie) is a small text file that a server sends to a client. The browser stores this file and sends it back with each subsequent request to the same server, until it expires or the server assigns a new cookie.


* Explain the data flow problem cookies solve.
A: We use cookies to tell if two requests came from the same browser, this is useful for keeping a user logged in between requests (and other things). Cookies allow us to keep track of information between requests since HTTP doesn't have a built-in method for this (it never will either, since the HTTP request is stateless).


* What are cookies used for?
A: 1) Session Management (login, game score, shopping cart)
    2) Site Personalization (themes, language)
    3) Tracking (user behavior, etc.)


* Find all the cookies on a page.
A: (Google Chrome) Application tab Storage section, Cookie icon. You can see the cookies each site assigns. Show them how to edit, delete, and clear cookies.

- For now, you won't interact with cookies with these methods though, instead we're more concerned with sending and handling cookies on the server sides, in our Rails applications. Rails has a built in way of sending and receiving cookies and it's called the 'Sessions'. -

* Explain what a session is, as far as Rails is concerned.
A: Generally, a session is one period of time in which a user was logged in - everything between log-in and log-out. In rails, a session is also an interface that allows you to store stateful information specific to each user. Using the session method, we can send and receive cookies much easier than the old way (where it's done by attaching headers to a response). Note that the session method is available only in Views and Controllers, not Models.

- Well, where is all this information stored? -

* Describe where session data is stored.
A: When we use the session to send and receive cookies, all of the session data is stored in the cookie itself. All of this information is encrypted, and if you edit the cookie the Rails backend will not accept it.


* Write data to the Rails session and access it later in the app.
A:  session[:user_id] = @user.id

NOTE: Only store basic information (arrays, hashes, strings, numbers) in cookies - model instances can't be properly converted to strings and converted back to Ruby objects. Usually if we want to keep track of what user is logged in instead, we'll use something about the user that is unique to each user. 

* Write data to the flash object and use it to pass information between requests.

* Create a Sessions controller in Rails.
A: 1) rails g controller Sessions
     2) create

- we don't need a sessions model or table because we don't want to store information about the user's session forever. There are cases where you might want to (website analytics / tracking user behavior).
 
* Log a user in with it.
A: 1) Build out basic create action that confirms whether or not that username exists for a user in our app - if it does, then go ahead and send the client a cookie with user_id as the key and their user.id as the value.

* Build a log out action for a user
A: 1) write method Sessions#destroy
     2) session.delete(:user_id)
     3) redirect_to root_url

