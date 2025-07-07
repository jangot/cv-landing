import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  Chip,
  useTheme,
} from '@mui/material';
import {
  LocationOn,
  Download,
  Visibility,
  Telegram,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { isRTL, currentLanguage } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContact = () => {
    window.open('https://t.me/jangot', '_blank');
  };

    const handleDownloadCV = () => {
    try {
      // Определяем файл резюме в зависимости от текущего языка
      let resumeFile = '';
      let fileName = '';

      switch (currentLanguage) {
        case 'ru':
          resumeFile = '/cv-files/Pavel Pulin Fullstack ru.pdf';
          fileName = 'Pavel Pulin Fullstack.pdf';
          break;
        case 'en':
          resumeFile = '/cv-files/Pavel Pulin Fullstack en.pdf';
          fileName = 'Pavel Pulin Fullstack.pdf';
          break;
        default:
          resumeFile = '/cv-files/Pavel Pulin Fullstack en.pdf';
          fileName = 'Pavel Pulin Fullstack.pdf';
      }

      // Создаем ссылку для скачивания
      const link = document.createElement('a');
      link.href = resumeFile;
      link.download = fileName;
      link.target = '_blank';

      // Добавляем ссылку в DOM, кликаем по ней и удаляем
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Ошибка при скачивании резюме:', error);
      // Можно добавить уведомление пользователю об ошибке
      alert(t('hero.downloadError') || 'Ошибка при скачивании резюме');
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(100, 181, 246, 0.1) 0%, transparent 50%)',
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: 'linear-gradient(45deg, #64b5f6, #4caf50)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                {t('hero.title')}
              </Typography>

              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 500,
                }}
              >
                {t('hero.subtitle')}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.6,
                  maxWidth: 500,
                }}
              >
                {t('hero.description')}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <LocationOn sx={{
                  color: 'primary.main',
                  marginRight: isRTL ? 0 : 1,
                  marginLeft: isRTL ? 1 : 0
                }} />
                <Typography variant="body1" color="text.secondary">
                  {t('hero.location')}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
                <Chip
                  label={t('hero.techLead')}
                  color="primary"
                  variant="outlined"
                  sx={{ fontWeight: 500 }}
                />
                <Chip
                  label={t('hero.fullStack')}
                  color="secondary"
                  variant="outlined"
                  sx={{ fontWeight: 500 }}
                />
                <Chip
                  label={t('hero.experienceYears')}
                  color="success"
                  variant="outlined"
                  sx={{ fontWeight: 500 }}
                />
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Telegram />}
                  onClick={handleContact}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    '& .MuiButton-startIcon': {
                      marginRight: isRTL ? 0 : undefined,
                      marginLeft: isRTL ? 1 : undefined,
                    },
                  }}
                >
                  {t('hero.contactMe')}
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Download />}
                  onClick={handleDownloadCV}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '& .MuiButton-startIcon': {
                      marginRight: isRTL ? 0 : undefined,
                      marginLeft: isRTL ? 1 : undefined,
                    },
                    '&:hover': {
                      borderColor: 'primary.dark',
                      backgroundColor: 'rgba(100, 181, 246, 0.1)',
                    }
                  }}
                >
                  {t('hero.downloadCV')}
                </Button>

                <Button
                  variant="text"
                  size="large"
                  startIcon={<Visibility />}
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'text.secondary',
                    '& .MuiButton-startIcon': {
                      marginRight: isRTL ? 0 : undefined,
                      marginLeft: isRTL ? 1 : undefined,
                    },
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(100, 181, 246, 0.1)',
                    }
                  }}
                >
                  {t('hero.viewProjects')}
                </Button>
              </Box>
            </motion.div>
          </Box>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Avatar
                // src="/avatar.jpg"
                // alt="Profile Avatar"
                sx={{
                  width: { xs: 250, md: 350 },
                  height: { xs: 250, md: 350 },
                  border: '4px solid',
                  borderColor: 'primary.main',
                  background: 'linear-gradient(45deg, #64b5f6, #4caf50)',
                  boxShadow: '0 8px 32px rgba(100, 181, 246, 0.3)',
                  fontSize: { xs: '4rem', md: '6rem' },
                  fontWeight: 700,
                }}
              >
                PP
              </Avatar>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
