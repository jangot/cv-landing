import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
} from '@mui/material';
import {
  Telegram,
  Phone,
  Email,
  LinkedIn,
  LocationOn,
  Schedule,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { contactData } from '../../data/contact';
import type { Contact as ContactType } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const handleContactClick = (contact: ContactType) => {
    if (contact.value) {
      window.open(contact.value, '_blank');
    }
  };

  const getContactIcon = (type: string) => {
    switch (type) {
      case 'telegram':
        return <Telegram />;
      case 'phone':
        return <Phone />;
      case 'email':
        return <Email />;
      case 'linkedin':
        return <LinkedIn />;
      default:
        return <Telegram />;
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(100, 181, 246, 0.1) 0%, transparent 50%)',
        }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              component="h2"
              align="center"
              sx={{
                mb: 2,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #64b5f6, #4caf50)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('contact.title')}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{
                mb: 6,
                color: 'text.secondary',
                fontWeight: 500,
              }}
            >
              {t('contact.getInTouch')} • {t('contact.readyForProjects')}
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4 }}>
            {/* Контактная информация */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%)',
                    border: '1px solid rgba(100, 181, 246, 0.2)',
                    height: '100%',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        mb: 4,
                        fontWeight: 600,
                        color: 'text.primary',
                        textAlign: 'center',
                      }}
                    >
                      {t('contact.contactMe')}
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {contactData.map((contact) => (
                        <motion.div
                          key={contact.type}
                          variants={itemVariants}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant="outlined"
                            fullWidth
                            startIcon={getContactIcon(contact.type)}
                            onClick={() => handleContactClick(contact)}
                            sx={{
                              py: 2,
                              px: 3,
                              justifyContent: 'flex-start',
                              borderColor: contact.isPreferred ? 'primary.main' : 'rgba(255, 255, 255, 0.2)',
                              color: contact.isPreferred ? 'primary.main' : 'text.primary',
                              backgroundColor: contact.isPreferred ? 'rgba(100, 181, 246, 0.1)' : 'transparent',
                              '& .MuiButton-startIcon': {
                                marginRight: isRTL ? 0 : undefined,
                                marginLeft: isRTL ? 1 : undefined,
                              },
                              '&:hover': {
                                borderColor: 'primary.main',
                                backgroundColor: 'rgba(100, 181, 246, 0.15)',
                                transform: 'translateY(-2px)',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          >
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
                              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                {contact.label.startsWith('contact.') ? t(contact.label) : contact.label}
                              </Typography>
                              {contact.isPreferred && (
                                <Chip
                                  label={t('contact.preferred')}
                                  size="small"
                                  color="primary"
                                  sx={{ mt: 0.5, fontSize: '0.7rem' }}
                                />
                              )}
                            </Box>
                          </Button>
                        </motion.div>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>

            {/* Дополнительная информация */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%)',
                    border: '1px solid rgba(100, 181, 246, 0.2)',
                    height: '100%',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        mb: 4,
                        fontWeight: 600,
                        color: 'text.primary',
                        textAlign: 'center',
                      }}
                    >
                      {t('contact.information')}
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <motion.div variants={itemVariants}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <LocationOn sx={{ color: 'primary.main', fontSize: 28 }} />
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                              {t('contact.location')}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {t('hero.location')}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {t('contact.citizenship')}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Schedule sx={{ color: 'primary.main', fontSize: 28 }} />
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                              {t('contact.availability')}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {t('contact.fullTime')}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {t('contact.remoteWork')}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Telegram sx={{ color: 'primary.main', fontSize: 28 }} />
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                              {t('contact.preferredContact')}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {t('contact.telegramFastest')}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {t('contact.respondHours')}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    </Box>

                    <Box sx={{ mt: 4, p: 3, backgroundColor: 'rgba(100, 181, 246, 0.1)', borderRadius: 2 }}>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                        {t('contact.readyForCooperation')}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        <Chip label={t('contact.techLead')} color="primary" variant="outlined" />
                        <Chip label={t('contact.fullStack')} color="secondary" variant="outlined" />
                        <Chip label={t('contact.architecture')} color="success" variant="outlined" />
                        <Chip label={t('contact.devOps')} color="warning" variant="outlined" />
                        <Chip label={t('contact.aiMl')} color="error" variant="outlined" />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          </Box>

          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {t('contact.openToOpportunities')}
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<Telegram />}
                onClick={() => window.open('https://t.me/jangot', '_blank')}
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #64b5f6, #4caf50)',
                  '& .MuiButton-startIcon': {
                    marginRight: isRTL ? 0 : undefined,
                    marginLeft: isRTL ? 1 : undefined,
                  },
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1976d2, #388e3c)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {t('contact.writeTelegram')}
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
