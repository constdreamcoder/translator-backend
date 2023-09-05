/**
 * @swagger
 * /audio/play:
 *   post:
 *     summary: 텍스트를 요청받은 언어로 번역
 *     requestBody:
 *       content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      input:
 *                          type: object
 *                          properties:
 *                              text:
 *                                  type: string
 *                      language:
 *                          type: string
 *     responses:
 *       200:
 *         description: 성공
 *         headers:
 *           Centent-disposition:
 *              schema:
 *                  type: string
 *                  example: attachment; filename=audio.mp3
 *         content:
 *           audio/mpeg:
 *              schema:
 *                  type: string
 *                  format: binary
 */
