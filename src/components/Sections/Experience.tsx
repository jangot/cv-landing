import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from '@mui/material';
import {
  Business,
  CalendarToday,
  OpenInNew,
  Timeline,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { experienceData } from '../../data/experience';
import { useLanguage } from '../../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

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
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
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
          {t('experience.years')} • {experienceData.length} {t('experience.companies')}
        </Typography>

        <Box sx={{ position: 'relative' }}>
          {experienceData.map((experience, index) => (
            <Card
              key={experience.id}
              sx={{
                mb: 4,
                ml: { xs: 4, md: 8 },
                backgroundColor: 'background.default',
                border: '1px solid',
                borderColor: 'divider',
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Business sx={{
                        color: 'primary.main',
                        marginRight: isRTL ? 0 : 1,
                        marginLeft: isRTL ? 1 : 0,
                        fontSize: 20
                      }} />
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
                        <OpenInNew sx={{
                          marginLeft: isRTL ? 0 : 1,
                          marginRight: isRTL ? 1 : 0,
                          fontSize: 16,
                          color: 'text.secondary'
                        }} />
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
                      <CalendarToday sx={{
                        color: 'text.secondary',
                        marginRight: isRTL ? 0 : 0.5,
                        marginLeft: isRTL ? 0.5 : 0,
                        fontSize: 16
                      }} />
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
                    {t('experience.keyAchievements')}
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
                        {t(`experience.achievements.${experience.id}.achievement${idx + 1}`)}
                      </Typography>
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                    {t('experience.technologies')}
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
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {t('experience.careerStart')}
          </Typography>
          <Button
            variant="outlined"
            startIcon={<Timeline />}
            onClick={() => window.open('https://www.linkedin.com/in/pavel-pulin-156528b5/', '_blank')}
            sx={{
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
            {t('experience.viewLinkedIn')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
