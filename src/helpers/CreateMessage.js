import getLocaleDate from 'helpers/getLocaleDate';

class CreateMessage {
  constructor(body, idOwner, owner) {
    this.idOwner = idOwner;
    this.id = crypto.randomUUID();
    this.body = body;
    this.date = getLocaleDate(null, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
    this.owner = owner;
    if (owner === 'interlocutor') {
      this.read = false;
    }
  }
}

export default CreateMessage;
