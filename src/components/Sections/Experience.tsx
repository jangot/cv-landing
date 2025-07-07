import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  useTheme,
} from '@mui/material';
import {
  Work,
  Business,
  CalendarToday,
  OpenInNew,
  Timeline,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const handleCompanyClick = (website?: string) => {
    if (website) {
      window.open(website, '_blank');
    }
  };

  return (
    <Box
      id="experience"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
        minHeight: '100vh',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(76, 175, 80, 0.1) 0%, transparent 50%)',
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
              {t('experience.title')}
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
              {t('experience.years')} • {experienceData.length} компаний
            </Typography>
          </motion.div>

          <Box sx={{ position: 'relative' }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 20, md: 50 },
                top: 0,
                bottom: 0,
                width: 2,
                backgroundColor: 'primary.main',
                opacity: 0.3,
                zIndex: 0,
              }}
            />

            {experienceData.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                style={{ position: 'relative', zIndex: 1 }}
              >
                <Card
                  sx={{
                    mb: 4,
                    ml: { xs: 4, md: 8 },
                    background: 'linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%)',
                    border: '1px solid rgba(100, 181, 246, 0.2)',
                    position: 'relative',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {/* Timeline dot */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: -32, md: -58 },
                      top: 24,
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      backgroundColor: index < 3 ? 'primary.main' : 'text.secondary',
                      border: '3px solid',
                      borderColor: 'background.paper',
                      zIndex: 2,
                    }}
                  />

                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Business sx={{ color: 'primary.main', mr: 1, fontSize: 20 }} />
                          <Typography
                            variant="h5"
                            component="h3"
                            sx={{
                              fontWeight: 600,
                              color: 'text.primary',
                              cursor: experience.website ? 'pointer' : 'default',
                              '&:hover': experience.website ? {
                                color: 'primary.main',
                              } : {},
                            }}
                            onClick={() => handleCompanyClick(experience.website)}
                          >
                            {experience.company}
                          </Typography>
                          {experience.website && (
                            <OpenInNew sx={{ ml: 1, fontSize: 16, color: 'text.secondary' }} />
                          )}
                        </Box>

                        <Typography
                          variant="h6"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 500,
                            mb: 1,
                          }}
                        >
                          {experience.position}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            mb: 2,
                            fontStyle: 'italic',
                          }}
                        >
                          {experience.description}
                        </Typography>
                      </Box>

                      <Box sx={{ textAlign: 'right', ml: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <CalendarToday sx={{ color: 'text.secondary', mr: 0.5, fontSize: 16 }} />
                          <Typography variant="body2" color="text.secondary">
                            {experience.period}
                          </Typography>
                        </Box>
                        <Chip
                          label={experience.duration}
                          size="small"
                          color="secondary"
                          variant="outlined"
                          sx={{ fontWeight: 500 }}
                        />
                      </Box>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="body1" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                        Ключевые достижения:
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, m: 0 }}>
                        {experience.achievements.map((achievement, idx) => (
                          <Typography
                            key={idx}
                            component="li"
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              mb: 0.5,
                              lineHeight: 1.6,
                            }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
                    </Box>

                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                        Технологии:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {experience.technologies.map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{
                              fontSize: '0.75rem',
                              height: 24,
                              '& .MuiChip-label': {
                                px: 1,
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>

          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Карьера началась в 2007 году как HTML-кодер
              </Typography>
              <Button
                variant="outlined"
                startIcon={<Timeline />}
                onClick={() => window.open('https://www.linkedin.com/in/pavel-pulin-156528b5/', '_blank')}
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    backgroundColor: 'rgba(100, 181, 246, 0.1)',
                  }
                }}
              >
                Посмотреть полный профиль на LinkedIn
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;