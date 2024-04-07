const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeProductPage(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Scraping reviews count
    const reviewsCount = $('a[href$="/reviews"]').find('b').text();

    // Scraping followers count
    const followersCount = $('.styles_count___6_8F').eq(1).find('b').text();

    return { reviewsCount, followersCount };
  } catch (error) {
    console.error('Error scraping product page:', error);
    return null;
  }
}

// Example usage
const productUrl = 'https://www.producthunt.com/products/flutterflow';

scrapeProductPage(productUrl)
  .then(data => {
    if (data) {
      console.log('Reviews count:', data.reviewsCount);
      console.log('Followers count:', data.followersCount);
    }
  })
  .catch(error => console.error(error));
