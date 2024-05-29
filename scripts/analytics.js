import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";

const analytics = Analytics({
  plugins: [
    googleAnalytics({
      measurementIds: ["G-VTMTC799BH"],
    }),
  ],
});

/* Track a page view */
analytics.page();
