  import { test, expect } from '@playwright/test';

test('testname', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');
    await page.getByTestId('name-input').click();
    const name = "Maria Isabel"
    await page.getByTestId('name-input').fill(name);
  });



test('testseleccionar opciones', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');
    
    //const locators: string[] = ['#id1', '.class1', '[name="name1"]', '#id2', '.class2', '[name="name2"]'];
    //const selected = locators.filter(l => l.includes('id') || l.includes('name'));
    //expect(selected).toEqual(['#id1', '[name="name1"]', '#id2', '[name="name2"]']);
    
    const Support = page.locator('//*[@id="remote-testing"]');
    await Support.click();

    const Reusing = page.locator('//*[@id="reusing-js-code"]');
    await Reusing.click();

    const Running = page.locator('//*[@id="background-parallel-testing"]');
    await Running.click();

    const Easy = page.locator('//*[@id="continuous-integration-embedding"]');
    await Easy.click();

    const Advanced = page.locator('//*[@id="traffic-markup-analysis"]');
    await Advanced.click();
     

  });  
 

  test('test Seleccionar el sistema operativo', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');

    const windows = page.locator("//*[@id='windows']")
    await windows.click();
    
    const MacOs = page.locator("//*[@id='macos']")
    await MacOs.click();

    const Linux = page.locator("//*[@id='linux']")
    await Linux.click();
  
  });


  
  test.skip('test user interface', async ({ page }) => {
    await page.goto("https://devexpress.github.io/testcafe/example/");

    //const CommandLine = page.locator("//*[@id='preferred-interface']/option[text()='Command Line']")
    //await CommandLine.click();

    //const JavaScript = page.locator("//*[@id='preferred-interface']/option[text()='JavaScript API']")
    //await JavaScript.click();

    //const Both = page.locator("///*[@id='preferred-interface']/option[text()='Both']']")
    //await Both.click();

    //const select = page.locator("//*[@id='preferred-interface']/option[text()='Command Line']");

    const select = page.locator("//*[@id='preferred-interface']/option[text()='JavaScript API']");

    //const select = page.locator("//*[@id='preferred-interface']/option[text()='Both']");

    await select.click();
  });  

  test('testCafe', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');

    const testCafe = page.locator("#tried-test-cafe")
    await testCafe.click();
      
  });
