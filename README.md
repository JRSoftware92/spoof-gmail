# Clone GMail in 3 Hours

## Summary 

This challenge is to code a working toy clone of the GMail frontend, using React.js. 
You should spend no more than 3 hours on the exercise. 
This is not enough time to clone all of GMail! You’ll have to timebox your work and
triage. 
Exercise your product sensibility to decide which bits of functionality are essential and
must be included, and which are inessential to the user experience and can be deferred. 
Please
feel free to ask for clarification, feedback, and more information as needed.
Don’t spend too long on aesthetics. Something clean and basic is fine. Imagine this draft
frontend will later be styled by a professional graphic designer on your team.

Your solution should include all source code, documentation, and a working, self-contained
webserver of some kind that delivers and runs your frontend code. Please document and test
your codebase to the extent you feel necessary, including a note on why you chose to include or
not include different areas of functionality.

You’ll use a simulated backend REST API. Attached are JSON files representing mock return
values from the various available GET endpoints. Please use them to populate your React app.
For POST and DELETE endpoints, just log a message stating what you would write to the
endpoint.

## API Implementation

### GET 
- `/folders/` -- Returns a list of the user’s folders (e.g. Inbox, Trash, Sent, Spam, Drafts,
Work Emails, Mailing Lists)
- `/folders/<folder-name>` -- Returns the message metadata in the given folder.
- `/messages/<message-id>` -- Returns the contents of the given email.
- `/contacts` -- Returns the user’s address book.
- `/filters` -- Returns the user’s filter rules for incoming messages.
- `/settings` -- Returns account settings, such as signature and vacation auto-responder.

### POST
- `/messages/new` -- Send an email
- `/messages/<message-id>` - Update message metadata
  - Mark / unmark as important
  - Star / unstar
  - Apply / remove tags
  - Archive / unarchive a message
  - Mark / unmark a message as spam
- `/folders/<folder-name>/<message-id>` -- Move message to given folder.
  - Messages are normally deleted by moving them to the Trash folder.
- `/folders/<foo>` -- Creates a new folder if it doesn’t exist yet.
- `/contacts` -- Create a new contact.
- `/contacts/<id>` -- Update contact information.

### DELETE
- `/messages/<message-id>` -- Delete a message forever, bypassing the Trash folder.
- `/contacts/<id>` -- Removes an entry from the user’s address book.
- `/folders/<foo>` -- Deletes the given folder and all of its contents.
  - The following system default folders are special and cannot be deleted: Inbox,
  Sent, Drafts, Spam, Trash.
  - Attempting to delete one of them returns a 403 Forbidden code.

## Dev Notes

### Roadmap

I'm going to deliver the features of this application in phases.
I'm hoping to complete at least the first three phases for this iteration of
the product (three hours of development time).
This documentation is being done ahead of time before I start the challenge to
plan appropriately.

Phase 1 will likely take the most development time as it will involve setting
up the core application structure.

#### Phase 1
- Read Email
- Write Email
- See Folders
- See Emails in Folder

#### Phase 2
- Delete Email
- Create Folder
- Delete Folder (non essential folders)

#### Phase 3
- Mark as Spam
- Archive
- Mark as Important
- Star

#### Phase 4
- Read Contacts
- Create Contact
- Delete Contact

#### Phase 5
- Email Tags
- Apply User Filter Rules for Incoming Messages
- Return and Apply Account Settings

### Choice of Libraries

- React (part of the exercise)
- Redux (to act as our central data store and event coordinator)
- Moment - Simple Date Parsing.
- MUI - UI Library for a quick, but functional and appealing mockup.

I think Redux will be handy for handling updates to the data store based on
compound user actions like moving messages between folders.
