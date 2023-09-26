import googletranslate from "@google-cloud/translate";

export const translate = async (req, res) => {
  const { Translate } = googletranslate.v2;
  const translate = new Translate({
    projectId: process.env.PROJECT_ID,
    keyFilename: process.env.GCP_TRANSLATION_KEY_FILENAME,
  });

  console.log(req.body);
  const { text, source, target } = req.body;

  // 같은 언어일 때 오류 처리
  if (source === target) {
    res.send({
      translatedText: text,
    });
    return;
  }

  const result = await translate.translate(text, {
    from: source,
    to: target,
  });

  // console.log(JSON.stringify(result, null, " "));

  const [translation] = result;

  res.send({
    translatedText: translation,
  });
};
