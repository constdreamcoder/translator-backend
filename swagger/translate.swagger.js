/**
 * @swagger
 * /translate:
 *   post:
 *     summary: 텍스트를 요청받은 언어로 번역
 *     requestBody:
 *       content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      text:
 *                          type: string
 *                      source:
 *                          type: string
 *                      target:
 *                          type: string
 *     responses:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      translatedText:
 *                          type: string
 *                          example: Hello World!
 */
