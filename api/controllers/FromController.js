module.exports = {
    submitForm: async function (req, res) {
      try {
        const { name, email } = req.body;
  
        // Save form data to the database
        const formEntry = await Form.create({ name, email }).fetch();
  
        return res.json({ message: 'Form submitted successfully!', data: formEntry });
      } catch (error) {
        if (error.code === 'E_UNIQUE') {
          return res.status(400).json({ message: 'Email already exists.' });
        }
        console.error('Error saving form:', error);
        return res.status(500).json({ message: 'An error occurred while saving the form.' });
      }
    },
  };
  