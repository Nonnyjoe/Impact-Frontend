# Code Structure

- All services should follow the format in the codebase.Create as many services as you will need in the /service/{name}.ts. Try not to import a model from a controller.
- Validate all incoming requests using the /validations/{name}.ts
- Create a corresponding middleware for all validations and add it to the route.
- Do not define types inline. This is crazy to read. Instead, create a separate types file for each model or service eg. /@types/user.ts for the users. Here I place all types related to users eg admin, student, etc.
- Do not push console.logs. Use the logger(desc, message) from the config dir.
- When using envs check the toolbox for the sample import of env.
- There is already a multer config which writes to a cloudinary storage.
- Our response format should be:

```typescript
return res.status(error.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
          status: !!ResponseCode.FAILURE,
          message: error.message || ‘Something bad happened’,
          data: null,
        });
```

```typescript
return res.status(StatusCode.OK).json({
  status: !!ResponseCode.SUCCESS,
  message,
  data,
});
```

#### Upload existing student info by admin with csv (SAMSON)

Admin wants to upload a csv file.
Create a model for this call it onboarding with the relevant fields. (be creative here)
Create an endpoint that accepts a single csv with email, blacklisted(boolean) and cohortId (number)
Place it in the route /users/preboard
It is obviously a post request.
Throw an error if any field is missing from the incoming csv. (No need to save this to the error logs abeg)
Validate the incoming fields and throw an error if any email is not of a valid format or if an id is not supplied.
If any email already exists store this in an in-memory data structure and return it as part of the response to the admin
Save this to the error logs model which you will also create with the following fields. Id, message, data (stringified object), origin (name of route or method).
If an email has been blacklisted, save this into another model called blacklist. Of course validate if it is already there then do nothing.
Store all the valid details in the onboarding model.

#### Onboard user (SAMSON)

Create an endpoint that allows users to be onboarded with only their email. A link to the onboarding frontend will be sent to this email with a token
Place it in the route /users/onboard
It is obviously a post request
Validate the incoming mail against the onboarding model and do nothing if the email does not exist. This way we frustrate potential hackers cos they do not know what is going on.
If the email is already preboarded, generate a token using the createToken function in the utils send this token as mail with the link to the frontend. This link should expire in 48 hours.
Save the token to the user model. Called onboardingToken

#### Create user endpoint (SAMSON)

Allows students to request for an account.
Place it in the route /users/:token
Input: email, firstName, lastName etc
Validate all incoming requests. Create middlewares to handle request validations.
Validate that the incoming token exists in the onboard table and it has not expired.
Save to the users model with role as “user”
Update the hasOnboarded field to true

#### Login Endpoint (SAMSON)

The user should be able to login with email and an otp
Create the /users/otp endpoint for this. This is a get request.
On logging, return a response with a generated token that lasts for one day.
Create a refreshToken endpoint that generates a new token for any logged in user.

#### Other Endpoints

create admin endpoint - post - /users/admin (only by superadmin)

edit user details (by user) - put - /users (Mayowa - DONE)

edit user details (by admin) - put - /users/admin (only by admin) (Mayowa - DONE)

request confirmation endpoint. - put - /users/status (only by admin)

get users with filters (cohort, role, requestStatus, username,
firstname, lastname, email, id, isBlocked) - get - /users (Mayowa - DONE)

get one user - get - /users/:id (Mayowa - DONE)

Create cohort with cohortId (number based), startDate, endDate, numberOfStudents, isActive, description. (only by admin) (Mayowa - Done)

get all cohorts (Mayowa - Done)

get one cohort (Mayowa - Done)
