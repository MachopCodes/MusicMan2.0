# MusicMan2.0
MusicMan2.0 is a remake of Music Man with React. 

The main additions to the application include a search, reviews and messaging. To make a fully functioning app, it needed to allow users to search profiles by criteria, post reviews on different users and for users to message other users - because an application wouldn't be complete if users had to resort to their emails. 

![erd](erd.jpg)

# Search
Search included developing logic to query all profiles based on interest, instrument and state, which is done by a mongoose `.find()` query.
Future iterations will include fuzzy searching and implementing a search by location. 

# Reviews
Reviews were built using a star-rating system and bootstrap accordions to display them on the profile cards. 


# Messaging
Messaging was built using socket.io, with the help of a few guides, this one in particular [javascript mastery](https://www.youtube.com/watch?v=ZwFA3YMfkoc).
Following the structure from that guide, with some adjustments, including: adding a way to automatcally connect user sockets to a chatroom, disconnect the sockets after leaving the chat room and saving messages to user entities. 
In future iterations, I would like to allow users to join the same chat room as the user they are chatting with. At the moment that isn't possible with the ERD structure, so users can't get the "true" interactive instanct messaging experience. 
