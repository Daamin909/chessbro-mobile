import { useCallback, useEffect, useRef, useState } from "react";
import { WebView } from "react-native-webview";
import { View, StyleSheet } from "react-native";
const GameReview = () => {
  const webviewRef = useRef(null);

  const htmlContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script type="text/javascript">
      (async function () {
        const STOCKFISH_URL = "https://cdn.jsdelivr.net/npm/stockfish.js@10.0.2/stockfish.js";

        const response = await fetch(STOCKFISH_URL);
        const engineCode = await response.text();
        const blob = new Blob([engineCode], { type: "application/javascript" });
        const blobURL = URL.createObjectURL(blob);
        const engine = new Worker(blobURL);

        engine.onmessage = function (event) {
          window.ReactNativeWebView?.postMessage(event.data);
        };

        window.addEventListener("message", function (e) {
          engine.postMessage(e.data);
          });
          engine.postMessage("uci")
          engine.postMessage("isready")
          engine.postMessage("position startpos")
          engine.postMessage("go depth 15")
      })();
    </script>
  </head>
  <body></body>
</html>

  `;

  const onMessage = (event) => {
    const msg = event.nativeEvent.data;
    console.log("Stockfish:", msg);
  };

  const sendCommand = (cmd) => {
    webviewRef.current?.postMessage(cmd);
  };
  return (
    <View style={styles.hidden}>
      <WebView
        ref={webviewRef}
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        onMessage={onMessage}
        javaScriptEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hidden: {
    width: 0,
    height: 0,
    opacity: 0,
  },
});

export default GameReview;
