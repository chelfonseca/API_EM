# API with Express integrated to Mongo DB

#### "npm start" : to run the server 
#### "npm run dev": to run the server in developer mode

    The server will listen at http://127.0.0.1:3000 = _.base_url

### Authentication functions: 

- Test: {{ _.base_url }}/test
- Register ( Sign up ): {{_.base_url}}/auth/register
- Aunthenticate ( Sign in ): {{ _.base_url }}/auth/authenticate
- Forgot password ( Receive an e-mail with a token to reset the password ): {{ _.base_url }}/auth/forgot_password
- Reset password  ( with token received): {{ _.base_url }}/auth/reset_password

### Projects functions: ( token required in Bearer Header)

- List: {{ _.base_url }}/projects
- Show: {{ _.base_url }}/projects/{projecId}
- Create: {{ _.base_url }}/projects  - *body required   
- Update: {{ _.base_url }}/projects/{projectId} - *body required
- Delete: {{ _.base_url }}/projects/{projectId}

### Database setting: 
- Login in database ./src/database/index.js 
- Set Username and Password encoded: mongoose.connect('mongodb+srv://{USERNAME}:{PASSWORD}@cluster0.psoxm.    mongodb.net/API_EM?retryWrites=true&w=majority');

### Main libraries used: 
    "express" : Server
    "body-parser" : URL decoder
    "mongoose" : Connection to Database NOSQL Mongo DB
    "bcryptjs" : Encryption of password     
    "jsonwebtoken" : Token genaration   
    "nodemailer" : Send a e-mail token to reset the forgot password
    "nodemailer-express-handlebars" : Integrate with Express

*body example: {
	"title": "New Project ",
	"description": " Project description",
	"tasks": [
		{
			"title": "New task",
			"assignedTo":"61cdc1d14926d8a686e04060" 
		},
		{
			"title": "Other task",
			"assignedTo":"61cdc1d14926d8a686e04060"
		}
	]
	
}