proxy2014
=========

Example Node.js API for AngularJS Workshop on Proxy 2014

## Message
### GET `/api/messages`
Gets all messages

#### Request parameters

**This call does not require parameters**
#### Response

**Format**: JSON

**Body**: Array of messages

#### Example

	[
	  { 
	    id: 'dhsTfddfb98vcx4', 
	    content: 'Hello world', 
	    createdOn: '2001-09-12T04:07:58.024Z' 
	  },
	  { 
	    id: 'rfsaffbU482wxp1', 
	    content: 'Foo bar', 
	    createdOn: '2001-09-12T04:08:14.846Z' 
	  }
	]

---

### GET `/api/message/<id>`
Gets one message

#### Request parameters

##### Url parameters

* id - Id of the message

#### Response

**Format**: JSON

**Body**: Message object

#### Example

	{ 
	  id: 'dhsTfddfb98vcx4', 
	  content: 'Hello world', 
	  createdOn: '2001-09-12T04:07:58.024Z' 
	}

---

### POST /api/message
Posts a message

#### Request parameters

##### Request body

**content** - Content of the message

#### Response

**Format**: JSON

**Body**: Message object posted with the added parameters from server

#### Example

	{ 
	  id: 'dhsTfddfb98vcx4', 
	  content: 'Hello world', 
	  createdOn: '2001-09-12T04:07:58.024Z' 
	}

---

### DELETE /api/message/<id>
Deletes a message

#### Request parameters

##### Url parameters

**id** - Id of the message to delete

#### Response

**Format**: JSON

**Body**: Message object deleted

#### Example

	{ 
	  id: 'dhsTfddfb98vcx4', 
	  content: 'Hello world', 
	  createdOn: '2001-09-12T04:07:58.024Z' 
	}