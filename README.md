# Frontend Authentication Template

A frontend template that incorporates basic authentication, using the Local strategy.
Users are able to signup, signin and sign out. 1 route has been created that is protected. Basic bootstrap css has been included for displaying errors and highlighting the button.

### Prerequisites

Requires a backend system that can provide an authorization token
based on [here] https://github.com/DavidNaMills/Serverside-Authentication
This frontend requires the backend to include the following end points:

post /signup  requires Password and Email returns an authorization token
post /signin  requires Password and Email returns an authorization token
get /

Where the get "/" is a basic route for testing and is authenticated.


## Running the tests

npm run test

### Break down into end to end tests

not fully tested
the main actions and reducers have been tested

## Built With

*React

## Future Improvements

include options for different authentication strategies:
* Google Strategy
* Twitter Strategy

refactor input validation to be more verbose
Rename files. Some require more suitable names (especially the actions and reducers)

## Scripts

* npm run start         Start the system
* npm run test          Run test once
* npm run test:watch    Continuously run tests

## Authors

* **David Mills**


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
