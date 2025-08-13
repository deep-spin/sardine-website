// Complete country database with coordinates and colors
// Add this to your data folder as data/countries.js

const COUNTRY_DATABASE = {
    // Colors for countries (automatically assigned from a curated palette)
    colors: {
        // Europe
        'Portugal': '#ef4444',     // Red
        'Spain': '#f97316',       // Orange
        'France': '#3b82f6',      // Blue
        'Italy': '#22c55e',       // Green
        'Germany': '#8b5cf6',     // Purple
        'United Kingdom': '#06b6d4', // Cyan
        'Netherlands': '#f59e0b',  // Amber
        'Belgium': '#ec4899',     // Pink
        'Switzerland': '#84cc16', // Lime
        'Austria': '#6366f1',     // Indigo
        'Sweden': '#10b981',      // Emerald
        'Norway': '#f43f5e',      // Rose
        'Denmark': '#14b8a6',     // Teal
        'Finland': '#a855f7',     // Violet
        'Poland': '#dc2626',      // Red-600
        'Czech Republic': '#ea580c', // Orange-600
        'Hungary': '#2563eb',     // Blue-600
        'Romania': '#16a34a',     // Green-600
        'Bulgaria': '#9333ea',    // Purple-600
        'Greece': '#0891b2',      // Cyan-600
        'Croatia': '#d97706',     // Amber-600
        'Slovenia': '#c2410c',    // Orange-700
        'Slovakia': '#1d4ed8',    // Blue-700
        'Estonia': '#15803d',     // Green-700
        'Latvia': '#7c3aed',      // Purple-700
        'Lithuania': '#0e7490',   // Cyan-700
        'Ireland': '#b45309',     // Amber-700
        'Iceland': '#be185d',     // Pink-700
        'Serbia': '#65a30d',      // Lime-700
        'Montenegro': '#4338ca',  // Indigo-700
        'Bosnia and Herzegovina': '#059669', // Emerald-700
        'North Macedonia': '#be123c', // Rose-700
        'Albania': '#0f766e',     // Teal-700
        'Moldova': '#7c2d12',     // Orange-800
        'Ukraine': '#1e3a8a',     // Blue-800
        'Belarus': '#14532d',     // Green-800
        'Russia': '#581c87',      // Purple-800
        'Luxembourg': '#155e75',  // Cyan-800
        'Malta': '#92400e',       // Amber-800
        'Cyprus': '#9f1239',      // Rose-800
        
        // Asia
        'China': '#ef4444',       // Red
        'Japan': '#f97316',       // Orange
        'South Korea': '#3b82f6', // Blue
        'India': '#22c55e',       // Green
        'Indonesia': '#8b5cf6',   // Purple
        'Thailand': '#06b6d4',    // Cyan
        'Vietnam': '#f59e0b',     // Amber
        'Philippines': '#ec4899', // Pink
        'Malaysia': '#84cc16',    // Lime
        'Singapore': '#6366f1',   // Indigo
        'Myanmar': '#10b981',     // Emerald
        'Cambodia': '#f43f5e',    // Rose
        'Laos': '#14b8a6',        // Teal
        'Bangladesh': '#a855f7',  // Violet
        'Pakistan': '#dc2626',    // Red-600
        'Afghanistan': '#ea580c', // Orange-600
        'Iran': '#2563eb',        // Blue-600
        'Iraq': '#16a34a',        // Green-600
        'Turkey': '#9333ea',      // Purple-600
        'Syria': '#0891b2',       // Cyan-600
        'Lebanon': '#d97706',     // Amber-600
        'Jordan': '#c2410c',      // Orange-700
        'Israel': '#1d4ed8',      // Blue-700
        'Palestine': '#15803d',   // Green-700
        'Saudi Arabia': '#7c3aed', // Purple-700
        'Yemen': '#0e7490',       // Cyan-700
        'Oman': '#b45309',        // Amber-700
        'UAE': '#be185d',         // Pink-700
        'Qatar': '#65a30d',       // Lime-700
        'Kuwait': '#4338ca',      // Indigo-700
        'Bahrain': '#059669',     // Emerald-700
        'Armenia': '#be123c',     // Rose-700
        'Georgia': '#0f766e',     // Teal-700
        'Azerbaijan': '#7c2d12',  // Orange-800
        'Kazakhstan': '#1e3a8a',  // Blue-800
        'Uzbekistan': '#14532d',  // Green-800
        'Kyrgyzstan': '#581c87',  // Purple-800
        'Tajikistan': '#155e75',  // Cyan-800
        'Turkmenistan': '#92400e', // Amber-800
        'Mongolia': '#9f1239',    // Rose-800
        'North Korea': '#166534', // Green-600 dark
        'Nepal': '#7c3aed',       // Purple-700
        'Bhutan': '#0e7490',      // Cyan-700
        'Sri Lanka': '#b45309',   // Amber-700
        'Maldives': '#be185d',    // Pink-700
        
        // Africa
        'South Africa': '#ef4444', // Red
        'Egypt': '#f97316',       // Orange
        'Nigeria': '#3b82f6',     // Blue
        'Kenya': '#22c55e',       // Green
        'Morocco': '#8b5cf6',     // Purple
        'Algeria': '#06b6d4',     // Cyan
        'Tunisia': '#f59e0b',     // Amber
        'Libya': '#ec4899',       // Pink
        'Sudan': '#84cc16',       // Lime
        'Ethiopia': '#6366f1',    // Indigo
        'Ghana': '#10b981',       // Emerald
        'Tanzania': '#f43f5e',    // Rose
        'Uganda': '#14b8a6',      // Teal
        'Rwanda': '#a855f7',      // Violet
        'Zambia': '#dc2626',      // Red-600
        'Zimbabwe': '#ea580c',    // Orange-600
        'Botswana': '#2563eb',    // Blue-600
        'Namibia': '#16a34a',     // Green-600
        'Angola': '#9333ea',      // Purple-600
        'Mozambique': '#0891b2',  // Cyan-600
        'Madagascar': '#d97706',  // Amber-600
        'Mauritius': '#c2410c',   // Orange-700
        'Senegal': '#1d4ed8',     // Blue-700
        'Mali': '#15803d',        // Green-700
        'Burkina Faso': '#7c3aed', // Purple-700
        'Niger': '#0e7490',       // Cyan-700
        'Chad': '#b45309',        // Amber-700
        'Cameroon': '#be185d',    // Pink-700
        'Central African Republic': '#65a30d', // Lime-700
        'Democratic Republic of Congo': '#4338ca', // Indigo-700
        'Republic of Congo': '#059669', // Emerald-700
        'Gabon': '#be123c',       // Rose-700
        'Equatorial Guinea': '#0f766e', // Teal-700
        'Ivory Coast': '#7c2d12', // Orange-800
        'Liberia': '#1e3a8a',     // Blue-800
        'Sierra Leone': '#14532d', // Green-800
        'Guinea': '#581c87',      // Purple-800
        'Guinea-Bissau': '#155e75', // Cyan-800
        'Gambia': '#92400e',      // Amber-800
        'Cape Verde': '#9f1239',  // Rose-800
        'Sao Tome and Principe': '#166534', // Green-600 dark
        'Comoros': '#7c3aed',     // Purple-700
        'Seychelles': '#0e7490',  // Cyan-700
        'Djibouti': '#b45309',    // Amber-700
        'Eritrea': '#be185d',     // Pink-700
        'Somalia': '#65a30d',     // Lime-700
        'Malawi': '#4338ca',      // Indigo-700
        'Lesotho': '#059669',     // Emerald-700
        'Swaziland': '#be123c',   // Rose-700
        'Burundi': '#0f766e',     // Teal-700
        'Togo': '#7c2d12',        // Orange-800
        'Benin': '#1e3a8a',       // Blue-800
        
        // Americas
        'United States': '#ef4444', // Red
        'Canada': '#f97316',      // Orange
        'Mexico': '#3b82f6',      // Blue
        'Brazil': '#22c55e',      // Green
        'Argentina': '#8b5cf6',   // Purple
        'Chile': '#06b6d4',       // Cyan
        'Peru': '#f59e0b',        // Amber
        'Colombia': '#ec4899',    // Pink
        'Venezuela': '#84cc16',   // Lime
        'Ecuador': '#6366f1',     // Indigo
        'Bolivia': '#10b981',     // Emerald
        'Paraguay': '#f43f5e',    // Rose
        'Uruguay': '#14b8a6',     // Teal
        'Guyana': '#a855f7',      // Violet
        'Suriname': '#dc2626',    // Red-600
        'French Guiana': '#ea580c', // Orange-600
        'Costa Rica': '#2563eb',  // Blue-600
        'Panama': '#16a34a',      // Green-600
        'Nicaragua': '#9333ea',   // Purple-600
        'Honduras': '#0891b2',    // Cyan-600
        'El Salvador': '#d97706', // Amber-600
        'Guatemala': '#c2410c',   // Orange-700
        'Belize': '#1d4ed8',      // Blue-700
        'Cuba': '#15803d',        // Green-700
        'Jamaica': '#7c3aed',     // Purple-700
        'Haiti': '#0e7490',       // Cyan-700
        'Dominican Republic': '#b45309', // Amber-700
        'Puerto Rico': '#be185d', // Pink-700
        'Trinidad and Tobago': '#65a30d', // Lime-700
        'Barbados': '#4338ca',    // Indigo-700
        'Grenada': '#059669',     // Emerald-700
        'Saint Vincent and the Grenadines': '#be123c', // Rose-700
        'Saint Lucia': '#0f766e', // Teal-700
        'Dominica': '#7c2d12',    // Orange-800
        'Antigua and Barbuda': '#1e3a8a', // Blue-800
        'Saint Kitts and Nevis': '#14532d', // Green-800
        'Bahamas': '#581c87',     // Purple-800
        
        // Oceania
        'Australia': '#ef4444',   // Red
        'New Zealand': '#f97316', // Orange
        'Papua New Guinea': '#3b82f6', // Blue
        'Fiji': '#22c55e',        // Green
        'Solomon Islands': '#8b5cf6', // Purple
        'Vanuatu': '#06b6d4',     // Cyan
        'Samoa': '#f59e0b',       // Amber
        'Tonga': '#ec4899',       // Pink
        'Micronesia': '#84cc16',  // Lime
        'Palau': '#6366f1',       // Indigo
        'Marshall Islands': '#10b981', // Emerald
        'Nauru': '#f43f5e',       // Rose
        'Kiribati': '#14b8a6',    // Teal
        'Tuvalu': '#a855f7',      // Violet
    },
    
    // Coordinates for all countries [latitude, longitude]
    coordinates: {
        // Europe
        'Portugal': [39.3999, -8.2245],
        'Spain': [40.4637, -3.7492],
        'France': [46.2276, 2.2137],
        'Italy': [41.8719, 12.5674],
        'Germany': [51.1657, 10.4515],
        'United Kingdom': [55.3781, -3.4360],
        'Netherlands': [52.1326, 5.2913],
        'Belgium': [50.5039, 4.4699],
        'Switzerland': [46.8182, 8.2275],
        'Austria': [47.5162, 14.5501],
        'Sweden': [60.1282, 18.6435],
        'Norway': [60.4720, 8.4689],
        'Denmark': [56.2639, 9.5018],
        'Finland': [61.9241, 25.7482],
        'Poland': [51.9194, 19.1451],
        'Czech Republic': [49.8175, 15.4730],
        'Hungary': [47.1625, 19.5033],
        'Romania': [45.9432, 24.9668],
        'Bulgaria': [42.7339, 25.4858],
        'Greece': [39.0742, 21.8243],
        'Croatia': [45.1, 15.2],
        'Slovenia': [46.1512, 14.9955],
        'Slovakia': [48.6690, 19.6990],
        'Estonia': [58.5953, 25.0136],
        'Latvia': [56.8796, 24.6032],
        'Lithuania': [55.1694, 23.8813],
        'Ireland': [53.4129, -8.2439],
        'Iceland': [64.9631, -19.0208],
        'Serbia': [44.0165, 21.0059],
        'Montenegro': [42.7087, 19.3744],
        'Bosnia and Herzegovina': [43.9159, 17.6791],
        'North Macedonia': [41.6086, 21.7453],
        'Albania': [41.1533, 20.1683],
        'Moldova': [47.4116, 28.3699],
        'Ukraine': [48.3794, 31.1656],
        'Belarus': [53.7098, 27.9534],
        'Russia': [61.5240, 105.3188],
        'Luxembourg': [49.8153, 6.1296],
        'Malta': [35.9375, 14.3754],
        'Cyprus': [35.1264, 33.4299],
        
        // Asia
        'China': [35.8617, 104.1954],
        'Japan': [36.2048, 138.2529],
        'South Korea': [35.9078, 127.7669],
        'India': [20.5937, 78.9629],
        'Indonesia': [-0.7893, 113.9213],
        'Thailand': [15.8700, 100.9925],
        'Vietnam': [14.0583, 108.2772],
        'Philippines': [12.8797, 121.7740],
        'Malaysia': [4.2105, 101.9758],
        'Singapore': [1.3521, 103.8198],
        'Myanmar': [21.9162, 95.9560],
        'Cambodia': [12.5657, 104.9910],
        'Laos': [19.8563, 102.4955],
        'Bangladesh': [23.6850, 90.3563],
        'Pakistan': [30.3753, 69.3451],
        'Afghanistan': [33.9391, 67.7100],
        'Iran': [32.4279, 53.6880],
        'Iraq': [33.2232, 43.6793],
        'Turkey': [38.9637, 35.2433],
        'Syria': [34.8021, 38.9968],
        'Lebanon': [33.8547, 35.8623],
        'Jordan': [30.5852, 36.2384],
        'Israel': [31.0461, 34.8516],
        'Palestine': [31.9522, 35.2332],
        'Saudi Arabia': [23.8859, 45.0792],
        'Yemen': [15.5527, 48.5164],
        'Oman': [21.4735, 55.9754],
        'UAE': [23.4241, 53.8478],
        'Qatar': [25.3548, 51.1839],
        'Kuwait': [29.3117, 47.4818],
        'Bahrain': [25.9304, 50.6378],
        'Armenia': [40.0691, 45.0382],
        'Georgia': [42.3154, 43.3569],
        'Azerbaijan': [40.1431, 47.5769],
        'Kazakhstan': [48.0196, 66.9237],
        'Uzbekistan': [41.3775, 64.5853],
        'Kyrgyzstan': [41.2044, 74.7661],
        'Tajikistan': [38.8610, 71.2761],
        'Turkmenistan': [38.9697, 59.5563],
        'Mongolia': [46.8625, 103.8467],
        'North Korea': [40.3399, 127.5101],
        'Nepal': [28.3949, 84.1240],
        'Bhutan': [27.5142, 90.4336],
        'Sri Lanka': [7.8731, 80.7718],
        'Maldives': [3.2028, 73.2207],
        
        // Africa
        'South Africa': [-30.5595, 22.9375],
        'Egypt': [26.0975, 30.0444],
        'Nigeria': [9.0820, 8.6753],
        'Kenya': [-0.0236, 37.9062],
        'Morocco': [31.7917, -7.0926],
        'Algeria': [28.0339, 1.6596],
        'Tunisia': [33.8869, 9.5375],
        'Libya': [26.3351, 17.2283],
        'Sudan': [12.8628, 30.2176],
        'Ethiopia': [9.1450, 40.4897],
        'Ghana': [7.9465, -1.0232],
        'Tanzania': [-6.3690, 34.8888],
        'Uganda': [1.3733, 32.2903],
        'Rwanda': [-1.9403, 29.8739],
        'Zambia': [-13.1339, 27.8493],
        'Zimbabwe': [-19.0154, 29.1549],
        'Botswana': [-22.3285, 24.6849],
        'Namibia': [-22.9576, 18.4904],
        'Angola': [-11.2027, 17.8739],
        'Mozambique': [-18.6657, 35.5296],
        'Madagascar': [-18.7669, 46.8691],
        'Mauritius': [-20.3484, 57.5522],
        'Senegal': [14.4974, -14.4524],
        'Mali': [17.5707, -3.9962],
        'Burkina Faso': [12.2383, -1.5616],
        'Niger': [17.6078, 8.0817],
        'Chad': [15.4542, 18.7322],
        'Cameroon': [7.3697, 12.3547],
        'Central African Republic': [6.6111, 20.9394],
        'Democratic Republic of Congo': [-4.0383, 21.7587],
        'Republic of Congo': [-0.2280, 15.8277],
        'Gabon': [-0.8037, 11.6094],
        'Equatorial Guinea': [1.6508, 10.2679],
        'Ivory Coast': [7.5400, -5.5471],
        'Liberia': [6.4281, -9.4295],
        'Sierra Leone': [8.4606, -11.7799],
        'Guinea': [9.9456, -9.6966],
        'Guinea-Bissau': [11.8037, -15.1804],
        'Gambia': [13.4432, -15.3101],
        'Cape Verde': [16.5388, -24.0132],
        'Sao Tome and Principe': [0.1864, 6.6131],
        'Comoros': [-11.6455, 43.3333],
        'Seychelles': [-4.6796, 55.4920],
        'Djibouti': [11.8251, 42.5903],
        'Eritrea': [15.1794, 39.7823],
        'Somalia': [5.1521, 46.1996],
        'Malawi': [-13.2543, 34.3015],
        'Lesotho': [-29.6100, 28.2336],
        'Swaziland': [-26.5225, 31.4659],
        'Burundi': [-3.3731, 29.9189],
        'Togo': [8.6195, 0.8248],
        'Benin': [9.3077, 2.3158],
        
        // Americas
        'United States': [39.8283, -98.5795],
        'Canada': [56.1304, -106.3468],
        'Mexico': [23.6345, -102.5528],
        'Brazil': [-14.2350, -51.9253],
        'Argentina': [-38.4161, -63.6167],
        'Chile': [-35.6751, -71.5430],
        'Peru': [-9.1900, -75.0152],
        'Colombia': [4.5709, -74.2973],
        'Venezuela': [6.4238, -66.5897],
        'Ecuador': [-1.8312, -78.1834],
        'Bolivia': [-16.2902, -63.5887],
        'Paraguay': [-23.4425, -58.4438],
        'Uruguay': [-32.5228, -55.7658],
        'Guyana': [4.8604, -58.9302],
        'Suriname': [3.9193, -56.0278],
        'French Guiana': [3.9339, -53.1258],
        'Costa Rica': [9.7489, -83.7534],
        'Panama': [8.5380, -80.7821],
        'Nicaragua': [12.8654, -85.2072],
        'Honduras': [15.2000, -86.2419],
        'El Salvador': [13.7942, -88.8965],
        'Guatemala': [15.7835, -90.2308],
        'Belize': [17.1899, -88.4976],
        'Cuba': [21.5218, -77.7812],
        'Jamaica': [18.1096, -77.2975],
        'Haiti': [18.9712, -72.2852],
        'Dominican Republic': [18.7357, -70.1627],
        'Puerto Rico': [18.2208, -66.5901],
        'Trinidad and Tobago': [10.6918, -61.2225],
        'Barbados': [13.1939, -59.5432],
        'Grenada': [12.1165, -61.6790],
        'Saint Vincent and the Grenadines': [12.9843, -61.2872],
        'Saint Lucia': [13.9094, -60.9789],
        'Dominica': [15.4150, -61.3710],
        'Antigua and Barbuda': [17.0608, -61.7964],
        'Saint Kitts and Nevis': [17.3578, -62.7830],
        'Bahamas': [25.0343, -77.3963],
        
        // Oceania
        'Australia': [-25.2744, 133.7751],
        'New Zealand': [-40.9006, 174.8860],
        'Papua New Guinea': [-6.3150, 143.9555],
        'Fiji': [-16.5780, 179.4144],
        'Solomon Islands': [-9.6457, 160.1562],
        'Vanuatu': [-15.3767, 166.9592],
        'Samoa': [-13.7590, -172.1046],
        'Tonga': [-21.1789, -175.1982],
        'Micronesia': [7.4256, 150.5508],
        'Palau': [7.5150, 134.5825],
        'Marshall Islands': [7.1315, 171.1845],
        'Nauru': [-0.5228, 166.9315],
        'Kiribati': [-3.3704, -168.7340],
        'Tuvalu': [-7.1095, 177.6493],
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COUNTRY_DATABASE;
}