'use client'

import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { Box, Button, Typography } from '@mui/material';

export default function Logout() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('User logged out successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography variant="h4"></Typography>
      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
}
