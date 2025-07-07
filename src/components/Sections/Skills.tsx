import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Tabs,
  Tab,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { skillsData, skillCategories } from '../../data/skills';

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === selectedCategory);

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const getCategoryColor = (category: string) => {
    const cat = skillCategories.find(c => c.id === category);
    return cat?.color || theme.palette.primary.main;
  };

  return (
    <Box
      id="skills"
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
          background: 'radial-gradient(circle at 50% 50%, rgba(100, 181, 246, 0.1) 0%, transparent 70%)',
        }
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
          {t('skills.title')}
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
          {skillsData.length} {t('skills.technologies')} • {skillCategories.length} {t('skills.categories')}
        </Typography>

        <Card
          sx={{
            background: 'linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%)',
            border: '1px solid rgba(100, 181, 246, 0.2)',
            mb: 4,
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Tabs
              value={selectedCategory}
              onChange={handleCategoryChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                '& .MuiTab-root': {
                  minWidth: 120,
                  fontWeight: 500,
                },
                '& .Mui-selected': {
                  color: 'primary.main',
                },
              }}
            >
              <Tab
                label={t('skills.all')}
                value="all"
                sx={{
                  '&.Mui-selected': {
                    color: 'primary.main',
                  },
                }}
              />
              {skillCategories.map((category) => (
                <Tab
                  key={category.id}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </Box>
                  }
                  value={category.id}
                  sx={{
                    '&.Mui-selected': {
                      color: category.color,
                    },
                  }}
                />
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <Card
          sx={{
            background: 'linear-gradient(135deg, rgba(100, 181, 246, 0.1) 0%, rgba(76, 175, 80, 0.1) 100%)',
            border: '1px solid rgba(100, 181, 246, 0.2)',
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
              {filteredSkills.map((skill) => (
                <Box
                  key={skill.name}
                  sx={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {skill.name}
                    </Typography>
                    <Chip
                      label={`${skill.level}%`}
                      size="small"
                      sx={{
                        backgroundColor: getCategoryColor(skill.category),
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                      }}
                    />
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 4,
                        background: `linear-gradient(90deg, ${getCategoryColor(skill.category)}, ${getCategoryColor(skill.category)}80)`,
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
            {t('skills.keyCompetencies')}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
            <Chip
              label={t('skills.techLeadership')}
              color="primary"
              variant="outlined"
              sx={{ fontWeight: 600, fontSize: '1rem', py: 1 }}
            />
            <Chip
              label={t('skills.fullStackDevelopment')}
              color="secondary"
              variant="outlined"
              sx={{ fontWeight: 600, fontSize: '1rem', py: 1 }}
            />
            <Chip
              label={t('skills.systemArchitecture')}
              color="success"
              variant="outlined"
              sx={{ fontWeight: 600, fontSize: '1rem', py: 1 }}
            />
            <Chip
              label={t('skills.devOpsCICD')}
              color="warning"
              variant="outlined"
              sx={{ fontWeight: 600, fontSize: '1rem', py: 1 }}
            />
            <Chip
              label={t('skills.aiMlIntegration')}
              color="error"
              variant="outlined"
              sx={{ fontWeight: 600, fontSize: '1rem', py: 1 }}
            />
            <Chip
              label={t('skills.paymentSystems')}
              color="info"
              variant="outlined"
              sx={{ fontWeight: 600, fontSize: '1rem', py: 1 }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;