const { defineFeature, loadFeature } = require("jest-cucumber");
const axios = require("axios");
const puppeteer = require("puppeteer");

const feature = loadFeature("features/Cadastro_manutenção.feature");
let browser;
let page;

defineFeature(feature, (test) => {
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.setViewport({
      width: 1920,
      height: 973,
      deviceScaleFactor: 1,
    });
  });

  beforeEach(async () => {
    await axios.get("http://localhost:1337/resetTest");
  });

  afterAll(async () => {
    await axios.get("http://localhost:1337/resetTest");
    await browser.close();
  });

  test("Adicionar playlist sem categoria à uma categoria", async ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^Estou logado com o usuário "(.*)"$/, async (user) => {
      await page.goto("http://localhost:3000/history", {
        waitUntil: "networkidle0",
      });
    });

    and("eu estou na página de histórico de pedidos", async () => {
      const splitUrl = page.url().split("/");
      const pathName = splitUrl[splitUrl.length - 1];
      expect(pathName).toEqual("history");
    });

    and("vou avaliar um pedido", async () => {});

    when("eu clico em avaliar um pedido", async () => {
      const element = await page.$('[name="ratingButton"]');
      await element.click();
    });

    and(/^avalio o pedido com (\d+) estrelas$/, async (stars) => {
      const element = await page.$(
        '[aria-label="add rating by typing an integer from 0 to 5 or pressing arrow keys"]'
      );
      await element.click();
      const value = await page.evaluate(
        (el) => el.textContent[el.textContent.length - 1],
        element
      );
      expect(value).toEqual(stars);
    });

    and("deixo a caixa de texto de feedback em branco", async () => {
      await page.screenshot({
        path: "screenshots/rating/tela_sem_texto_de_feedback.png",
      });
    });

    and(/^clico em "(.*)"$/, async (buttonName) => {
      const element = await page.$('[name="sendRateButton"]');
      await element.click();
    });

    then("Eu vejo uma mensagem de sucesso na tela", async () => {
      await page.screenshot({
        path: "screenshots/rating/without_feedback_rating_test.png",
      });

      const element = await page.$('[name="ratingButton"]');
      const value = await page.evaluate((el) => el.textContent, element);
      expect(value).toEqual("Revisar avaliação");
    });
  });



});