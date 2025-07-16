// News and Publications Data
// To add new items, just add them to the top of this array
// The website will automatically display them

const newsData = [
    {
        date: "July 2025",
        title: "The promise of quantifying individual risk for brain disorders through normative modeling, a narrative review",
        description: "A wonderful review on the state and promise of normative modelling just rolled out of the pen of Charlotte Fraza!",
        link: "https://www.sciencedirect.com/science?_ob=GatewayURL&_origin=AUTHORALERT&_method=citationSearch&_piikey=S0149763425002854&_version=1&md5=1bb839817ca66ee90d85b8055e02e0c2",
        type: publication
    },
    {
        date: "June 2025", 
        title: "The Art of Not Knowing: Accommodating Structured Missingness in Biomedical Research",
        description: "Our work on structured missingness in biomedical data is now published in bioRxiv.",
        link: "https://www.biorxiv.org/content/10.1101/2025.06.07.658014v1",
        type: preprint
    },
];

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { newsData };
}