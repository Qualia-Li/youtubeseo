import Script from "next/script";
import React from "react";

class GoogleAnalytics extends React.Component {
  render() {
    return (
      <>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J4XLM9GESD"
          strategy="afterInteractive"
          onLoad={() => {
            console.log("Google Analytics script loaded");
          }}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          onLoad={() => {
            console.log("Google Analytics script loaded");
          }}
        >
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

                    gtag('config', '"G-J4XLM9GESD');
                `}
        </Script>
      </>
    );
  }
}

export default GoogleAnalytics;
