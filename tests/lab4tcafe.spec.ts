   import { test, expect } from '@playwright/test';

test.skip('testname', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');
    await page.getByTestId('name-input').click();
    const name = "Maria Isabel"
    await page.getByTestId('name-input').fill(name);
  });

test.skip('test', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');
    await page.getByTestId('name-input').click();
    const name = "Maria Isabel"
    await page.getByTestId('name-input').fill(name);
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByTestId('populate-button').click();
  });

 
test.skip('testopciones', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');
  
    const opciones = [
      "remote-testing",
      "reusing-js-code",
      "background-parallel-testing",
      "continuous-integration-embedding",
      "traffic-markup-analysis"
    ];
  
    for (let i = 0; i < opciones.length; i++) {
      const opcion = opciones[i];
      const element = page.locator(`//*[@id="${opcion}"]`);
      await element.click();
    }
  });
   

test.skip('test opciones sistema operativo', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');
  
    const opciones = [
      "windows",
      "macos",
      "linux"
      
    ];
  
    for (let i = 0; i < opciones.length; i++) {
      const opcion = opciones[i];
      const element = page.locator(`//*[@id="${opcion}"]`);
      await element.click();
    }
  });
  
  
test.skip('test interface de usuario', async ({ page }) => {
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

  
test.skip('testCafe', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');

    const testCafe = page.locator("#tried-test-cafe")
    await testCafe.click();
      
  });

