// components/SEO.jsx
function SEO({ 
  title, 
  description, 
  keywords,
  ogUrl = "https://encryvia.com",
  ogImage = "https://opengraph.b-cdn.net/production/images/ed2812d7-6bb0-469c-bb05-31a433ed5646.jpg?token=5ey5nOFeGdg7PCwnlRzqeF6cgVq3klAi4pyQhzRTlrI&height=675&width=1200&expires=33296004933"
}) {
  const fullTitle = title ? `${title} | EncryVia` : "EncryVia | Securing & Scaling Businesses with 3 in 1 solutions.";
  
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="encryvia.com" />
      <meta property="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}

export default SEO;
