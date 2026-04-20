import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../utils/i18n';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../../utils/theme';
import Experience from './Experience';

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={darkTheme}>
      <I18nextProvider i18n={i18n}>
        <LanguageProvider>
          {component}
        </LanguageProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
};

beforeEach(async () => {
  await act(async () => {
    await i18n.changeLanguage('en');
  });
});

describe('Experience section', () => {
  it('renders position in English', () => {
    renderWithProviders(<Experience />);
    expect(screen.getByText('Tech Lead / Full-Stack Developer')).toBeInTheDocument();
  });

  it('renders position in Hebrew', async () => {
    await act(async () => {
      await i18n.changeLanguage('he');
    });
    renderWithProviders(<Experience />);
    const hebrewPositions = screen.getAllByText(/מפתח Full-Stack/);
    expect(hebrewPositions.length).toBeGreaterThan(0);
  });

  it('renders "Projects:" label via i18n in English', () => {
    renderWithProviders(<Experience />);
    // "Projects:" is a text node inside a <p> that also contains <a> children,
    // so we match by partial text content
    const projectsLabels = screen.getAllByText(/Projects:/, { exact: false });
    expect(projectsLabels.length).toBeGreaterThan(0);
  });

  it('does not crash for entries without projectLinks', () => {
    renderWithProviders(<Experience />);
    // infobip has no projectLinks — verify its description renders without "Projects:" crashing
    expect(screen.getByText('Web infrastructure platform development')).toBeInTheDocument();
  });

  it('renders realweb-early entry correctly (hyphen in ID)', () => {
    renderWithProviders(<Experience />);
    expect(screen.getByText('HTML coding and template integration')).toBeInTheDocument();
  });

  it('renders realweb-early description in Russian', async () => {
    await act(async () => {
      await i18n.changeLanguage('ru');
    });
    renderWithProviders(<Experience />);
    expect(screen.getByText('Верстка HTML и интеграция шаблонов')).toBeInTheDocument();
  });
});
