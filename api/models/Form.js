module.exports = {
    attributes: {
      name: {
        type: 'string',
        required: true,
      },
      email: {
        type: 'string',
        required: true,
        isEmail: true,
        unique: true,
      },
    },
  };
  