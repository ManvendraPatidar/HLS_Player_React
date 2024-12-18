// check HSL file returns true if video and false on audio

export async function checkHLSFileTypeByCodec(url) {
  try {
    const response = await fetch(url);
    const manifest = await response.text();

    // Look for EXT-X-STREAM-INF and check for codecs
    const videoRegex = /EXT-X-STREAM-INF.*CODECS="([^"]*avc1[^"]*)"/i;
    const audioRegex = /EXT-X-STREAM-INF.*CODECS="([^"]*mp4a[^"]*)"/i;

    const videoMatch = manifest.match(videoRegex);
    const audioMatch = manifest.match(audioRegex);

    if (videoMatch) {
      return true;
    } else if (audioMatch) {
      return false;
    } else {
      console.log("unknown in hsl ");

      return true;
    }
  } catch (error) {
    console.error("Error fetching or parsing the HLS file:", error);
    return "error";
  }
}
