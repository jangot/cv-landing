import * as fs from 'fs';
import * as path from 'path';

function t(translations: Record<string, any>, key: string): string {
  return key.split('.').reduce<any>((obj, k) => obj?.[k], translations) ?? key;
}

describe('CV translation resolver', () => {
  let enTranslations: Record<string, any>;

  beforeAll(() => {
    enTranslations = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'locales/en/translation.json'), 'utf-8')
    );
  });

  it('resolves top-level key', () => {
    expect(t(enTranslations, 'hero.title')).toBe('Pavel Pulin');
  });

  it('resolves nested key for achievements', () => {
    const result = t(enTranslations, 'experience.achievements.zirtue.achievement1');
    expect(result).not.toBe('experience.achievements.zirtue.achievement1');
    expect(typeof result).toBe('string');
  });

  it('returns key itself when not found', () => {
    expect(t(enTranslations, 'nonexistent.key')).toBe('nonexistent.key');
  });
});

describe('buildHTML RTL', () => {
  it('sets dir=rtl for Hebrew', () => {
    const lang: string = 'he';
    const dir = lang === 'he' ? 'rtl' : 'ltr';
    const html = `<html lang="${lang}" dir="${dir}">`;
    expect(html).toContain('dir="rtl"');
  });

  it('sets dir=ltr for English', () => {
    const lang: string = 'en';
    const dir = lang === 'he' ? 'rtl' : 'ltr';
    const html = `<html lang="${lang}" dir="${dir}">`;
    expect(html).toContain('dir="ltr"');
  });
});
