import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import {
  Telegram,
  LinkedIn,
  GitHub,
  ArrowUpward,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: 'background.paper',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              Pavel Pulin
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tech Lead & Full-Stack Developer
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={() => window.open('https://t.me/jangot', '_blank')}
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 181, 246, 0.1)',
                  }
                }}
              >
                <Telegram />
              </IconButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={() => window.open('https://www.linkedin.com/in/pavel-pulin-156528b5/', '_blank')}
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 181, 246, 0.1)',
                  }
                }}
              >
                <LinkedIn />
              </IconButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                onClick={scrollToTop}
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(100, 181, 246, 0.1)',
                  }
                }}
              >
                <ArrowUpward />
              </IconButton>
            </motion.div>
          </Box>
        </Box>

        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            © {currentYear} Pavel Pulin. Все права защищены.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            Создано с ❤️ используя React, Material-UI & TypeScript
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;