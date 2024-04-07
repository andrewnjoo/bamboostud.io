const fs = require('fs');

async function updateMDXFile(data) {
  try {
    // Read the content of the existing MDX file
    const mdxContent = fs.readFileSync('no-code.mdx', 'utf8');

    // Replace the review counts and followers counts in the MDX content
    let updatedMDXContent = mdxContent;
    for (const product of data) {
      const pattern = new RegExp(`### \\[${product.name}\\]\\((.*?)\\)`, 'g');
      updatedMDXContent = updatedMDXContent.replace(pattern, match => {
        const updatedMatch = `${match}\n\n- Reviews Count: ${product.reviewsCount}\n- Followers Count: ${product.followersCount}\n`;
        return updatedMatch;
      });
    }

    // Write the modified content to a new MDX file
    fs.writeFileSync('no-code-final.mdx', updatedMDXContent, 'utf8');
    console.log('MDX file updated successfully.');
  } catch (error) {
    console.error('Error updating MDX file:', error);
  }
}

// Example usage with data from scraping
const scrapedData = [
  { name: 'FlutterFlow', reviewsCount: '206', followersCount: '2.0K' },
  { name: 'Bubble', reviewsCount: '187', followersCount: '1.1K' },
  { name: 'WeWeb', reviewsCount: '128', followersCount: '105' },
  { name: 'Airtable', reviewsCount: '213', followersCount: '629' },
  { name: 'Noodl', reviewsCount: '28', followersCount: '439' }
];

// Update the MDX file with scraped data
updateMDXFile(scrapedData);
