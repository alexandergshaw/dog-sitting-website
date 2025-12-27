# CSV Data Management Guide

Your website now uses CSV files to manage reviews, stats, and other dynamic content. This makes it easy to update without touching code!

## 📁 CSV Files Location

All CSV files are in the `/data` folder:

```
/workspaces/dog-sitting-website/data/
├── reviews.csv    # Customer reviews/testimonials
└── stats.csv      # Business statistics
```

## 📊 File Formats

### reviews.csv
Stores customer testimonials that appear on the homepage.

**Format:**
```csv
name,location,rating,comment,date
Sarah M.,Dundee,5,"Great service!",2024-11-15
```

**Columns:**
- `name` - Customer name (e.g., "Sarah M.")
- `location` - Neighborhood (e.g., "Dundee", "West Omaha")
- `rating` - Number 1-5 (5 is best)
- `comment` - Review text (use quotes if it contains commas)
- `date` - Format: YYYY-MM-DD

**To add a review:**
1. Open `/data/reviews.csv`
2. Add a new line at the end
3. Save the file
4. The homepage automatically shows the 3 most recent reviews

### stats.csv
Stores business metrics shown on the homepage.

**Format:**
```csv
metric,value
total_dogs,127
years_experience,5
rating,5.0
total_reviews,47
repeat_clients,89
happy_families,100
```

**Metrics:**
- `total_dogs` - Total number of dogs you've watched
- `years_experience` - Years in business
- `rating` - Average rating (e.g., 5.0, 4.8)
- `total_reviews` - Total number of reviews
- `repeat_clients` - Percentage of repeat clients
- `happy_families` - Number of happy families

**To update stats:**
1. Open `/data/stats.csv`
2. Change the `value` for any metric
3. Save the file
4. Stats update automatically on the homepage

## 🔄 How to Update

### Using GitHub (Recommended)
1. Go to your repository on GitHub
2. Navigate to `data/reviews.csv` or `data/stats.csv`
3. Click the pencil icon (Edit)
4. Make your changes
5. Click "Commit changes"
6. Your site updates automatically!

### Using VS Code
1. Open the file in VS Code
2. Edit the CSV data
3. Save (Ctrl+S / Cmd+S)
4. Commit and push to GitHub

### Using Excel/Google Sheets
1. Download the CSV file
2. Open in Excel or Google Sheets
3. Make edits
4. Save as CSV (NOT Excel format)
5. Upload back to GitHub

## ⚠️ Important Rules

1. **Don't remove the header row** (first line with column names)
2. **Use quotes around comments** that contain commas
   ```csv
   Good: "Great service, highly recommend!"
   Bad:  Great service, highly recommend!
   ```
3. **Keep the date format**: YYYY-MM-DD (e.g., 2024-12-15)
4. **Rating must be 1-5**: Don't use decimals for ratings in reviews.csv
5. **No extra commas**: Each row should have exactly the right number of columns

## 🎯 Example Updates

### Adding a New Review
```csv
name,location,rating,comment,date
Sarah M.,Dundee,5,"Best dog sitter!",2024-11-15
Mike T.,Aksarben,5,"Great service!",2024-12-20
👉 Lisa K.,Midtown,5,"Our dog loved her!",2024-12-27
```

### Updating Total Dogs Watched
```csv
metric,value
👉 total_dogs,150
years_experience,5
```

## 🚀 API Endpoints

You can also access this data programmatically:

- **GET /api/reviews** - Returns all reviews as JSON
- **GET /api/stats** - Returns all stats as JSON

Example:
```bash
curl http://localhost:3000/api/reviews
curl http://localhost:3000/api/stats
```

## 💡 Tips

1. **Update regularly**: Keep stats current by updating monthly
2. **Get permission**: Always ask customers before adding their reviews
3. **Keep it real**: Use actual customer names and feedback
4. **Backup**: Keep a backup copy of your CSV files before major edits
5. **Preview**: After updating, check your website to make sure it looks good

## 🔧 Troubleshooting

**Reviews not showing up?**
- Check CSV format (use quotes for text with commas)
- Make sure file is saved as `.csv` not `.xlsx`
- Verify no empty rows between data

**Stats showing wrong numbers?**
- Check for typos in metric names (must match exactly)
- Ensure values are numbers, not text
- Don't use commas in numbers (use `1000` not `1,000`)

**Site errors after updating?**
- Revert to previous version
- Check for extra commas or quotes
- Make sure header row is intact
