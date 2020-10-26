# MusicMan2.0
MusicMan2.0 is a remake of Music Man with React. 

**[Deployed Server Application](https://MusicMan2.0-Server.herokuapp.com/)** |
**[Server Repository](https://github.com/MachopCodes/MusicMan2.0-Server)** |
**[Deployed Client Application](https://machopcodes.github.io/MusicMan2.0/#/)**

**Technologies Used**
- JavaScript
- React 
- Axios
- CSS
- Boostrap
- Socket.io
- Express.js

**User Stories**
As an unregistered user I can see the Home Page
As a registered user I can view my upcoming trips
As a registered user I can add trips to my personal trip log
As an unregistered user I can create a User Account
As a registered ser I can update or remove my planned trips
As a registered user I would like to be able to access tidal information related to my trips


The main additions to the application include a search, reviews and messaging. To make a fully functioning app, it needed to allow users to search profiles by criteria, post reviews on different users and for users to message other users - because an application wouldn't be complete if users had to resort to their emails. 

![erd](https://github.com/MachopCodes/MusicMan2.0/blob/master/erd.PNG)

# Search
Search included developing logic to query all profiles based on interest, instrument and state, which is done by a mongoose `.find()` query.
Future iterations will include fuzzy searching and implementing a search by location. 

# Reviews
Reviews were built using a star-rating system and bootstrap accordions to display them on the profile cards. 


# Messaging
Messaging was built using socket.io, with the help of a few guides, this one in particular [javascript mastery](https://www.youtube.com/watch?v=ZwFA3YMfkoc).
Following the structure from that guide, with some adjustments, including: adding a way to automatcally connect user sockets to a chatroom, disconnect the sockets after leaving the chat room and saving messages to user entities. 
In future iterations, I would like to allow users to join the same chat room as the user they are chatting with. At the moment that isn't possible with the ERD structure, so users can't get the "true" interactive instanct messaging experience. 
