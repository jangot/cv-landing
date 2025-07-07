const puppeteer = require('puppeteer');
const path = require('path');

async function generateOGImage() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Устанавливаем размер viewport для OG изображения
    await page.setViewport({
        width: 1200,
        height: 630,
        deviceScaleFactor: 1,
    });

    // Загружаем HTML файл
    const htmlPath = path.join(__dirname, '../public/og-image.html');
    await page.goto(`file://${htmlPath}`);

    // Ждем загрузки всех ресурсов
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Делаем скриншот
    const outputPath = path.join(__dirname, '../public/og-image.png');
    await page.screenshot({
        path: outputPath,
        type: 'png',
        fullPage: false
    });

    console.log(`OG изображение создано: ${outputPath}`);

    await browser.close();
}

generateOGImage().catch(console.error);