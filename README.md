

**Backend Deployed Link** - [https://pantyhose-dugong.cyclic.app/](https://pantyhose-dugong.cyclic.app/)


**Frontend Deployed Link** - [https://image-sharing-website.vercel.app/](https://image-sharing-website.vercel.app/)



<br/>
<br/>

## Backend
1. TechStacks - Node, Express, MongoDB
2. All Routes are Protected 
3. Using JWT for Token Generation.
4. Implemented Password Hashing
5. Implemented Blocklisting of Token.
6. Storing All the Data into MongoDB 

## Frontend
1. TechStacks - React,Redux, Material UI
2. Home and Favorites Routes are Protected 
3. Responsive Design.
4. Implemented Download and Bookmark Images.
5. Implemented Infinite Scrolling on Home Page



##Todos
- [ ] Add Box Shadow to Login and Signup.
- [ ] Use MongoDb Agggregation in favorites page
- [X] Implement Blacklisting
- [X] Implement Refresh Token in Backend 
- [ ] Implement Refresh Token in Frontend 
- [ ] Implement Github Auth
- [ ] Implement Google Auth
- [ ] Admin should be able to see all the Users listed in UI (except the password) and have access to delete users (Use Authorization).
- [ ] Add Forget Password, Send Emails, verify OTP then Change Password and update that changed password in DB.
- [ ] While Registration Take Email, send Otp, verify email then only create Account in DB.
- [ ] Add Upload photo option and share it with other users.
- [ ] User should be able to upload images and these images should be visible to others on Home Page.
- [ ] On Visiting the user profile section, user should be able to see all the images shared by them in their respective profile section.
- [ ] Download Button Should Work
- [ ] Add Email Verification while doing Signup and Login.
- [ ] Add Forgot Password Path and add Email verification.
- [ ] If User Changes the token in the Local Storage, in that case Frontend should react properly. It should respond by saying something went wrong and it should redirect to the Login Page.

Bugs
- [ ]  After Removing any Bookmark from Favorites Page.The Favorite Data on Home Page is not updating I need to refresh the Home Page then only it is updating the Home Page.



