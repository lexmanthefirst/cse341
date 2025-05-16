module.exports = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      description: 'The auto-generated id of the contact',
    },
    firstName: {
      type: 'string',
      description: 'The first name of the contact',
      example: 'John',
    },
    lastName: {
      type: 'string',
      description: 'The last name of the contact',
      example: 'Doe',
    },
    email: {
      type: 'string',
      format: 'email',
      description: 'The email of the contact',
      example: 'john@example.com',
    },
    birthday: {
      type: 'string',
      format: 'date',
      description: 'The date of birth of the contact',
    },
    favoriteColor: {
      type: 'string',
      description: 'The favorite color of the contact',
      example: 'blue',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      description: 'The date the contact was created',
      readOnly: true,
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      description: 'The date the contact was last updated',
      readOnly: true,
    },
  },
  required: ['firstName', 'lastName', 'email', 'birthday', 'favoriteColor'],
};
