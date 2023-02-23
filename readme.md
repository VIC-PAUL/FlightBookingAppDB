API Documentation

* http://localhost:6060/api/register=>(POST) => Successfully registers user in the database.


* http://localhost:6060/api/login=>(POST) => Successfully logs in users in their accounts else they are not allowed or are asked to register first if not registered. 


* http://localhost:6060/api/flights=>(GET) => Returns a list of all available flights.


* http://localhost:6060/api/flights/:id=>(GET) => Returns the details of a specific flight identified by its ID.


* http://localhost:6060/api/flights=>(POST) => Adds a flight to the list of available flights.


* http://localhost:6060/api/flights/:id=>(PATCH) => Allows users to update the details of a specific flight identified by its ID


* http://localhost:6060/api/flights/:id=>(DELETE) => Allows users to delete a specific flight identified by its ID.


* http://localhost:6060/api/booking=>(POST) => Allows the users to book flights.


* http://localhost:6060/api/dashboard=>(GET) => Returns list of all the bookings so far with the user and flight details.


