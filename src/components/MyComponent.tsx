import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const MyComponent = () => {
  const [name, setName] = useState('');
  const [interests, setInterests] = useState('');
  const [callToAction, setCallToAction] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Name: ${name}, Interests: ${interests}, Call to Action: ${callToAction}`);
  };

  return (
    <div>
      <h1>My Component</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <TextField
          label="Interests"
          value={interests}
          onChange={(event) => setInterests(event.target.value)}
        />
        <br />
        <Button variant="contained" type="submit">
          {callToAction}
        </Button>
      </form>
    </div>
  );
};

export default MyComponent;