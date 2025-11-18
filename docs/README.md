📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Enhanced SKU Selector

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

The **Enhanced SKU Selector** is a powerful VTEX IO app that provides an advanced product variation selector with support for **multiple composite color variations**. This enhanced version extends the standard SKU Selector functionality by allowing products with multiple color specifications (such as furniture with "Top Color", "Base Color", etc.) to display visual thumbnails for each variation.

**Key Features:**
- ✅ Support for composite color variations (e.g., "Top Color", "Base Color", "Color of the Top")
- ✅ Visual thumbnails for color variations in 17+ languages
- ✅ Automatic image filtering based on `imageLabel` matching between Catalog specifications and image labels
- ✅ 100% backward compatible with existing implementations
- ✅ Responsive design with customizable image dimensions

## Configuration 

<!--
  ![Media Placeholder](https://user-images.githubusercontent.com/52087100/71204177-42ca4f80-227e-11ea-89e6-e92e65370c69.png)
 -->

### Step 1: Adding the app to your theme dependencies

Add the Enhanced SKU Selector app to your theme's `manifest.json` file:

```json
{
  "dependencies": {
    "{vendor}.enhanced-sku-selector": "0.x"
  }
}
```

### Step 2: Adding the SKU Selector block to your templates

Add the `enhanced-sku-selector` block to your product page template or any other desired template. For example, in your `store.product` template:

```json
{
  "store.product": {
    "children": [
      "product-name",
      "enhanced-sku-selector",
      "product-price",
      "buy-button"
    ]
  }
}
```

> ⚠️ **Important:** Use only **ONE** `enhanced-sku-selector` block declaration per product page. If you declare multiple `enhanced-sku-selector` blocks, selecting a variation in one selector will reset the selection in the other selectors, causing unexpected behavior.

### Blocks

The app exports the following block:

| Block name                | Description                                    |
| ------------------------- | ---------------------------------------------- |
| `enhanced-sku-selector`   | Displays product SKU variations with visual selectors for color variations |

### `enhanced-sku-selector` props

| Prop name                        | Type                                                                    | Description                                                                                                                                    | Default value |
| -------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `seeMoreLabel`                   | `string`                                                                | Label text for the "See more" button when there are more items than `maxItems`                                                                 | -             |
| `maxItems`                       | `number`                                                                | Maximum number of items to display before showing the "See more" button                                                                        | `10`          |
| `hideImpossibleCombinations`     | `boolean`                                                               | Hides variation combinations that are not available                                                                                             | `false`       |
| `disableUnavailableSelectOptions` | `boolean`                                                               | Disables unavailable variation options instead of hiding them                                                                                   | `false`       |
| `showValueForVariation`          | `enum` (`'none'`, `'image'`, `'all'`)                                  | Controls when to show variation value labels. `'none'`: never, `'image'`: only for image variations, `'all'`: always                            | `'none'`      |
| `showValueNameForImageVariation` | `boolean`                                                               | Shows the variation value name for image variations (deprecated, use `showValueForVariation` instead)                                           | `false`       |
| `imageHeight`                    | `number` \| `object`                                                    | Height of variation images. Can be a number or responsive object with `desktop` and `mobile` keys                                               | `40`          |
| `imageWidth`                     | `number` \| `object`                                                    | Width of variation images. Can be a number or responsive object with `desktop` and `mobile` keys                                               | `40`          |
| `thumbnailImage`                 | `string`                                                                | **Optional:** Variation name to filter images by. Supports composite variations like "Top Color", "Base Color". **Note:** This prop is not required for thumbnails to work. The component automatically detects color variations and matches images based on the `imageLabel` in the VTEX Catalog. You can declare this prop without errors, but it's recommended to **omit it** for optimal functionality. | -             |
| `visibleVariations`               | `string[]`                                                              | **Optional:** Array of variation names to display. If not provided, all variations are shown. **Note:** This prop is not required for thumbnails to work. The component automatically displays all variations with proper image matching. You can declare this prop without errors, but it's recommended to **omit it** for optimal functionality. | -             |
| `showVariationsLabels`            | `enum` (`'none'`, `'variation'`, `'itemValue'`, `'variationAndItemValue'`) | Controls how variation labels are displayed                                                                                                     | `'variation'` |
| `variationsSpacing`              | `number`                                                                | Spacing between variation selectors (0-11)                                                                                                     | `7`           |
| `showVariationsErrorMessage`     | `boolean`                                                               | Shows error message when a variation selection is required but not made                                                                         | `false`       |
| `initialSelection`                | `enum` (`'empty'`, `'image'`, `'complete'`)                            | Initial selection behavior. `'empty'`: no selection, `'image'`: select first image variation, `'complete'`: select first available SKU        | `'image'`     |
| `displayMode`                    | `string` \| `object`                                                    | Display mode: `'default'` or `'slider'`. Can be responsive with `desktop` and `mobile` keys                                                     | `'default'`   |
| `sliderDisplayThreshold`         | `number`                                                                | Minimum number of items to trigger slider display mode                                                                                         | `5`           |
| `sliderArrowSize`                | `number`                                                                | Size of slider navigation arrows                                                                                                                | `20`          |
| `sliderItemsPerPage`             | `number` \| `object`                                                    | Number of items per page in slider mode. Can be responsive with `desktop` and `mobile` keys                                                    | `5`           |
| `sortVariationsByLabel`          | `boolean`                                                               | Sorts variation options alphabetically by label                                                                                                 | `false`       |
| `visibility`                     | `enum` (`'always'`, `'more-than-one'`)                                 | Controls when the selector is visible. `'always'`: always show, `'more-than-one'`: only when there's more than one SKU                            | `'always'`    |

#### `imageHeight` and `imageWidth` object:

When using responsive values, the object should follow this structure:

| Prop name | Type     | Description                    | Default value |
| --------- | -------- | ------------------------------ | ------------- |
| `desktop` | `number` | Image dimension for desktop    | -             |
| `mobile`  | `number` | Image dimension for mobile      | -             |

#### `displayMode` object:

When using responsive display modes:

| Prop name | Type     | Description                    | Default value |
| --------- | -------- | ------------------------------ | ------------- |
| `desktop` | `string` | Display mode for desktop (`'default'` or `'slider'`) | -             |
| `mobile`  | `string` | Display mode for mobile (`'default'` or `'slider'`)   | -             |

### How Thumbnails Work

The Enhanced SKU Selector automatically displays visual thumbnails for color variations when the following conditions are met:

1. **Catalog Configuration:** Product images in the VTEX Catalog must have `imageLabel` values that match the pattern: `"{VariationName} - {VariationValue}"`
2. **Specification Name:** The SKU specification name must contain a color keyword (see supported languages below)
3. **Automatic Detection:** The component automatically detects color variations and matches them with images - **no props required**

**Example Catalog Setup:**
- SKU Specification: "Top Color" with values: "White", "Black", "Gray"
- Product Images with `imageLabel`:
  - `"Top Color - White"`
  - `"Top Color - Black"`
  - `"Top Color - Gray"`

**Example Store Theme Configuration:**

```json
{
  "store.product": {
    "children": [
      "product-name",
      "enhanced-sku-selector",
      "product-price",
      "buy-button"
    ]
  },
  
  "enhanced-sku-selector": {
    "props": {
      "imageHeight": { "desktop": 60, "mobile": 60 },
      "imageWidth": { "desktop": 60, "mobile": 60 }
    }
  }
}
```

> 💡 **Tip:** You don't need to declare `visibleVariations` or `thumbnailImage` props. The component automatically detects all color variations and displays thumbnails when the specification name matches a color keyword and images have the correct `imageLabel` format.

**Supported Color Keywords (17+ languages):**
- 🇧🇷 Portuguese: `cor`
- 🇺🇸 English: `color`, `colour`
- 🇪🇸 Spanish: `color`
- 🇮🇹 Italian: `colore`, `colori`
- 🇫🇷 French: `couleur`
- 🇩🇪 German: `farbe`
- 🇳🇱 Dutch: `kleuren`
- 🇷🇴 Romanian: `culoare`
- 🇫🇮 Finnish: `värit`
- 🇵🇱 Polish: `kolory`, `farby`
- 🇩🇰 Danish: `farve`
- 🇸🇪 Swedish: `färger`
- 🇨🇿 Czech: `barvy`
- 🇭🇷 Croatian: `boje`
- 🇷🇺 Russian: `цвят`

**Important Notes:**
- The component automatically detects color variations by checking if the specification name contains color keywords
- Images are automatically matched when `imageLabel` follows the format: `"{VariationName} - {VariationValue}"`
- Both exact matches (e.g., "Color") and composite variations (e.g., "Top Color", "Color of the Base") are supported
- The props `visibleVariations` and `thumbnailImage` are optional and not required for thumbnails to work
- 100% backward compatible with existing "Color" variations 

## Modus Operandi

### How It Works

The Enhanced SKU Selector automatically detects color variations using an intelligent pattern matching system:

1. **Color Detection:** The component automatically checks if a variation name contains color keywords in 17+ languages
2. **Image Matching:** For color variations, it searches product images with `imageLabel` matching the pattern: `"{VariationName} - {VariationValue}"`
3. **Visual Display:** When images are found, they are displayed as thumbnails instead of text labels
4. **Automatic Processing:** All color variations are automatically detected and displayed with thumbnails when images match the naming convention

### Catalog Requirements

For the visual thumbnails to work correctly, product images in the VTEX Catalog must follow this naming convention:

- **Format:** `"{VariationName} - {VariationValue}"`
- **Examples:**
  - `"Color - Black"`
  - `"Top Color - White"`
  - `"Base Color - Chrome"`
  - `"Cor do Tampo - Branco"` (Portuguese)

### Behavior Differences

- **Color Variations:** Automatically displays visual thumbnails for all variations that contain color keywords, when images with matching `imageLabel` are found in the Catalog
- **Composite Color Variations:** Supports variations like "Top Color", "Base Color", "Color of the Top" - all are automatically detected and display thumbnails
- **Non-Color Variations:** Variations that don't match color keywords display as text labels (standard behavior)
- **Single Block Usage:** Only one `enhanced-sku-selector` block should be used per product page to avoid selection conflicts

### Relationship with VTEX Admin

- **Catalog:** Product images must be uploaded with proper `imageLabel` values matching the format: `"{VariationName} - {VariationValue}"`. The specification name in the Catalog must match exactly with the variation name used in the `imageLabel`
- **Store Theme:** Use the block name `enhanced-sku-selector` in your Store Theme JSON files. The props `visibleVariations` and `thumbnailImage` are optional and not required for thumbnails to work
- **Backward Compatibility:** Existing products with "Color" variations continue to work without any changes 

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

### CSS Handles

The Enhanced SKU Selector provides the following CSS handles for customization:

| CSS Handles                    | Description                                                      |
| ------------------------------ | ---------------------------------------------------------------- |
| `diagonalCross`                | Diagonal cross overlay for unavailable items                     |
| `errorMessage`                 | Error message container                                          |
| `frameAround`                  | Frame border around selected items                               |
| `skuSelectorBadge`             | Discount badge displayed on items                                |
| `skuSelectorContainer`         | Main container for the SKU selector                             |
| `skuSelectorInternalBox`       | Internal box container for each selector item                    |
| `skuSelectorItem`              | Individual selector item                                         |
| `skuSelectorItemImage`         | Selector item when displaying an image                          |
| `skuSelectorItemImageValue`    | Image element within a selector item                             |
| `skuSelectorItemTextValue`     | Text value within a selector item                                |
| `unavailable`                  | Style for unavailable items                                      |
| `valueWrapper`                 | Wrapper container for variation values                          |

### CSS Handles with Modifiers

Some CSS handles support modifiers for more specific styling:

- `skuSelectorItem--{variationValue}` - Applied to items with specific variation values (e.g., `skuSelectorItem--black`)
- `skuSelectorItem--selected` - Applied to the currently selected item
- `valueWrapper--unavailable` - Applied to value wrappers of unavailable items

### Example Customization

```css
/* Customize selected item border */
.skuSelectorItem--selected .frameAround {
  border-color: #ff6b35;
  border-width: 2px;
}

/* Customize unavailable items */
.skuSelectorItem .unavailable {
  opacity: 0.3;
}

/* Customize image thumbnails */
.skuSelectorItemImage {
  border-radius: 8px;
  transition: transform 0.2s;
}

.skuSelectorItemImage:hover {
  transform: scale(1.05);
}
```

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->