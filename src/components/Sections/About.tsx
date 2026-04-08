import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Divider,
} from '@mui/material';
import {
  School,
  Language,
  EmojiEvents,
  Code,
  Group,
  Psychology,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { getKeySkills } from '../../utils/keySkills';
import { skillCategories } from '../../data/skills';

const About: React.FC = () => {
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

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
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
                mb: 6,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #64b5f6, #4caf50)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('about.title')}
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4 }}>
            {/* Основная информация */}
            <Box sx={{ flex: 2 }}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%)',
                    border: '1px solid rgba(100, 181, 246, 0.2)',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}
                    >
                      {t('about.biography')}
                    </Typography>

                    {/* Section: Experience & Specialization */}
                    <Box sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Code sx={{
                          color: 'primary.main',
                          marginRight: isRTL ? 0 : 1,
                          marginLeft: isRTL ? 1 : 0
                        }} />
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {t('about.sections.experience.title')}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.8,
                          fontSize: '1.1rem',
                          color: 'text.secondary',
                          mb: 2,
                        }}
                      >
                        {t('about.sections.experience.content')}
                      </Typography>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    {/* Section: Team Collaboration */}
                    <Box sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Group sx={{
                          color: 'primary.main',
                          marginRight: isRTL ? 0 : 1,
                          marginLeft: isRTL ? 1 : 0
                        }} />
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {t('about.sections.collaboration.title')}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.8,
                          fontSize: '1.1rem',
                          color: 'text.secondary',
                          mb: 2,
                        }}
                      >
                        {t('about.sections.collaboration.content')}
                      </Typography>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    {/* Section: AI Tools */}
                    <Box sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Psychology sx={{
                          color: 'primary.main',
                          marginRight: isRTL ? 0 : 1,
                          marginLeft: isRTL ? 1 : 0
                        }} />
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {t('about.sections.aiTools.title')}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.8,
                          fontSize: '1.1rem',
                          color: 'text.secondary',
                          mb: 2,
                        }}
                      >
                        {t('about.sections.aiTools.content')}
                      </Typography>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    {/* Key Skills */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        {t('about.keySkills.title')}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', mb: 2 }}
                      >
                        {t('about.keySkills.description')}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                        {getKeySkills(70, 10).map((skill) => {
                          console.log(skill)
                          const category = skillCategories.find(c => c.id === skill.category);
                          return (
                            <Chip
                              key={skill.name}
                              label={`${skill.name} ${skill.level}%`}
                              sx={{
                                backgroundColor: category?.color || 'primary.main',
                                color: 'white',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                '&:hover': {
                                  opacity: 0.9,
                                },
                              }}
                            />
                          );
                        })}
                      </Box>
                    </Box>

                    {/* Roles (existing chips) */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      <Chip
                        label={t('about.techLead')}
                        color="primary"
                        variant="outlined"
                        sx={{ fontWeight: 500 }}
                      />
                      <Chip
                        label={t('about.fullStackDeveloper')}
                        color="secondary"
                        variant="outlined"
                        sx={{ fontWeight: 500 }}
                      />
                      <Chip
                        label={t('about.devOpsEngineer')}
                        color="success"
                        variant="outlined"
                        sx={{ fontWeight: 500 }}
                      />
                      <Chip
                        label={t('about.aiMlIntegration')}
                        color="warning"
                        variant="outlined"
                        sx={{ fontWeight: 500 }}
                      />
                    </Box>

                    {/* Quote (existing) */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        fontStyle: 'italic',
                        borderLeft: '3px solid',
                        borderColor: 'primary.main',
                        pl: 2,
                      }}
                    >
                      "{t('about.quote')}"
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>

            {/* Дополнительная информация */}
            <Box sx={{ flex: 1 }}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    mb: 3,
                    background: 'linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%)',
                    border: '1px solid rgba(100, 181, 246, 0.2)',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <School sx={{
                        color: 'primary.main',
                        marginRight: isRTL ? 0 : 1,
                        marginLeft: isRTL ? 1 : 0
                      }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {t('about.education.title')}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      {t('about.education.college')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t('about.education.specialty')}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    mb: 3,
                    background: 'linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%)',
                    border: '1px solid rgba(100, 181, 246, 0.2)',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <EmojiEvents sx={{
                        color: 'primary.main',
                        marginRight: isRTL ? 0 : 1,
                        marginLeft: isRTL ? 1 : 0
                      }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {t('about.certificates.title')}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        • {t('about.certificates.php')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        • {t('about.certificates.webdesign')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        • {t('about.certificates.architecture')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        • {t('about.certificates.java')}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%)',
                    border: '1px solid rgba(100, 181, 246, 0.2)',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Language sx={{
                        color: 'primary.main',
                        marginRight: isRTL ? 0 : 1,
                        marginLeft: isRTL ? 1 : 0
                      }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {t('about.languages.title')}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        🇷🇺 {t('about.languages.russian')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        🇺🇸 {t('about.languages.english')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        🇮🇱 {t('about.languages.hebrew')}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
