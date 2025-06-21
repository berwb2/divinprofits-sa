
# How to Update the Portfolio

## Adding or Updating Portfolio Items

1. **Open `src/data/portfolio.ts`.**
2. **Each portfolio item has:**
   - `title`: The project name.
   - `category`: E.g., "Pool Construction", "Landscaping", etc.
   - `image`: A direct link to the portfolio image.
   - `url`: The website's public URL.
   - `description`: A short project summary.

3. **To add a new item:**
   - Copy an existing item and paste it as a new object in the `portfolioItems` array.
   - Fill in the fields. Use a placeholder image and `"#"` as the URL if you don't have the real assets yet.

4. **When you get the real image or link:**
   - Replace the placeholder value with the final image URL or website address.

## Example

```typescript
{
  title: "My New Project",
  category: "Pool Design",
  image: "https://example.com/image.png",
  url: "https://myproject.com",
  description: "Custom pool design with modern features and smart automation."
}
```

## Important

- Do **not** hardcode portfolio items in the component files.
- Only update `src/data/portfolio.ts` to add, edit, or remove portfolio items.
- The portfolio grid and carousel will update automatically.
- Categories in the filter are automatically generated from your portfolio items.

## Placeholder Images

Use these Unsplash URLs for placeholder images:
- `https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80` - Pool/water
- `https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&q=80` - Landscaping
- `https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80` - Outdoor spaces
