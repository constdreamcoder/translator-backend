// Imports the Google Cloud client library
import textToSpeech from "@google-cloud/text-to-speech";
import stream from "stream";

export const getAudioFile = async (req, res) => {
  // Creates a client
  const client = new textToSpeech.TextToSpeechClient({
    projectId: process.env.PROJECT_ID,
    keyFilename: process.env.GCP_TEXT_TO_SPEECH_KEY_FILENAME,
  });

  console.log("req.body");
  console.log(req.body);

  const { input, language } = req.body;
  const voice = getAudioConfiguration(language);

  const request = {
    input,
    voice,
    audioConfig: {
      // LINEAR16: 더 고품질
      // MP3: 일반적 품질
      audioEncoding: "MP3",
    },
  };

  console.log(request);

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);

  const readStream = new stream.PassThrough();

  readStream.end(response.audioContent);
  res.set("Content-disposition", "attachment; filename=" + "audioFile.mp3");
  res.set("Content-Type", "audio/mpeg");

  readStream.pipe(res);
};

const getAudioConfiguration = (language) => {
  const voice = {
    languageCode: "ko-KR",
    name: "ko-KR-Standard-A",
  };

  if (language === "ko") {
    voice.languageCode = "ko-KR";
    voice.name = "ko-KR-Standard-A";
  } else if (language === "en") {
    voice.languageCode = "en-US";
    voice.name = "en-US-Neural2-H";
  } else if (language === "ja") {
    voice.languageCode = "ja-JP";
    voice.name = "ja-JP-Neural2-B";
  } else if (language === "zh") {
    voice.languageCode = "cmn-CN";
    voice.name = "cmn-CN-Wavenet-A";
  }

  return voice;
};
