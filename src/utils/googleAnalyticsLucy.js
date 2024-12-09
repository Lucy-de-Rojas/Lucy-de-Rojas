export function googleAnalyticsLucy() {
        console.clear();
        console.log("running analytics");
        let id = "G-FYW3VGK0DF";

        window.dataLayer = window.dataLayer || [];
        function gtag() {
                dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config',id);

}