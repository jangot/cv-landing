import puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as path from 'path';

import { experienceData } from '../src/data/experience';
import { skillsData } from '../src/data/skills';
import { projectsData } from '../src/data/projects';
import { contactData } from '../src/data/contact';

const LANGUAGES = ['en', 'ru', 'he'] as const;
type Lang = typeof LANGUAGES[number];

function loadTranslations(lang: Lang): Record<string, any> {
  const filePath = path.join(__dirname, `../src/locales/${lang}/translation.json`);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export function t(translations: Record<string, any>, key: string): string {
  return key.split('.').reduce<any>((obj, k) => obj?.[k], translations) ?? key;
}

function loadCSS(): string {
  return fs.readFileSync(path.join(__dirname, 'cv-template/style.css'), 'utf-8');
}

export function buildHTML(lang: Lang, translations: Record<string, any>, css: string): string {
  const isRTL = lang === 'he';
  const dir = isRTL ? 'rtl' : 'ltr';

  const contactsHTML = contactData
    .filter(c => ['email', 'linkedin', 'github', 'phone'].includes(c.type))
    .map(c => `<span>${c.value}</span>`)
    .join('');
  const profileSummaryText = [
    t(translations, 'about.sections.experience.content'),
    t(translations, 'about.sections.collaboration.content'),
    t(translations, 'about.sections.aiTools.content'),
  ].join(' ');

  const experienceHTML = experienceData.map(exp => {
    const achievementsHTML = exp.achievements
      .map((key, i) => `<li>${t(translations, `experience.achievements.${exp.id}.achievement${i + 1}`)}</li>`)
      .join('');
    return `
      <div class="experience-item">
        <div class="experience-header">
          <span class="company">${exp.company}</span>
          <span class="period">${exp.period}</span>
        </div>
        <div class="position">${exp.position}</div>
        <ul class="achievements">${achievementsHTML}</ul>
        <div class="technologies">${exp.technologies.join(', ')}</div>
      </div>`;
  }).join('');

  const skillsHTML = skillsData
    .sort((a, b) => b.level - a.level)
    .slice(0, 30)
    .map(s => `<span class="skill-tag">${s.name}</span>`)
    .join('');

  const projectsHTML = projectsData.map(p => `
    <div class="project-item">
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${t(translations, p.description)}</div>
      <div class="project-tech">${p.technologies.join(', ')}</div>
    </div>`).join('');

  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
  <meta charset="UTF-8"/>
  <style>${css}</style>
</head>
<body>
  <div class="cv-header">
    <div class="cv-name">${t(translations, 'hero.title')}</div>
    <div class="cv-title">${t(translations, 'hero.subtitle')}</div>
    <div class="cv-contacts">${contactsHTML}</div>
    <div class="cv-summary">
      <div class="cv-summary-text">${profileSummaryText}</div>
    </div>
  </div>
  <div class="section">
    <div class="section-title">${t(translations, 'nav.skills')}</div>
    <div class="skills-grid">${skillsHTML}</div>
  </div>
  <div class="section">
    <div class="section-title">${t(translations, 'nav.experience')}</div>
    ${experienceHTML}
  </div>
  <div class="section">
    <div class="section-title">${t(translations, 'nav.projects')}</div>
    ${projectsHTML}
  </div>
</body>
</html>`;
}

async function generateCVs() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const css = loadCSS();
  const outputDir = path.join(__dirname, '../public/cv-files');

  for (const lang of LANGUAGES) {
    const translations = loadTranslations(lang);
    const html = buildHTML(lang, translations, css);

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const outputPath = path.join(outputDir, `Pavel Pulin Fullstack ${lang}.pdf`);
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '15mm', bottom: '15mm', left: '20mm', right: '20mm' },
    });
    await page.close();

    console.log(`✓ Generated: ${outputPath}`);
  }

  await browser.close();
  console.log('CV PDF generation complete.');
}

generateCVs().catch(err => { console.error(err); process.exit(1); });
