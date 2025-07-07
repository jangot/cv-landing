import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Chip,
  Button,
  Grid,
  useTheme,
} from '@mui/material';
import {
  Launch,
  GitHub,
  Code,
  TrendingUp,
  Architecture,
  Psychology,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projects';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getProjectIcon = (title: string) => {
    if (title.includes('Agricultural')) return <Architecture />;
    if (title.includes('AI')) return <Psychology />;
    if (title.includes('Payment')) return <TrendingUp />;
    if (title.includes('GraphQL')) return <Code />;
    if (title.includes('Parsing')) return <Code />;
    if (title.includes('Banking')) return <TrendingUp />;
    if (title.includes('Legacy')) return <Architecture />;
    if (title.includes('Translation')) return <Code />;
    return <Code />;
  };

  const handleProjectClick = (link?: string) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <Box
      id="projects"
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
          background: 'radial-gradient(circle at 20% 80%, rgba(76, 175, 80, 0.1) 0%, transparent 50%)',
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
              {t('projects.title')}
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
              {projectsData.length} {t('projects.keyProjects')} • {t('projects.variousTechnologies')}
            </Typography>
          </motion.div>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 3 }}>
            {projectsData.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%)',
                    border: '1px solid rgba(100, 181, 246, 0.2)',
                    position: 'relative',
                    overflow: 'visible',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease',
                      '& .project-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {/* Project Icon */}
                  <Box
                    className="project-icon"
                    sx={{
                      position: 'absolute',
                      top: -20,
                      right: 20,
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #64b5f6, #4caf50)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: 24,
                      transition: 'all 0.3s ease',
                      zIndex: 1,
                    }}
                  >
                    {getProjectIcon(project.title)}
                  </Box>

                  <CardContent sx={{ p: 4, pt: 6 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: 'text.primary',
                        minHeight: 60,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        lineHeight: 1.6,
                        minHeight: 80,
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                        {t('projects.technologies')}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{
                              fontSize: '0.7rem',
                              height: 20,
                              '& .MuiChip-label': {
                                px: 1,
                              },
                            }}
                          />
                        ))}
                        {project.technologies.length > 4 && (
                          <Chip
                            label={`+${project.technologies.length - 4}`}
                            size="small"
                            variant="outlined"
                            sx={{
                              fontSize: '0.7rem',
                              height: 20,
                              '& .MuiChip-label': {
                                px: 1,
                              },
                            }}
                          />
                        )}
                      </Box>
                    </Box>
                  </CardContent>

                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
                      {project.link && (
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<Launch />}
                          onClick={() => handleProjectClick(project.link)}
                          sx={{
                            flex: 1,
                            fontSize: '0.8rem',
                            fontWeight: 600,
                          }}
                        >
                          {t('projects.viewProject')}
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<GitHub />}
                          onClick={() => handleProjectClick(project.github)}
                          sx={{
                            flex: 1,
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            '&:hover': {
                              borderColor: 'primary.dark',
                              backgroundColor: 'rgba(100, 181, 246, 0.1)',
                            }
                          }}
                        >
                          {t('projects.viewCode')}
                        </Button>
                      )}
                    </Box>
                  </CardActions>
                </Card>
              </motion.div>
            ))}
          </Box>

          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {t('projects.projectDescription')}
              </Typography>
              <Button
                variant="outlined"
                startIcon={<Launch />}
                onClick={() => window.open('https://www.linkedin.com/in/pavel-pulin-156528b5/', '_blank')}
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: 'primary.dark',
                    backgroundColor: 'rgba(100, 181, 246, 0.1)',
                  }
                }}
              >
                {t('projects.moreProjectsLinkedIn')}
              </Button>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;