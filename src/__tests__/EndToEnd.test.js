import puppeteer from 'puppeteer';

// Feature 2
describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.waitForSelector('.Event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const extra = await page.$('.Event .extra');
    expect(extra).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.Event .details-btn');

    const extra = await page.$('.Event .extra');
    expect(extra).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.Event .details-btn');

    const extra = await page.$('.Event .extra');
    expect(extra).toBeNull();
  });
});

// Feature 1
describe('Filter events by city', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  test('By default show upcoming events based on the user’s location', async () => {
    const events = await page.$('.EventList');
    expect(events).toBeDefined();
  });

  test('User should see a list of suggestions when they search for a city', async () => {
    const extra = await page.$('.suggestions');
    await page.type('.city', 'Munich');

    expect(extra).toBeDefined();

  });

  test('User can select a city from the suggested list', async () => {
    await page.$('.suggestions');
    await page.type('.city', 'Munich');

    await page.click('.suggestions li');
    const events = await page.$('.EventList');
    expect(events).toBeDefined();

  });
});
