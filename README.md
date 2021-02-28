# MusicMan2.0
I built musicman because I wanted to give musicians a platform to network and reach out to others for music lessons. Musicman lets search profiles based on interests, instruments and locations. Users can sign in to message other users, create their own profiles and review other user profiles. 

**[Deployed Server Application](https://MusicMan2.0-Server.herokuapp.com/)** |
**[Server Repository](https://github.com/MachopCodes/MusicMan2.0-Server)** |
**[Deployed Client Application](https://machopcodes.github.io/MusicMan2.0/#/)** |

## First Iteration

Musicman was initially built using vanilla javascript with an express.js / MongoDB API. The server structure in the second iteration has largely stayed the same, save for the added complexities of socket.io, and adding the review and message shemas to the mongoDB profiles as subdocuments.  

V1 Application
**[MusicMan1.0 Client](https://github.com/MachopCodes/MusicMan-Client)**
**[MusicMan1.0 Server](https://github.com/MachopCodes/MusicMan-Server)**

**Technologies Used**
- JavaScript
- React 
- Axios
- CSS
- Boostrap
- Socket.io
- Express.js

![erd](https://github.com/MachopCodes/MusicMan2.0/blob/master/erd.PNG)

### Search
Search included developing logic to query all profiles based on interest, instrument and state, which is done by a mongoose `.find()` query.
Future iterations will include fuzzy searching and implementing a search by location. 

### Reviews
Reviews were built using a star-rating system and bootstrap accordions to display them on the profile cards. 


### Messaging
Messaging was built using socket.io, with the help of a few guides, this one in particular [javascript mastery](https://www.youtube.com/watch?v=ZwFA3YMfkoc).
Following the structure from that guide, with some adjustments, including: adding a way to automatcally connect user sockets to a chatroom, disconnect the sockets after leaving the chat room and saving messages to user entities. 
In future iterations, I would like to allow users to join the same chat room as the user they are chatting with. At the moment that isn't possible with the ERD structure, so users can't get the "true" interactive instanct messaging experience. 

## Future Iterations
- Google maps API integration
- A more robust search algorithm with a column that lists top search results sorted by criteria. 
- Srtipe Integration to handle user payment transactions
